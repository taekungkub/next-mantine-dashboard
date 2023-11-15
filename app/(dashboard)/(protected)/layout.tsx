"use client"

import { ChildrenProps } from "@/types/type"
import { useSession } from "next-auth/react"
import { redirect } from "next/navigation"

export default function ProtectedLayout({ children }: ChildrenProps) {
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/auth/signin")
    },
  })

  if (status === "loading") {
    return <div></div>
  }

  return <>{children}</>
}
