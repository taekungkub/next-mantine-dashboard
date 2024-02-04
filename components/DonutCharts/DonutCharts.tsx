import { DonutChart } from "@mantine/charts"
import { data } from "./data"

export default function DonutCharts() {
  return <DonutChart withLabelsLine withLabels data={data} />
}
