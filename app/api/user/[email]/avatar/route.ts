import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"
import { writeFile } from 'fs/promises'
import { join } from 'path'



export async function POST(request: Request) {
    try {
        const data = await request.formData()
        const file: File | null = data.get('picture') as unknown as File
        if (!file) {
            return NextResponse.json('No file uploaded', { status: 400 })
        }
        const bytes = await file.arrayBuffer()
        const buffer = Buffer.from(bytes)
        const path = join(process.cwd(), `./public/uploads/avatar/${file.name}`)
        await writeFile(path, buffer)
        return NextResponse.json("Update Avatar Successfully", { status: 400 })
    } catch (error) {
        return NextResponse.json(error, { status: 500 })
    }
}
