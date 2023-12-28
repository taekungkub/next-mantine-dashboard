import React from "react"
import { Box, Title } from "@mantine/core"
import FormAddProduct from "../components/FormAddProduct"
import PageTitle from "@/components/PageTitle"
import { fetchCategories } from "@/lib/product.services"

export default async function Page() {
  const categoryData = await fetchCategories()

  const initProduct: any = {
    title: "",
    description: "",
    sku: "",
    price: 0,
    stock: 0,
    category: "",
    tags: "",
    vendor: "",
    brand: "",
    images: [],
  }

  return (
    <div>
      <Title order={4}></Title>

      <PageTitle title="Add New Product" subtitle="Section to config basic product information"></PageTitle>

      <Box mt={20}>
        <FormAddProduct inititialForm={initProduct} category={categoryData || []} />
      </Box>
    </div>
  )
}
