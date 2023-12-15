import DummyServices from "@/services/DummyServices"
import { DUMMYJSON_BASE_URL } from "../constant/endpoints"
import { ProductTy } from "../types/type"

export async function searchProduct(): Promise<{
  product: ProductTy[]
}> {
  try {
    const res = await fetch(`${DUMMYJSON_BASE_URL}/products/search?q=phone`)
    return res.json()
  } catch (e) {
    throw e
  }
}

export async function getProducts(): Promise<{
  products: []
}> {
  try {
    const res = await fetch(`${DUMMYJSON_BASE_URL}/products`)
    return res.json()
  } catch (e) {
    throw e
  }
}

export async function getProduct(id: string): Promise<ProductTy> {
  try {
    const res = await fetch(`${DUMMYJSON_BASE_URL}/products/${id}`)
    return res.json()
  } catch (e) {
    console.log(e)
    throw e
  }
}

export async function getCategories(): Promise<string[]> {
  try {
    const res = await fetch(`${DUMMYJSON_BASE_URL}/products/categories`)
    return res.json()
  } catch (e) {
    console.log(e)
    throw e
  }
}

export async function getCategoryProducts(category: string): Promise<ProductTy[]> {
  try {
    const res = await fetch(`${DUMMYJSON_BASE_URL}/products/categories/${category}`)
    return res.json()
  } catch (e) {
    throw e
  }
}
