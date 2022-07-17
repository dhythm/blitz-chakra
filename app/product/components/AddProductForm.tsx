import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react"
import Form from "app/core/components/Form"
import { FC } from "react"
import { Field } from "react-final-form"

type Props = {
  onSubmit: (value: { price: number; amount: number; point: number }) => void
}

export const AddProductForm: FC<Props> = ({ onSubmit }) => {
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Box rounded={"lg"} bg={useColorModeValue("white", "gray.700")} boxShadow={"lg"} p={8}>
          <Form onSubmit={onSubmit}>
            <Stack spacing={4}>
              <FormControl id="price">
                <FormLabel>Price</FormLabel>
                <Field name="price">
                  {({ input: { value, onChange } }) => (
                    <Input type="number" value={value} onChange={onChange} />
                  )}
                </Field>
              </FormControl>
              <FormControl id="amount">
                <FormLabel>Amount</FormLabel>
                <Field name="amount">
                  {({ input: { value, onChange } }) => (
                    <Input type="number" value={value} onChange={onChange} />
                  )}
                </Field>
              </FormControl>
              <FormControl id="point">
                <FormLabel>Point</FormLabel>
                <Field name="point">
                  {({ input: { value, onChange } }) => (
                    <Input type="number" value={value} onChange={onChange} />
                  )}
                </Field>
              </FormControl>
              <Stack spacing={10}>
                <Button
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                  type="submit"
                >
                  Add
                </Button>
              </Stack>
            </Stack>
          </Form>
        </Box>
      </Stack>
    </Flex>
  )
}
