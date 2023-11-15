import { NextResponse } from "next/server"
import bcrypt from "bcrypt"
import { getUserByEmail, getUserById, getUsers, createUser } from "@/lib/db/users"

interface RequestBody {
  email: string
  name: string
  password: string
  confirm_password: string
}

export async function POST(request: Request) {
  try {
    const body: RequestBody = await request.json()

    const existEmail = !!(await getUserByEmail(body.email))

    if (existEmail) {
      return NextResponse.json("Email is exist", { status: 400 })
    }

    const user = await createUser({
      email: body.email,
      name: body.name,
      password: await bcrypt.hash(body.password, 10),
      role: "user",
    })

    return NextResponse.json(body, { status: 200 })
  } catch (error) {
    console.log(error)
    return NextResponse.json(error, { status: 500 })
  }
}
