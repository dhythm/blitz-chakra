import { Button, Grid, GridItem } from "@chakra-ui/react"
import { PDFViewer } from "@react-pdf/renderer"
import login from "app/auth/mutations/login"
import { LoginForm, SampleDocument } from "app/core/components"
import Layout from "app/core/layouts/Layout"
import createPdf from "app/pdfs/mutations/createPdf"
import {
  AuthenticationError,
  BlitzPage,
  Link,
  Routes,
  useMutation,
  useRouter,
  useSession,
} from "blitz"
import { FORM_ERROR } from "final-form"
import { Suspense } from "react"
// import "./index.css"

/*
 * This file is just for a pleasant getting started page for your new app.
 * You can delete everything in here and start from scratch if you like.
 */

const LoginOrTop = () => {
  const router = useRouter()
  const session = useSession()
  const [loginMutation] = useMutation(login)
  const [createPdfMutation] = useMutation(createPdf)

  if (!session.userId)
    return (
      <>
        <LoginForm
          onSubmit={async (values) => {
            try {
              const user = await loginMutation(values)
              const next = router.query.next ? decodeURIComponent(router.query.next as string) : "/"
              router.push(next)
            } catch (error: any) {
              if (error instanceof AuthenticationError) {
                return { [FORM_ERROR]: "Sorry, those credentials are invalid" }
              } else {
                return {
                  [FORM_ERROR]:
                    "Sorry, we had an unexpected error. Please try again. - " + error.toString(),
                }
              }
            }
          }}
        />
        <Button
          bg={"blue.400"}
          color={"white"}
          _hover={{
            bg: "blue.500",
          }}
          onClick={async () => {
            const res = await createPdfMutation({})
            console.log({ res })
          }}
        >
          create PDF
        </Button>
        <PDFViewer height={891} width={630}>
          <SampleDocument />
        </PDFViewer>
      </>
    )
  return (
    <>
      <Grid h={"200px"} templateColumns={"repeat(5, 1fr)"} templateRows={"repeat(2, 1fr)"} gap={4}>
        <GridItem rowSpan={2} colSpan={1} bg={"blue.500"} />
        <GridItem colSpan={1} bg={"blue.500"} />
        <GridItem colSpan={1} bg={"blue.500"} />
        <GridItem colSpan={1} bg={"blue.500"} />
        <GridItem colSpan={1} bg={"blue.500"} />
        <GridItem colSpan={4} bg={"blue.500"} />
      </Grid>
      <Link href={Routes.ProductsPage()}>
        <a className="button small">
          <strong>Products</strong>
        </a>
      </Link>
    </>
  )
}

const Home: BlitzPage = () => {
  return (
    <Suspense fallback="Loading...">
      <LoginOrTop />
    </Suspense>
  )
}

Home.suppressFirstRenderFlicker = true
Home.getLayout = (page) => <Layout title="Home">{page}</Layout>

export default Home
