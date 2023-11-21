import axios from "axios"
import { CustomerTy } from "../types/type"

const BASE_URL = "https://dummyjson.com"

export default {
  products() {
    return fetch(`${BASE_URL}/products`, {
      method: "GET",
    })
  },
  product(id: string) {
    return fetch(`${BASE_URL}/products/${id}`, {
      method: "GET",
    })
  },
  async customers(): Promise<{
    users: CustomerTy[]
  }> {
    const response = await fetch(`${BASE_URL}/users`)
    const customers = await response.json()
    return customers
  },
  async customers2() {
    return axios.get<{
      users: CustomerTy[]
    }>(`${BASE_URL}/users`)
  },
  async customerById(id: string): Promise<CustomerTy> {
    const response = await fetch(`${BASE_URL}/users/${id}`)
    const customers = await response.json()
    return customers
  },
  async customerById2(id: string) {
    return axios.get<CustomerTy>(`${BASE_URL}/users/${id}`)
  },

  categories() {
    return fetch(`${BASE_URL}/products/categories`, {
      method: "GET",
    })
  },
  categoryProducts(category: string) {
    return fetch(`${BASE_URL}/products/categories/${category}`, {
      method: "GET",
    })
  },
  // login() {
  //   return Api.post("auth/login", {
  //     username: "kminchelle",
  //     password: "0lelplR",
  //     expiresInMins: 120, // optional
  //   })
  // },
  // searchProduct(search: string) {
  //   return Api.get(`/products/search?q=${search}`)
  // },
  // todos() {
  //   return Api.get(`/todos`)
  // },
  // comments() {
  //   return Api.get("/comments")
  // },
}
