import { NextResponse } from "next/server"

export async function GET() {
  return NextResponse.json(
    {
      data: "api admin route",
    },
    { status: 200 }
  )
}
