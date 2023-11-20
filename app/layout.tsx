import "@mantine/core/styles.css"
import "@/styles/globals.css"

import React from "react"
import { ColorSchemeScript } from "@mantine/core"
import { Providers } from "../context/providers"

export const metadata = {
  title: "My Next.js dashboard",
  description: "I am using Mantine with Next.js!",
}

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no" />
      </head>
      <body suppressHydrationWarning={true}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
