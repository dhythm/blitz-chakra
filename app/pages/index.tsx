import { Grid, GridItem } from "@chakra-ui/react"
import { LoginForm } from "app/core/components"
import Layout from "app/core/layouts/Layout"
import { BlitzPage, Link, Routes, useSession } from "blitz"
import { Suspense } from "react"

/*
 * This file is just for a pleasant getting started page for your new app.
 * You can delete everything in here and start from scratch if you like.
 */

const LoginOrTop = () => {
  const session = useSession()
  console.log({ session })
  if (!session.userId) return <LoginForm />
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
