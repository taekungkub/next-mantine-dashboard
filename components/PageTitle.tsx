import { Title, Text } from "@mantine/core"

interface Props {
  title?: string
  subtitle?: string
}

function PageTitle({ title, subtitle }: Props) {
  function MyTitle() {
    return <Title order={5}>{title}</Title>
  }

  return (
    <div style={{ marginBottom: "12px" }}>
      {MyTitle()}
      <Text fz="sm">{subtitle}</Text>
    </div>
  )
}

export default PageTitle
