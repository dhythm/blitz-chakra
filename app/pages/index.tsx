import { Grid, GridItem } from "@chakra-ui/react"
import Layout from "app/core/layouts/Layout"
import { BlitzPage } from "blitz"

/*
 * This file is just for a pleasant getting started page for your new app.
 * You can delete everything in here and start from scratch if you like.
 */

const Home: BlitzPage = () => {
  return (
    <Grid h={"200px"} templateColumns={"repeat(5, 1fr)"} templateRows={"repeat(2, 1fr)"} gap={4}>
      <GridItem rowSpan={2} colSpan={1} bg={"blue.500"} />
      <GridItem colSpan={1} bg={"blue.500"} />
      <GridItem colSpan={1} bg={"blue.500"} />
      <GridItem colSpan={1} bg={"blue.500"} />
      <GridItem colSpan={1} bg={"blue.500"} />
      <GridItem colSpan={4} bg={"blue.500"} />
    </Grid>
  )
}

Home.suppressFirstRenderFlicker = true
Home.getLayout = (page) => <Layout title="Home">{page}</Layout>

export default Home
