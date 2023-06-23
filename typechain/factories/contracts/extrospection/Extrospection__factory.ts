/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  Extrospection,
  ExtrospectionInterface,
} from "../../../contracts/extrospection/Extrospection";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "bytecodeHash",
        type: "bytes32",
      },
    ],
    name: "BytecodeHash",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "supportsInterface",
        type: "bool",
      },
    ],
    name: "SupportsInterface",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account_",
        type: "address",
      },
    ],
    name: "bytecode",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account_",
        type: "address",
      },
    ],
    name: "bytecodeHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account_",
        type: "address",
      },
    ],
    name: "emitBytecodeHash",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account_",
        type: "address",
      },
      {
        internalType: "bytes4",
        name: "interfaceId_",
        type: "bytes4",
      },
    ],
    name: "emitSupportsInterface",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5061047e806100206000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806308599d571461005157806339676bce14610066578063c7338a021461008b578063fbce6458146100ab575b600080fd5b61006461005f366004610365565b6100be565b005b6100786100743660046103c1565b3f90565b6040519081526020015b60405180910390f35b61009e6100993660046103c1565b610152565b60405161008291906103dc565b6100646100b93660046103c1565b61018d565b7f7f2401d8074781341928201991f60814c6b22ed37871822f9a0658f96a9a24223383836100ec86866101e5565b6040805173ffffffffffffffffffffffffffffffffffffffff95861681529390941660208401527fffffffff0000000000000000000000000000000000000000000000000000000091909116828401521515606082015290519081900360800190a15050565b60608173ffffffffffffffffffffffffffffffffffffffff16803b806020016040519081016040528181526000908060200190933c92915050565b6040805133815273ffffffffffffffffffffffffffffffffffffffff83166020820152823f8183015290517fc0928f45cbe396f69532a1422df6221424fe2b30302256f7889c343e71a763c49181900360600190a150565b60006101f083610208565b80156102015750610201838361026d565b9392505050565b6000610234827f01ffc9a70000000000000000000000000000000000000000000000000000000061026d565b80156102675750610265827fffffffff0000000000000000000000000000000000000000000000000000000061026d565b155b92915050565b604080517fffffffff000000000000000000000000000000000000000000000000000000008316602480830191909152825180830390910181526044909101909152602080820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f01ffc9a700000000000000000000000000000000000000000000000000000000178152825160009392849283928392918391908a617530fa92503d91506000519050828015610325575060208210155b80156103315750600081115b979650505050505050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461036057600080fd5b919050565b6000806040838503121561037857600080fd5b6103818361033c565b915060208301357fffffffff00000000000000000000000000000000000000000000000000000000811681146103b657600080fd5b809150509250929050565b6000602082840312156103d357600080fd5b6102018261033c565b600060208083528351808285015260005b81811015610409578581018301518582016040015282016103ed565b5060006040828601015260407fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f830116850101925050509291505056fea26469706673582212208d7838961c339bda20cecbe0ca9b825df0fe57691875aca80916473f3404696364736f6c63430008130033";

type ExtrospectionConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ExtrospectionConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Extrospection__factory extends ContractFactory {
  constructor(...args: ExtrospectionConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Extrospection> {
    return super.deploy(overrides || {}) as Promise<Extrospection>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Extrospection {
    return super.attach(address) as Extrospection;
  }
  override connect(signer: Signer): Extrospection__factory {
    return super.connect(signer) as Extrospection__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ExtrospectionInterface {
    return new utils.Interface(_abi) as ExtrospectionInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Extrospection {
    return new Contract(address, _abi, signerOrProvider) as Extrospection;
  }
}