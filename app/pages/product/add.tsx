import Layout from "app/core/layouts/Layout"
import { AddProductForm } from "app/product/components/AddProductForm"
import addProduct from "app/product/mutations/addProduct"
import { BlitzPage, Router, Routes, useMutation } from "blitz"

const AddProductPage: BlitzPage = () => {
  const [addProductMutation] = useMutation(addProduct)
  return (
    <AddProductForm
      onSubmit={(values) => {
        addProductMutation({ ...values })
        Router.replace(Routes.ProductsPage())
      }}
    />
  )
}

AddProductPage.getLayout = (page) => <Layout title="Products">{page}</Layout>
export default AddProductPage
