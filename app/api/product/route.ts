import { NextResponse } from "next/server"

export async function GET(request: Request) {
  try {
    const res = await fetch("https://dummyjson.com/products")

    if (!res.ok) {
      throw new Error("Failed to fetch data")
    }

    const data = await res.json()
    return NextResponse.json(data, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 })
  }
}
