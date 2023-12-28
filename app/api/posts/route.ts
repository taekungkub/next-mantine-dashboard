import prisma from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function GET(request: Request) {
  try {
    const posts = await prisma.post.findMany()
    return NextResponse.json({ data: posts, description: "success" }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ data: error, description: "error" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const res = await prisma.post.create({
      data: {
        title: body.title,
        content: body.content,
        authorId: body.userId,
      },
    })
    return NextResponse.json({ data: body, description: "success" }, { status: 200 })
  } catch (error) {
    console.log(error)
    return NextResponse.json({ data: error, description: "error" }, { status: 500 })
  }
}

export async function PUT(request: Request) {}
