import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react"
import { FC } from "react"
import { Field } from "react-final-form"
import Form from "../Form"

type Props = {
  onSubmit: (value: { email: string; password: string }) => void
}

export const LoginForm: FC<Props> = ({ onSubmit }) => {
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Sign in to your account</Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to enjoy all of our cool <Link color={"blue.400"}>features</Link> ✌️
          </Text>
        </Stack>
        <Box rounded={"lg"} bg={useColorModeValue("white", "gray.700")} boxShadow={"lg"} p={8}>
          <Form onSubmit={onSubmit}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Field name="email">
                  {({ input: { value, onChange } }) => (
                    <Input type="email" value={value} onChange={onChange} />
                  )}
                </Field>
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Field name="password">
                  {({ input: { value, onChange } }) => (
                    <Input type="password" value={value} onChange={onChange} />
                  )}
                </Field>
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                >
                  <Checkbox>Remember me</Checkbox>
                  <Link color={"blue.400"}>Forgot password?</Link>
                </Stack>
                <Button
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                  type="submit"
                >
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </Form>
        </Box>
      </Stack>
    </Flex>
  )
}
