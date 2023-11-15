"use client"

import { Button, Card, Menu, createTheme } from "@mantine/core"

export const theme = createTheme({
  /* Put your mantine theme override here */
  primaryColor: "ocean-blue",

  colors: {
    "ocean-blue": ["#7AD1DD", "#5FCCDB", "#44CADC", "#2AC9DE", "#1AC2D9", "#11B7CD", "#09ADC3", "#0E99AC", "#128797", "#147885"],
    "bright-pink": ["#F0BBDD", "#ED9BCF", "#EC7CC3", "#ED5DB8", "#F13EAF", "#F71FA7", "#FF00A1", "#E00890", "#C50E82", "#AD1374"],
  },
  defaultRadius: "md",
  defaultGradient: {
    from: "ocean-blue",
    to: "bright-pink",
    deg: 45,
  },
  components: {
    // Button: Button.extend({
    //   defaultProps: {
    //     color: "cyan",
    //     variant: "outline",
    //   },
    // }),
    Menu: Menu.extend({
      defaultProps: {
        shadow: "md",
        withArrow: true,
      },
    }),
    Card: Card.extend({
      defaultProps: {},
    }),
  },
})
