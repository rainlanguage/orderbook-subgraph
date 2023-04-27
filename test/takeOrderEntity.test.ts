import { ethers } from "hardhat";
import { assert } from "chai";
import { ReserveToken18 } from "../typechain";
import {
  ONE,
  basicDeploy,
  compareStructs,
  eighteenZeros,
  getEvents,
  max_uint256,
  randomUint256,
} from "../utils";
import { orderBook, signers, subgraph } from "./0_initialization.test";
import { encodeMeta, getOrderConfig } from "../utils/orderBook/order";
import {
  AddOrderEvent,
  DepositConfigStruct,
  DepositEvent,
  OrderConfigStruct,
  TakeOrderConfigStruct,
  TakeOrderEvent,
  TakeOrdersConfigStruct,
} from "../typechain/contracts/orderbook/OrderBook";
import { getEventArgs, waitForSubgraphToBeSynced } from "./utils";
import { FetchResult } from "apollo-fetch";

describe("TakeOrderEntity", () => {
  let tokenA: ReserveToken18;
  let tokenB: ReserveToken18;

  beforeEach(async () => {
    tokenA = (await basicDeploy("ReserveToken18", {})) as ReserveToken18;
    tokenB = (await basicDeploy("ReserveToken18", {})) as ReserveToken18;
    await tokenA.initialize();
    await tokenB.initialize();
  });

  it("should query TakeOrderEntity correctly after take an order", async function () {
    const [, alice, bob] = signers;

    const aliceInputVault = ethers.BigNumber.from(randomUint256());
    const aliceOutputVault = ethers.BigNumber.from(randomUint256());

    const aliceOrder = encodeMeta("Order_A");

    // ASK ORDER

    const ratio_A = ethers.BigNumber.from("90" + eighteenZeros);

    const OrderConfig_A: OrderConfigStruct = await getOrderConfig(
      ratio_A,
      max_uint256,
      tokenA.address,
      18,
      aliceInputVault,
      tokenB.address,
      18,
      aliceOutputVault,
      aliceOrder
    );

    const txAddOrder = await orderBook.connect(alice).addOrder(OrderConfig_A);

    const { order: Order_A } = (await getEventArgs(
      txAddOrder,
      "AddOrder",
      orderBook
    )) as AddOrderEvent["args"];

    // DEPOSIT

    const amountB = ethers.BigNumber.from("2" + eighteenZeros);

    const depositConfigStructAlice: DepositConfigStruct = {
      token: tokenB.address,
      vaultId: aliceOutputVault,
      amount: amountB,
    };

    await tokenB.transfer(alice.address, amountB);
    await tokenB
      .connect(alice)
      .approve(orderBook.address, depositConfigStructAlice.amount);

    // Alice deposits tokenB into her output vault
    const txDepositOrderAlice = await orderBook
      .connect(alice)
      .deposit(depositConfigStructAlice);

    const { sender: depositAliceSender, config: depositAliceConfig } =
      (await getEventArgs(
        txDepositOrderAlice,
        "Deposit",
        orderBook
      )) as DepositEvent["args"];

    assert(depositAliceSender === alice.address);
    compareStructs(depositAliceConfig, depositConfigStructAlice);

    // TAKE ORDER

    // Bob takes order with direct wallet transfer
    const takeOrderConfigStruct: TakeOrderConfigStruct = {
      order: Order_A,
      inputIOIndex: 0,
      outputIOIndex: 0,
      signedContext: [],
    };

    const takeOrdersConfigStruct: TakeOrdersConfigStruct = {
      output: tokenA.address,
      input: tokenB.address,
      minimumInput: amountB,
      maximumInput: amountB,
      maximumIORatio: ratio_A,
      orders: [takeOrderConfigStruct],
    };

    const amountA = amountB.mul(ratio_A).div(ONE);
    await tokenA.transfer(bob.address, amountA);
    await tokenA.connect(bob).approve(orderBook.address, amountA);

    const txTakeOrders = await orderBook
      .connect(bob)
      .takeOrders(takeOrdersConfigStruct);

    const takeOrderEvents = (await getEvents(
      txTakeOrders,
      "TakeOrder",
      orderBook
    )) as Array<TakeOrderEvent["args"]>;

    const tokenAAliceBalance = await tokenA.balanceOf(alice.address);
    const tokenBAliceBalance = await tokenB.balanceOf(alice.address);
    const tokenABobBalance = await tokenA.balanceOf(bob.address);
    const tokenBBobBalance = await tokenB.balanceOf(bob.address);

    assert(tokenAAliceBalance.isZero()); // Alice has not yet withdrawn
    assert(tokenBAliceBalance.isZero());
    assert(tokenABobBalance.isZero());
    assert(tokenBBobBalance.eq(amountB));

    await orderBook.connect(alice).withdraw({
      token: tokenA.address,
      vaultId: aliceInputVault,
      amount: amountA,
    });

    const tokenAAliceBalanceWithdrawn = await tokenA.balanceOf(alice.address);
    assert(tokenAAliceBalanceWithdrawn.eq(amountA));

    // Subgraph check
    await waitForSubgraphToBeSynced();

    for (let i = 0; i < takeOrderEvents.length; i++) {
      // ID: tx.hash - N (N-th order taken)
      const takeOrderEntity_ID = `${txTakeOrders.hash.toLowerCase()}-${i}`;
      const { sender, config, input, output } = takeOrderEvents[i];

      const { order, inputIOIndex, outputIOIndex } = config;
      const inputToken = `${order.validInputs[inputIOIndex.toNumber()].token}`;
      const outputToken = `${
        order.validOutputs[outputIOIndex.toNumber()].token
      }`;

      const query = `{
        takeOrderEntity (id: "${takeOrderEntity_ID}") {
          input
          output
          inputIOIndex
          outputIOIndex
          sender {
            id
          }
          inputToken {
            id
          }
          outputToken {
            id
          }
        }
      }`;

      const response = (await subgraph({ query })) as FetchResult;
      const data = response.data.takeOrderEntity;

      assert.equal(data.output, input.toString());
      assert.equal(data.input, output.toString());
      assert.equal(data.inputIOIndex, inputIOIndex.toString());
      assert.equal(data.outputIOIndex, outputIOIndex.toString());

      assert.equal(data.sender.id, sender.toLowerCase());
      assert.equal(data.inputToken.id, outputToken.toLowerCase());
      assert.equal(data.outputToken.id, inputToken.toLowerCase());
    }
  });
});
