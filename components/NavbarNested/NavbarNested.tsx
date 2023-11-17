"use client"
import { Group, Code, ScrollArea, rem, Box } from "@mantine/core"
import { LinksGroup } from "../NavbarLinksGroup/NavbarLinksGroup"
import { Logo } from "./Logo"
import classes from "./NavbarNested.module.css"
import { navbarData } from "@/constant/Navbar.data"

export function NavbarNested() {
  const links = navbarData.map((item) => <LinksGroup {...item} key={item.label} />)

  return (
    <nav className={classes.navbar}>
      <Group className={classes.header} justify="space-between" hiddenFrom="sm">
        <Logo style={{ width: rem(120) }} />
        <Code fw={700}>v3.1.2</Code>
      </Group>

      <ScrollArea h={`calc(100vh - ${rem(100)})`} className={classes.links}>
        <div className={classes.linksInner}>{links}</div>
      </ScrollArea>
      {/* <div className={classes.footer}>
        <UserButton />
        </div> */}
    </nav>
  )
}
