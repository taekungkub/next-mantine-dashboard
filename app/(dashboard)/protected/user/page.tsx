"use client"

import { useSession } from "next-auth/react"
import { redirect } from "next/navigation"

function UserPage() {
  const { status, data: session } = useSession({
    required: true,
    onUnauthenticated() {
      // The user is not authenticated, handle it here.
      redirect("/exception/403")
    },
  })

  if (status === "loading") {
    return "Loading or not authenticated..."
  }

  if (status === "authenticated") {
    return <p>Signed in as {JSON.stringify(session)}</p>
  }

  return "User is logged in"
}

export default UserPage
