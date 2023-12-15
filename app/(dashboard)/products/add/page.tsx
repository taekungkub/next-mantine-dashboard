import React from "react"
import { getCategories } from "@/hooks/useProduct"
import { Box, Title } from "@mantine/core"
import FormAddProduct from "../components/FormAddProduct"
import PageTitle from "@/components/PageTitle"

export default async function Page() {
  const categoryData = await getCategories()

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
