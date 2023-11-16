import { DefaultMantineColor, MantineColorsTuple } from "@mantine/core"

type ExtendedCustomColors = DefaultMantineColor | "success" | "danger" | "warning"

declare module "@mantine/core" {
  export interface MantineThemeColorsOverride {
    colors: Record<ExtendedCustomColors, MantineColorsTuple>
  }
}
