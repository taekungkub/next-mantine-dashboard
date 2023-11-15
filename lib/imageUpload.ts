import { join } from "path"
import { unlink, writeFile } from "fs/promises"

const publicFolderPath = join(process.cwd(), "public", "uploads", "avatar")

export async function profileImageUpload(file: File) {
  const bytes = await file.arrayBuffer()
  const buffer = Buffer.from(bytes)
  const ext = file.name.split(".").pop()
  const newFileName = `${new Date().getTime()}_file.${ext}`
  const newPath = join(publicFolderPath, newFileName)
  await writeFile(newPath, buffer)
  return newFileName
}

export async function removeProfileImageUpload(fileName: string) {
  const path = join(publicFolderPath, fileName)
  return await unlink(path)
}
