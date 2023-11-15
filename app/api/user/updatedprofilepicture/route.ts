import { NextResponse } from "next/server"
import { profileImageUpload, removeProfileImageUpload } from "@/lib/imageUpload"
import { getUserById, updateProfilePicture } from "@/lib/db/users"
import { getServerSession } from "next-auth"
import { authOptions } from "../../auth/[...nextauth]/route"

export async function POST(request: Request) {
  try {
    const data = await request.formData()
    const file: File | null = data.get("picture") as unknown as File
    if (!file) {
      return NextResponse.json("No file uploaded", { status: 400 })
    }

    const session = await getServerSession(authOptions)
    const user = await getUserById(Number(session?.user.id))

    const pathPicture = await profileImageUpload(file)
    if (user?.profile_picture) {
      await removeProfileImageUpload(user?.profile_picture)
    }
    await updateProfilePicture(Number(session?.user.id), pathPicture)

    return NextResponse.json(
      {
        id: user?.id,
        picture: pathPicture,
      },
      { status: 200 }
    )
  } catch (error) {
    return NextResponse.json(error, { status: 500 })
  }
}
