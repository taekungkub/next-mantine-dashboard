import { ActionIcon, useMantineColorScheme, useComputedColorScheme } from "@mantine/core"
import { IconSun, IconMoon } from "@tabler/icons-react"

export default function Demo() {
  const { setColorScheme } = useMantineColorScheme()
  const computedColorScheme = useComputedColorScheme("light", { getInitialValueInEffect: true })

  return (
    <ActionIcon onClick={() => setColorScheme(computedColorScheme === "light" ? "dark" : "light")} variant="default" size="lg" aria-label="Toggle color scheme">
      {computedColorScheme === "dark" ? <IconSun size={"1.225rem"} /> : <IconMoon size={"1.225rem"} />}
    </ActionIcon>
  )
}
