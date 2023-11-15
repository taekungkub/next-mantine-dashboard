import { Title, Text, Button, Container, Group } from "@mantine/core"
import classes from "./page.module.css"

export default function Page() {
  return (
    <Container className={classes.root}>
      <div className={classes.label}>503</div>
      <Title className={classes.title}>All of our servers are busy</Title>
      <Text c="dimmed" size="lg" ta="center" className={classes.description}>
        We cannot handle your request right now, please wait for a couple of minutes and refresh the page. Our team is already working on this issue.{" "}
      </Text>
      <Group justify="center">
        <Button variant="subtle" size="md">
          Refresh page
        </Button>
      </Group>
    </Container>
  )
}
