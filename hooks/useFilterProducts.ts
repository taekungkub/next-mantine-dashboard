import { useEffect, useMemo, useState } from "react"
import { ProductTy } from "@/types/type"

interface SortTy {
  brand?: string
  price?: string
}

interface Props {
  data: Array<ProductTy>
}

export default function useFilterProduct(props: Props) {
  const [sortProduct, setSortProduct] = useState({ brand: "", price: "" } as SortTy)
  const [searchQuery, setSearchQuery] = useState("")

  const [optionsPrice, setOptionsPrice] = useState([
    {
      label: "Lowest price",
      value: "lowest_price",
    },
    {
      label: "Higest price",
      value: "highest_price",
    },
  ])

  const productFilter = useMemo(() => {
    return props.data
      ?.filter((product: ProductTy) => {
        let searchBySetTitle = product.title.toLowerCase().match(searchQuery ? searchQuery.toLowerCase() : "")

        if (searchBySetTitle) {
          return searchBySetTitle
        }

        let searchByBrand = product.brand.toLowerCase().match(searchQuery ? searchQuery.toLowerCase() : "")
        if (searchByBrand) {
          return searchByBrand
        }
      })
      .filter(() => {
        if (sortProduct.price === "lowest_price") {
          return props.data.sort((a, b) => a.price - b.price)
        }
        if (sortProduct.price === "highest_price") {
          return props.data.sort((a, b) => b.price - a.price)
        }

        return props.data
      })
  }, [searchQuery, props.data, sortProduct.price])

  return {
    productFilter,
    setSortProduct,
    sortProduct,
    searchQuery,
    setSearchQuery,
    optionsPrice,
    setOptionsPrice,
  }
}
