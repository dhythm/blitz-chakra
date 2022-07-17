import { convertNumberToBigInt } from "app/utils/common/converter"
import { Ctx } from "blitz"
import db from "db"
import Decimal from "decimal.js"

const addProduct = async (
  { price, amount, point }: { price: number; amount: number; point: number },
  { session }: Ctx
) => {
  const product = await db.product.create({
    data: {
      price: convertNumberToBigInt(price),
      amount: convertNumberToBigInt(amount),
      point: new Decimal(point),
    },
  })
  return product.id
}
export default addProduct
