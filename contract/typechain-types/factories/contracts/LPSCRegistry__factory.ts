/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  LPSCRegistry,
  LPSCRegistryInterface,
} from "../../contracts/LPSCRegistry";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5060006724f9b897ef58a922905061005773dc2cc710e42857672e7907cf474a69b63b93089f8273779877a7b0d9e8603169ddbd7836e478b46247896102fa60201b60201c565b61009073abfe9d11a2f1d61990d1d253ec98b5da00304f168273fd57b4ddbf88a4e07ff4e34c487b99af2fe82a056102fa60201b60201c565b6100c973835833d556299cdec623e7980e7369145b0375918273466d489b6d36e7e3b824ef491c225f5830e81cc16102fa60201b60201c565b600067ccf0a31a221f3c9b905061010f730b9d5d9136855f6fec3c0993fee6e9ce8a2978468273779877a7b0d9e8603169ddbd7836e478b46247896102fa60201b60201c565b61014873d21341536c5cf5eb1bcb58f6723ce26e8d8e90e48273fd57b4ddbf88a4e07ff4e34c487b99af2fe82a056102fa60201b60201c565b6101817370f5c5c40b873ea597776da2c21929a8282a3b358273466d489b6d36e7e3b824ef491c225f5830e81cc16102fa60201b60201c565b60006754abf9fb1afeaf9590506101c773d14838a68e8afbade5efb411d5871ea0011afd288273779877a7b0d9e8603169ddbd7836e478b46247896102fa60201b60201c565b610200730579b4c1c8acbff13c6253f1b10d66896bf399ef8273fd57b4ddbf88a4e07ff4e34c487b99af2fe82a056102fa60201b60201c565b610239730e14dbe2c8e1121902208be173a3fb91bb125cdb8273466d489b6d36e7e3b824ef491c225f5830e81cc16102fa60201b60201c565b600067adecc60412ce25a5905061027f73326c977e6efc84e512bb9c30f76e30c160ed06fb8273779877a7b0d9e8603169ddbd7836e478b46247896102fa60201b60201c565b6102b873f1e3a5842eeef51f2967b3f05d45dd4f4205ff408273fd57b4ddbf88a4e07ff4e34c487b99af2fe82a056102fa60201b60201c565b6102f173c1c76a8c5bfde1be034bbcd930c668726e7c19878273466d489b6d36e7e3b824ef491c225f5830e81cc16102fa60201b60201c565b50505050610468565b80600080858560405160200161031192919061043c565b60405160208183030381529060405280519060200120815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006103a382610378565b9050919050565b60008160601b9050919050565b60006103c2826103aa565b9050919050565b60006103d4826103b7565b9050919050565b6103ec6103e782610398565b6103c9565b82525050565b600067ffffffffffffffff82169050919050565b60008160c01b9050919050565b600061041e82610406565b9050919050565b610436610431826103f2565b610413565b82525050565b600061044882856103db565b6014820191506104588284610425565b6008820191508190509392505050565b603f806104766000396000f3fe6080604052600080fdfea2646970667358221220b05d6d0f057627f655c47ef2144acc1fce7214f689cb32bf1ad26eccfe35bd3364736f6c63430008130033";

type LPSCRegistryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: LPSCRegistryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class LPSCRegistry__factory extends ContractFactory {
  constructor(...args: LPSCRegistryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<LPSCRegistry> {
    return super.deploy(overrides || {}) as Promise<LPSCRegistry>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): LPSCRegistry {
    return super.attach(address) as LPSCRegistry;
  }
  override connect(signer: Signer): LPSCRegistry__factory {
    return super.connect(signer) as LPSCRegistry__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LPSCRegistryInterface {
    return new utils.Interface(_abi) as LPSCRegistryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LPSCRegistry {
    return new Contract(address, _abi, signerOrProvider) as LPSCRegistry;
  }
}
