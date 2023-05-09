import { ethers } from "hardhat";

export const fourZeros = "0000";
export const sixZeros = "000000";
export const nineZeros = "000000000";
export const tenZeros = "0000000000";
export const thirteenZeros = "0000000000000";
export const sixteenZeros = "0000000000000000";
export const eighteenZeros = "000000000000000000";
export const twentyZeros = "00000000000000000000";

export const ONE = ethers.BigNumber.from("1" + eighteenZeros);
export const RESERVE_ONE = ethers.BigNumber.from("1" + sixZeros);

export const max_uint256 = ethers.BigNumber.from(
  "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
);
export const max_uint32 = ethers.BigNumber.from("0xffffffff");
export const max_uint16 = ethers.BigNumber.from("0xffff");
export const max_uint8 = ethers.BigNumber.from("0xff");

/**
 * @public
 * Constructs a string of `"0"` characters of the specified length
 *
 * @param length number of `"0"` characters
 * @returns string of zeros
 */
export const getZeros = (length: number) => {
  return "0".repeat(length);
};
