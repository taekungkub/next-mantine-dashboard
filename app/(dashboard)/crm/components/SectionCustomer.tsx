"use client"
import { SimpleGrid, ThemeIcon } from "@mantine/core"
import { IconUserCheck, IconUserPlus, IconUsers } from "@tabler/icons-react"
import { motion } from "framer-motion"
import CardStatsCustomer from "@/components/Cards/CardStatsCustomer/CardStatsCustomer"

export function SectionUserStats() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <SimpleGrid cols={{ base: 1, sm: 3 }} mt={"lg"}>
        <CardStatsCustomer title="Total Customers" value={2400} percent={17.9} type="UP">
          <ThemeIcon size={"xl"}>
            <IconUsers />
          </ThemeIcon>
        </CardStatsCustomer>
        <CardStatsCustomer title="Active Customers" value={1897} percent={32.7} type="UP">
          <ThemeIcon size={"xl"} color="violet">
            <IconUserCheck />
          </ThemeIcon>
        </CardStatsCustomer>
        <CardStatsCustomer title="New Customers" value={241} percent={2.7} type="DOWN">
          <ThemeIcon size={"xl"} color="teal">
            <IconUserPlus />
          </ThemeIcon>
        </CardStatsCustomer>
      </SimpleGrid>
    </motion.div>
  )
}
