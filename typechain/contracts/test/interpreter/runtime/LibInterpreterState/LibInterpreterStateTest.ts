/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../../../../common";

export type InterpreterStateStruct = {
  stackBottom: PromiseOrValue<BigNumberish>;
  constantsBottom: PromiseOrValue<BigNumberish>;
  stateKV: PromiseOrValue<BigNumberish>;
  namespace: PromiseOrValue<BigNumberish>;
  store: PromiseOrValue<string>;
  context: PromiseOrValue<BigNumberish>[][];
  compiledSources: PromiseOrValue<BytesLike>[];
};

export type InterpreterStateStructOutput = [
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber,
  string,
  BigNumber[][],
  string[]
] & {
  stackBottom: BigNumber;
  constantsBottom: BigNumber;
  stateKV: BigNumber;
  namespace: BigNumber;
  store: string;
  context: BigNumber[][];
  compiledSources: string[];
};

export interface LibInterpreterStateTestInterface extends utils.Interface {
  functions: {
    "serDeserialize(bytes[],uint256[],uint256,uint256[][],address)": FunctionFragment;
    "serialize(address,bytes[],uint256[],uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "serDeserialize" | "serialize"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "serDeserialize",
    values: [
      PromiseOrValue<BytesLike>[],
      PromiseOrValue<BigNumberish>[],
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>[][],
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "serialize",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>[],
      PromiseOrValue<BigNumberish>[],
      PromiseOrValue<BigNumberish>
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "serDeserialize",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "serialize", data: BytesLike): Result;

  events: {};
}

export interface LibInterpreterStateTest extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: LibInterpreterStateTestInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    serDeserialize(
      sources_: PromiseOrValue<BytesLike>[],
      constants_: PromiseOrValue<BigNumberish>[],
      stackLength_: PromiseOrValue<BigNumberish>,
      context_: PromiseOrValue<BigNumberish>[][],
      interpreter_: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [InterpreterStateStructOutput] & { state_: InterpreterStateStructOutput }
    >;

    serialize(
      interpreter_: PromiseOrValue<string>,
      sources_: PromiseOrValue<BytesLike>[],
      constants_: PromiseOrValue<BigNumberish>[],
      stackLength_: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;
  };

  serDeserialize(
    sources_: PromiseOrValue<BytesLike>[],
    constants_: PromiseOrValue<BigNumberish>[],
    stackLength_: PromiseOrValue<BigNumberish>,
    context_: PromiseOrValue<BigNumberish>[][],
    interpreter_: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<InterpreterStateStructOutput>;

  serialize(
    interpreter_: PromiseOrValue<string>,
    sources_: PromiseOrValue<BytesLike>[],
    constants_: PromiseOrValue<BigNumberish>[],
    stackLength_: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  callStatic: {
    serDeserialize(
      sources_: PromiseOrValue<BytesLike>[],
      constants_: PromiseOrValue<BigNumberish>[],
      stackLength_: PromiseOrValue<BigNumberish>,
      context_: PromiseOrValue<BigNumberish>[][],
      interpreter_: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<InterpreterStateStructOutput>;

    serialize(
      interpreter_: PromiseOrValue<string>,
      sources_: PromiseOrValue<BytesLike>[],
      constants_: PromiseOrValue<BigNumberish>[],
      stackLength_: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {};

  estimateGas: {
    serDeserialize(
      sources_: PromiseOrValue<BytesLike>[],
      constants_: PromiseOrValue<BigNumberish>[],
      stackLength_: PromiseOrValue<BigNumberish>,
      context_: PromiseOrValue<BigNumberish>[][],
      interpreter_: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    serialize(
      interpreter_: PromiseOrValue<string>,
      sources_: PromiseOrValue<BytesLike>[],
      constants_: PromiseOrValue<BigNumberish>[],
      stackLength_: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    serDeserialize(
      sources_: PromiseOrValue<BytesLike>[],
      constants_: PromiseOrValue<BigNumberish>[],
      stackLength_: PromiseOrValue<BigNumberish>,
      context_: PromiseOrValue<BigNumberish>[][],
      interpreter_: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    serialize(
      interpreter_: PromiseOrValue<string>,
      sources_: PromiseOrValue<BytesLike>[],
      constants_: PromiseOrValue<BigNumberish>[],
      stackLength_: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}