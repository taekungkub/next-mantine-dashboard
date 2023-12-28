import { NextResponse } from "next/server"
import bcrypt from "bcrypt"
import { signJwtAccessToken } from "@/lib/jwt"
import { getUserByEmail } from "@/lib/db/users"

interface RequestBody {
  email: string
  password: string
}

export async function POST(request: Request) {
  try {
    const body: RequestBody = await request.json()

    const user = await getUserByEmail(body.email)

    if (user && (await bcrypt.compare(body.password, user.password))) {
      const { password, ...userWithoutPass } = user

      // const accessToken = signJwtAccessToken(userWithoutPass)
      // const result = {
      //   accessToken,
      // }

      const result = {
        ...userWithoutPass,
      }

      return NextResponse.json(result, { status: 200 })
    } else {
      return NextResponse.json("Email or password incorrect", { status: 400 })
    }
  } catch (error) {
    return NextResponse.json(error, { status: 500 })
  }
}
