import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"
import bcrypt from "bcrypt"
import { signupSchema } from "@/lib/validation.schema"

export async function GET() {
  try {
    const users = await prisma.user.findMany()
    const data = {
      data: users,
    }
    return NextResponse.json(data, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 })
  }
}

interface RequestBody {
  email: string
  name: string
  password: string
  role: string
}

export async function POST(request: Request) {
  try {
    const body: RequestBody = await request.json()

    const result = signupSchema.safeParse(body)
    if (!result.success) {
      result.error
      return NextResponse.json({ description: result.error.issues[0].message }, { status: 400 })
    }
    const existEmail = !!(await prisma.user.findFirst({
      where: {
        email: body.email,
      },
    }))

    if (existEmail) {
      return NextResponse.json(
        {
          description: "Email is exist",
        },
        { status: 400 }
      )
    }

    await prisma.user.create({
      data: {
        email: body.email,
        name: body.name,
        password: await bcrypt.hash(body.password, 10),
      },
    })

    return NextResponse.json({ description: "Create Successfully" }, { status: 400 })
  } catch (error) {
    return NextResponse.json(error, { status: 500 })
  }
}
