import AreaCharts from "@/components/AreaCharts/AreaCharts"
import BarCharts from "@/components/BarCharts/BarCharts"
import DonutCharts from "@/components/DonutCharts/DonutCharts"
import LineCharts from "@/components/LineCharts/LineCharts"
import { Flex, Paper, SimpleGrid } from "@mantine/core"

function Page() {
  return (
    <div>
      Dashboard
      <SimpleGrid cols={2} mt={"md"}>
        <Paper p={"lg"}>
          <AreaCharts />
        </Paper>{" "}
        <Paper p={"lg"}>
          <BarCharts />
        </Paper>
        <Paper p={"lg"}>
          <LineCharts />
        </Paper>
        <Paper p={"lg"}>
          <Flex justify={"center"}>
            <DonutCharts />
          </Flex>
        </Paper>
      </SimpleGrid>
    </div>
  )
}

export default Page
