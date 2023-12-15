"use client"
import { useDisclosure, useMediaQuery } from "@mantine/hooks"
import { AppShell, Box, Burger, Group, LoadingOverlay, ScrollArea, Skeleton, rem, useMantineTheme } from "@mantine/core"
import { NavbarNested } from "@/components/NavbarNested/NavbarNested"
import HeaderMegaMenu from "@/components/HeaderMegaMenu/HeaderMegaMenu"
import { ChildrenProps } from "@/types/type"
import { useSession } from "next-auth/react"
import { useEffect } from "react"
import { usePathname } from "next/navigation"

export default function Demo({ children }: ChildrenProps) {
  const [opened, { toggle }] = useDisclosure()
  const pathname = usePathname()
  const { data: session, status } = useSession()

  useEffect(() => {
    toggle()
  }, [pathname])

  return (
    <>
      <Box pos="relative">
        <LoadingOverlay visible={status === "loading"} zIndex={1000} overlayProps={{ radius: "sm", blur: 2 }} />
        <AppShell header={{ height: 60 }} navbar={{ width: 300, breakpoint: "sm", collapsed: { mobile: !opened } }} padding="md">
          <AppShell.Header>
            <HeaderMegaMenu opened={opened} toggle={toggle} />
          </AppShell.Header>
          <AppShell.Navbar>
            <NavbarNested />
          </AppShell.Navbar>
          <AppShell.Main>{children}</AppShell.Main>
        </AppShell>
      </Box>
    </>
  )
}
