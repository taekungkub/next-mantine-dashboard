import { LineChart } from "@mantine/charts"
import { data } from "./data"

export default function LineCharts() {
  return (
    <LineChart
      h={300}
      data={data}
      dataKey="date"
      withLegend
      series={[
        { name: "Apples", color: "indigo.6" },
        { name: "Oranges", color: "blue.6" },
        { name: "Tomatoes", color: "teal.6" },
      ]}
    />
  )
}
