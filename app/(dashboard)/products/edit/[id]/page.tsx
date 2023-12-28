import React from "react"
import { Box, Text, Title } from "@mantine/core"
import FormAddProduct from "../../components/FormAddProduct"
import PageTitle from "@/components/PageTitle"
import { fetchCategories, fetchProduct } from "@/lib/product.services"

type Props = {
  params: {
    id: string
  }
}

export default async function Page({ params }: Props) {
  const id = params.id

  const data = await fetchProduct(id)
  const categorydata = await fetchCategories()

  return (
    <div>
      <Title order={4}></Title>

      <PageTitle title="Edit Product" subtitle="Section to config basic product information"></PageTitle>

      <Box mt={20}>
        <FormAddProduct inititialForm={data || []} category={categorydata || []} />
      </Box>
    </div>
  )
}
