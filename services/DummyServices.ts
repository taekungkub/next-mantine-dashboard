import axios from "axios"

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
  customers() {
    return fetch(`${BASE_URL}/users`, {
      method: "GET",
    })
  },
  customerById(id: number) {
    return fetch(`${BASE_URL}/users/${id}`, {
      method: "GET",
    })
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
