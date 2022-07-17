export const convertBigIntToNumber = (value: bigint) => {
  if (value > BigInt(Number.MAX_SAFE_INTEGER) || value < BigInt(Number.MIN_SAFE_INTEGER)) {
    throw new Error()
  }
  return Number(value)
}

export const convertNumberToBigInt = (value: number) => {
  return BigInt(value)
}
