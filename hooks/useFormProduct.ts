// import { useQuery } from "@tanstack/react-query"
// import axios from "axios"
// import { useState } from "react"
// import DummyServices from "../services/DummyServices"

// function useFormProduct() {
//   const initProduct = {
//     title: "",
//     description: "",
//     sku: "",
//     price: "",
//     stock: "",
//     category: "",
//     tags: "",
//     vendor: "",
//     brand: "",
//     images: [],
//   }

//   const [formProduct, setFormProduct] = useState(initProduct)

//   const { data: categoryList, isLoading: isLoadingCategory } = useQuery({
//     queryKey: ["category"],
//     queryFn: async () => {
//       const res = await DummyServices.categories()
//       return res.data.map((v: string) => {
//         return {
//           value: v,
//           label: v.charAt(0).toLocaleUpperCase() + v.slice(1),
//         }
//       })
//     },
//   })

//   return {
//     setFormProduct,
//     formProduct,
//     categoryList,
//     isLoadingCategory,
//   }
// }

// export default useFormProduct
