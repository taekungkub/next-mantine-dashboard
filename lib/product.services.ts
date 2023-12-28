import { DUMMYJSON_BASE_URL } from "./constant/endpoints"
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

export async function fetchProducts(): Promise<{
  products: []
}> {
  try {
    const res = await fetch(`${DUMMYJSON_BASE_URL}/products`)
    return res.json()
  } catch (e) {
    throw e
  }
}

export async function fetchProduct(id: string): Promise<ProductTy> {
  try {
    const res = await fetch(`${DUMMYJSON_BASE_URL}/products/${id}`)
    return res.json()
  } catch (e) {
    console.log(e)
    throw e
  }
}

export async function fetchCategories(): Promise<string[]> {
  try {
    const res = await fetch(`${DUMMYJSON_BASE_URL}/products/categories`)
    return res.json()
  } catch (e) {
    console.log(e)
    throw e
  }
}

export async function fetchCategoryProducts(category: string): Promise<ProductTy[]> {
  try {
    const res = await fetch(`${DUMMYJSON_BASE_URL}/products/categories/${category}`)
    return res.json()
  } catch (e) {
    throw e
  }
}
