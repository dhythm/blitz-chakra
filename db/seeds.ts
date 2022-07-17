import { SecurePassword } from "blitz"
import db from "./index"

/*
 * This seed function is executed when you run `blitz db seed`.
 *
 * Probably you want to use a library like https://chancejs.com
 * or https://github.com/Marak/Faker.js to easily generate
 * realistic data.
 */
const seed = async () => {
  const hashedPassword = await SecurePassword.hash("twixrox".trim())
  await db.user.upsert({
    where: {
      email: "kody@test.com",
    },
    create: {
      name: "kody",
      email: "kody@test.com",
      hashedPassword,
    },
    update: {},
  })
  await db.product.upsert({
    where: {
      id: 1,
    },
    create: {
      id: 1,
      price: 100_000,
      amount: 10,
      point: 1.5,
    },
    update: {},
  })
}

export default seed
