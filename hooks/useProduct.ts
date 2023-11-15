import DummyServices from "@/services/DummyServices"

export async function getProducts() {
  try {
    const res = await DummyServices.products()
    return res.json()
  } catch (e) {
    console.log(e)
  }
}

export async function getProduct(slug: string) {
  try {
    const res = await DummyServices.product(slug)
    return res.json()
  } catch (e) {
    console.log(e)
  }
}

export async function getCategories() {
  try {
    const res = await DummyServices.categories()
    return res.json()
  } catch (e) {
    console.log(e)
  }
}
