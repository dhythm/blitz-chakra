import { Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react"
import { BlitzPage, useQuery } from "blitz"
import getProducts from "../queries/getProducts"

const ProductsPage: BlitzPage = () => {
  const [products] = useQuery(getProducts, null)

  return (
    <TableContainer>
      <Table variant="simple">
        <TableCaption>Imperial to metric conversion factors</TableCaption>
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th isNumeric>price</Th>
            <Th isNumeric>amount</Th>
          </Tr>
        </Thead>
        <Tbody>
          {products.map((product, idx) => (
            <Tr key={idx}>
              <Td>{product.id}</Td>
              <Td isNumeric>{product.price}</Td>
              <Td isNumeric>{product.amount}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  )
}
