import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"

interface RequestBody {
  name: string
}

export async function PUT(req: Request, context: { params: { email: string } }) {
  try {
    const body: RequestBody = await req.json()
    await prisma.user.update({
      where: {
        email: context.params.email,
      },
      data: {
        name: body.name,
      },
    })
    return NextResponse.json("Update successfully", { status: 200 })
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 })
  }
}

export async function DELETE(req: Request, context: { params: { email: string } }) {
  try {
    const existEmail = !!(await prisma.user.findFirst({
      where: {
        email: context.params.email,
      },
    }))
    if (!existEmail) {
      return NextResponse.json("Not found email", { status: 400 })
    }
    await prisma.user.delete({
      where: {
        email: context.params.email,
      },
    })
    return NextResponse.json("Delete successfully", { status: 200 })
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 })
  }
}
