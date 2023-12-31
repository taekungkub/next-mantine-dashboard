import { useEffect, useState } from "react"
import { Group, Box, Collapse, ThemeIcon, Text, UnstyledButton, rem, Button } from "@mantine/core"
import { IconCalendarStats, IconChevronRight } from "@tabler/icons-react"
import classes from "./NavbarLinksGroup.module.css"
import { usePathname, useRouter } from "next/navigation"
import Link from "next/link"

interface LinksGroupProps {
  icon: React.FC<any>
  label: string
  initiallyOpened?: boolean
  links?: { label: string; link: string }[]
  link?: string
}

export function LinksGroup({ icon: Icon, label, initiallyOpened, links, link }: LinksGroupProps) {
  const hasLinks = Array.isArray(links)
  const [opened, setOpened] = useState(initiallyOpened || false)
  const router = useRouter()
  const pathname = usePathname()

  const items = (hasLinks ? links : []).map((link) => (
    <Text component={Link} className={classes.link} href={link.link} key={link.label} data-active={pathname === link.link || undefined}>
      {link.label}
    </Text>
  ))

  useEffect(() => {
    if (hasLinks) {
      links?.map((v) => {
        if (v.link === pathname) {
          setOpened(true)
        }
      })
    }
  }, [pathname])

  return (
    <>
      <UnstyledButton
        onClick={() => {
          if (hasLinks) {
            setOpened((o) => !o)
          } else {
            router.push(String(link))
          }
        }}
        className={`${classes.control}`}
        data-active={pathname === link || undefined}
      >
        <Group justify="space-between" gap={0}>
          <Box style={{ display: "flex", alignItems: "center" }}>
            <ThemeIcon variant="light" size={30}>
              <Icon style={{ width: rem(18), height: rem(18) }} />
            </ThemeIcon>
            <Box ml="md">{label}</Box>
          </Box>
          {hasLinks && (
            <IconChevronRight
              className={classes.chevron}
              stroke={1.5}
              style={{
                width: rem(16),
                height: rem(16),
                transform: opened ? "rotate(-90deg)" : "none",
              }}
            />
          )}
        </Group>
      </UnstyledButton>
      {hasLinks ? <Collapse in={opened}>{items}</Collapse> : null}
    </>
  )
}

const mockdata = {
  label: "Releases",
  icon: IconCalendarStats,
  links: [
    { label: "Upcoming releases", link: "/" },
    { label: "Previous releases", link: "/" },
    { label: "Releases schedule", link: "/" },
  ],
}

export function NavbarLinksGroup() {
  return (
    <Box mih={220} p="md">
      <LinksGroup {...mockdata} />
    </Box>
  )
}
