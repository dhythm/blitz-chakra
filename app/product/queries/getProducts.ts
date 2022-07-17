import { convertBigIntToNumber } from "app/utils/common/converter"
import { Ctx } from "blitz"
import db from "db"

export default async function getProducts(_ = null, { session }: Ctx) {
  const products = await db.product.findMany()

  return products.map(({ price, amount, point, ...rest }) => ({
    ...rest,
    price: convertBigIntToNumber(price),
    amount: convertBigIntToNumber(amount),
    point,
  }))
}
