import { ActionIcon, useMantineColorScheme, useComputedColorScheme } from "@mantine/core"
import { IconSun, IconMoon } from "@tabler/icons-react"
import { useEffect, useState } from "react"

export default function Demo() {
  const { setColorScheme } = useMantineColorScheme()
  const computedColorScheme = useComputedColorScheme("light", { getInitialValueInEffect: true })
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [setLoaded])

  return (
    <ActionIcon onClick={() => setColorScheme(computedColorScheme === "light" ? "dark" : "light")} variant="default" size="lg" aria-label="Toggle color scheme">
      {loaded ? computedColorScheme === "light" ? <IconMoon size={"1.225rem"} /> : <IconSun size={"1.225rem"} /> : <span className="animate-pulse">...</span>}
    </ActionIcon>
  )
}
