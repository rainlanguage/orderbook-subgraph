/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../../common";

export type DeployerDiscoverableMetaV1ConstructionConfigStruct = {
  deployer: PromiseOrValue<string>;
  meta: PromiseOrValue<BytesLike>;
};

export type DeployerDiscoverableMetaV1ConstructionConfigStructOutput = [
  string,
  string
] & { deployer: string; meta: string };

export type EvaluableConfigStruct = {
  deployer: PromiseOrValue<string>;
  sources: PromiseOrValue<BytesLike>[];
  constants: PromiseOrValue<BigNumberish>[];
};

export type EvaluableConfigStructOutput = [string, string[], BigNumber[]] & {
  deployer: string;
  sources: string[];
  constants: BigNumber[];
};

export type AutoApproveConfigStruct = {
  owner: PromiseOrValue<string>;
  evaluableConfig: EvaluableConfigStruct;
};

export type AutoApproveConfigStructOutput = [
  string,
  EvaluableConfigStructOutput
] & { owner: string; evaluableConfig: EvaluableConfigStructOutput };

export type EvidenceStruct = {
  account: PromiseOrValue<string>;
  data: PromiseOrValue<BytesLike>;
};

export type EvidenceStructOutput = [string, string] & {
  account: string;
  data: string;
};

export interface AutoApproveInterface extends utils.Interface {
  functions: {
    "afterAdd(address,(address,bytes)[])": FunctionFragment;
    "afterApprove(address,(address,bytes)[])": FunctionFragment;
    "afterBan(address,(address,bytes)[])": FunctionFragment;
    "afterRemove(address,(address,bytes)[])": FunctionFragment;
    "initialize(bytes)": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "afterAdd"
      | "afterApprove"
      | "afterBan"
      | "afterRemove"
      | "initialize"
      | "owner"
      | "renounceOwnership"
      | "transferOwnership"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "afterAdd",
    values: [PromiseOrValue<string>, EvidenceStruct[]]
  ): string;
  encodeFunctionData(
    functionFragment: "afterApprove",
    values: [PromiseOrValue<string>, EvidenceStruct[]]
  ): string;
  encodeFunctionData(
    functionFragment: "afterBan",
    values: [PromiseOrValue<string>, EvidenceStruct[]]
  ): string;
  encodeFunctionData(
    functionFragment: "afterRemove",
    values: [PromiseOrValue<string>, EvidenceStruct[]]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(functionFragment: "afterAdd", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "afterApprove",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "afterBan", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "afterRemove",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "Context(address,uint256[][])": EventFragment;
    "Initialize(address,tuple)": EventFragment;
    "Initialized(uint8)": EventFragment;
    "MetaV1(address,uint256,bytes)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Context"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Initialize"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MetaV1"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export interface ContextEventObject {
  sender: string;
  context: BigNumber[][];
}
export type ContextEvent = TypedEvent<
  [string, BigNumber[][]],
  ContextEventObject
>;

export type ContextEventFilter = TypedEventFilter<ContextEvent>;

export interface InitializeEventObject {
  sender: string;
  config: AutoApproveConfigStructOutput;
}
export type InitializeEvent = TypedEvent<
  [string, AutoApproveConfigStructOutput],
  InitializeEventObject
>;

export type InitializeEventFilter = TypedEventFilter<InitializeEvent>;

export interface InitializedEventObject {
  version: number;
}
export type InitializedEvent = TypedEvent<[number], InitializedEventObject>;

export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;

export interface MetaV1EventObject {
  sender: string;
  subject: BigNumber;
  meta: string;
}
export type MetaV1Event = TypedEvent<
  [string, BigNumber, string],
  MetaV1EventObject
>;

export type MetaV1EventFilter = TypedEventFilter<MetaV1Event>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface AutoApprove extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: AutoApproveInterface;

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
    afterAdd(
      adder_: PromiseOrValue<string>,
      evidences_: EvidenceStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    afterApprove(
      approver_: PromiseOrValue<string>,
      evidences_: EvidenceStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    afterBan(
      banner_: PromiseOrValue<string>,
      evidences_: EvidenceStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    afterRemove(
      remover_: PromiseOrValue<string>,
      evidences_: EvidenceStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    initialize(
      data_: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  afterAdd(
    adder_: PromiseOrValue<string>,
    evidences_: EvidenceStruct[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  afterApprove(
    approver_: PromiseOrValue<string>,
    evidences_: EvidenceStruct[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  afterBan(
    banner_: PromiseOrValue<string>,
    evidences_: EvidenceStruct[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  afterRemove(
    remover_: PromiseOrValue<string>,
    evidences_: EvidenceStruct[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  initialize(
    data_: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    afterAdd(
      adder_: PromiseOrValue<string>,
      evidences_: EvidenceStruct[],
      overrides?: CallOverrides
    ): Promise<void>;

    afterApprove(
      approver_: PromiseOrValue<string>,
      evidences_: EvidenceStruct[],
      overrides?: CallOverrides
    ): Promise<void>;

    afterBan(
      banner_: PromiseOrValue<string>,
      evidences_: EvidenceStruct[],
      overrides?: CallOverrides
    ): Promise<void>;

    afterRemove(
      remover_: PromiseOrValue<string>,
      evidences_: EvidenceStruct[],
      overrides?: CallOverrides
    ): Promise<void>;

    initialize(
      data_: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "Context(address,uint256[][])"(
      sender?: null,
      context?: null
    ): ContextEventFilter;
    Context(sender?: null, context?: null): ContextEventFilter;

    "Initialize(address,tuple)"(
      sender?: null,
      config?: null
    ): InitializeEventFilter;
    Initialize(sender?: null, config?: null): InitializeEventFilter;

    "Initialized(uint8)"(version?: null): InitializedEventFilter;
    Initialized(version?: null): InitializedEventFilter;

    "MetaV1(address,uint256,bytes)"(
      sender?: null,
      subject?: null,
      meta?: null
    ): MetaV1EventFilter;
    MetaV1(sender?: null, subject?: null, meta?: null): MetaV1EventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
  };

  estimateGas: {
    afterAdd(
      adder_: PromiseOrValue<string>,
      evidences_: EvidenceStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    afterApprove(
      approver_: PromiseOrValue<string>,
      evidences_: EvidenceStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    afterBan(
      banner_: PromiseOrValue<string>,
      evidences_: EvidenceStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    afterRemove(
      remover_: PromiseOrValue<string>,
      evidences_: EvidenceStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    initialize(
      data_: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    afterAdd(
      adder_: PromiseOrValue<string>,
      evidences_: EvidenceStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    afterApprove(
      approver_: PromiseOrValue<string>,
      evidences_: EvidenceStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    afterBan(
      banner_: PromiseOrValue<string>,
      evidences_: EvidenceStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    afterRemove(
      remover_: PromiseOrValue<string>,
      evidences_: EvidenceStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    initialize(
      data_: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}