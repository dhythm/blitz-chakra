import { Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react"
import Layout from "app/core/layouts/Layout"
import { BlitzPage, Link, Routes, useQuery } from "blitz"
import getProducts from "../queries/getProducts"

const ProductsPage: BlitzPage = () => {
  const [products] = useQuery(getProducts, null)

  return (
    <>
      <TableContainer>
        <Table variant="simple">
          <TableCaption>Imperial to metric conversion factors</TableCaption>
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th isNumeric>Price</Th>
              <Th isNumeric>Amount</Th>
              <Th isNumeric>Point</Th>
            </Tr>
          </Thead>
          <Tbody>
            {products.map((product, idx) => (
              <Tr key={idx}>
                <Td>{product.id}</Td>
                <Td isNumeric>{product.price}</Td>
                <Td isNumeric>{product.amount}</Td>
                <Td isNumeric>{product.point.toString()}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      <Link href={Routes.AddProductPage()}>
        <a className="button small">
          <strong>Add a new product</strong>
        </a>
      </Link>
    </>
  )
}

ProductsPage.getLayout = (page) => <Layout title="Products">{page}</Layout>
export default ProductsPage
