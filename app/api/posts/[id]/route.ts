import { NextResponse } from "next/server"
import prisma from "../../../../lib/prisma"

export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    if (!params.id) {
      return NextResponse.json({ data: undefined, description: "error" }, { status: 401 })
    }

    const res = await prisma.post.findFirst({
      where: {
        id: Number(params.id),
      },
      include: {
        author: true,
      },
    })

    return NextResponse.json({ data: res, description: "success" }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 })
  }
}

export async function DELETE(request: Request, { params }: { params: { id: number } }) {
  try {
    const id = params.id
    const res = await prisma.post.delete({
      where: {
        id: Number(id),
      },
    })

    return NextResponse.json({ data: res, description: "success" }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 })
  }
}

export async function PUT(request: Request, { params }: { params: { id: number } }) {
  try {
    const id = params.id
    const body = await request.json()
    const res = await prisma.post.update({
      where: {
        id: Number(id),
      },
      data: {
        title: body.title,
        content: body.content,
      },
    })

    return NextResponse.json({ data: res, description: "success" }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 })
  }
}
