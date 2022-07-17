import { convertBigIntToNumber } from "app/utils/common/converter"
import { Ctx } from "blitz"
import db from "db"

const getProducts = async (_ = null, { session }: Ctx) => {
  const products = await db.product.findMany()
  return products.map(({ price, amount, point, ...rest }) => ({
    ...rest,
    price: convertBigIntToNumber(price),
    amount: convertBigIntToNumber(amount),
    point,
  }))
}
export default getProducts
