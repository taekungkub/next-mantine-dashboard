"use client"

import { ChildrenProps } from "@/types/type"
import { useSession } from "next-auth/react"
import { redirect } from "next/navigation"
import { useEffect } from "react"

export default function AuthLayout({ children }: ChildrenProps) {
  const { status, data: session } = useSession()

  useEffect(() => {
    if (session) {
      redirect("/")
    }
  }, [session])

  if (status === "loading") {
    return <div></div>
  }

  return <div>{children}</div>
}
