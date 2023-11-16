"use client"

import { Box, BoxProps, Button, Card, Menu, Pagination, Paper, Tooltip, createTheme } from "@mantine/core"

export const theme = createTheme({
  fontFamily: "Kanit, sans-serif",
  // fontFamilyMonospace: "Monaco, Courier, monospace",
  // headings: { fontFamily: "Greycliff CF, sans-serif" },

  primaryColor: "ocean-blue",

  colors: {
    "ocean-blue": ["#7AD1DD", "#5FCCDB", "#44CADC", "#2AC9DE", "#1AC2D9", "#11B7CD", "#09ADC3", "#0E99AC", "#128797", "#147885"],
    "bright-pink": ["#F0BBDD", "#ED9BCF", "#EC7CC3", "#ED5DB8", "#F13EAF", "#F71FA7", "#FF00A1", "#E00890", "#C50E82", "#AD1374"],
    success: ["#effee7", "#e0f8d4", "#c2efab", "#a2e67e", "#87de57", "#75d940", "#6bd731", "#59be23", "#4da91b", "#3d920c"],
    danger: ["#ffe9f1", "#ffd1e0", "#faa1bd", "#f66e99", "#f2437a", "#f02866", "#f0185c", "#d6094d", "#c00043", "#a90039"],
    warning: ["#fff8e1", "#ffefcc", "#ffdd9b", "#ffca64", "#ffba38", "#ffb01b", "#ffab09", "#e39500", "#ca8500", "#af7100"],
  },
  defaultRadius: "md",
  defaultGradient: {
    from: "ocean-blue",
    to: "bright-pink",
    deg: 45,
  },
  components: {
    Button: Button.extend({
      defaultProps: {
        color: "ocean-blue",
        variant: "filled",
      },
    }),
    Menu: Menu.extend({
      defaultProps: {
        shadow: "md",
        withArrow: true,
      },
    }),
    Card: Card.extend({
      defaultProps: {
        p: "md",
        withBorder: true,
        radius: "md",
      },
    }),
    Paper: Paper.extend({
      defaultProps: {
        p: "md",
        withBorder: true,
        radius: "md",
      },
    }),
    Tooltip: Tooltip.extend({
      defaultProps: {
        withArrow: true,
      },
    }),
    Pagination: Pagination.extend({
      defaultProps: {
        radius: "md",
        withControls: true,
        withEdges: true,
      },
    }),
  },
})
