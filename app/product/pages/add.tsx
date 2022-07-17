import Layout from "app/core/layouts/Layout"
import { BlitzPage } from "blitz"

const AddProductPage: BlitzPage = () => {
  return <></>
}

AddProductPage.getLayout = (page) => <Layout title="Products">{page}</Layout>
export default AddProductPage
