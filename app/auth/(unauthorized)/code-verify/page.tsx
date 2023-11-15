"use client"
import React, { useRef, useState } from "react"

import { Paper, Title, Text, TextInput, Button, Container, Group, Anchor, Center, Box, rem, NumberInput, Flex, Progress } from "@mantine/core"
import { isNumberInput } from "@/helper/utils"

export default function page() {
  const [pin1, setPin1] = useState("")
  const [pin2, setPin2] = useState("")
  const [pin3, setPin3] = useState("")
  const [pin4, setPin4] = useState("")

  const inputRef1 = useRef<HTMLInputElement>(null)
  const inputRef2 = useRef<HTMLInputElement>(null)
  const inputRef3 = useRef<HTMLInputElement>(null)
  const inputRef4 = useRef<HTMLInputElement>(null)

  function handleChange(e: any) {
    if (!pin1) {
      setPin1(e.target.value)
      inputRef2.current?.focus()
    } else if (!pin2) {
      setPin2(e.target.value)
      inputRef3.current?.focus()
    } else if (!pin3) {
      setPin3(e.target.value)
      inputRef4.current?.focus()
    } else if (!pin4) {
      setPin4(e.target.value)
      inputRef4.current?.blur()
    }
  }

  return (
    <>
      <div>
        <Container size={450} style={{ height: "100vh", display: "grid", alignItems: "center" }}>
          <div>
            <Paper withBorder shadow="md" p={30} radius="md" mt="xl">
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                }}
              >
                <Title order={2}>Enter Verification Code</Title>
                <Text c="dimmed" fz="sm" mt={4}>
                  We send you on mail.
                </Text>
                <Text fz="sm" mt={12}>
                  We ve send you code on jone. ****@company.com
                </Text>
                <Flex mt={20} gap={20} justify={"space-between"}>
                  <TextInput
                    required
                    ref={inputRef1}
                    maxLength={1}
                    value={pin1}
                    onChange={handleChange}
                    onKeyDown={(event) => {
                      isNumberInput(event)
                    }}
                  />
                  <TextInput
                    required
                    ref={inputRef2}
                    maxLength={1}
                    value={pin2}
                    onChange={handleChange}
                    onKeyDown={(event) => {
                      isNumberInput(event)
                    }}
                  />
                  <TextInput
                    required
                    ref={inputRef3}
                    maxLength={1}
                    value={pin3}
                    onChange={handleChange}
                    onKeyDown={(event) => {
                      isNumberInput(event)
                    }}
                  />
                  <TextInput
                    required
                    ref={inputRef4}
                    maxLength={1}
                    value={pin4}
                    onChange={handleChange}
                    onKeyDown={(event) => {
                      isNumberInput(event)
                    }}
                  />
                </Flex>

                <Button my={"md"} fullWidth type="submit">
                  Continue
                </Button>
              </form>
              <Flex mt={"lg"} justify={"space-between"} align={"center"}>
                <Anchor c="dimmed" size="sm">
                  <Center inline>
                    <Box ml={5}>Did not receive the email? Check your spam filter, or</Box>
                  </Center>
                </Anchor>
                <Button variant="subtle">Resend</Button>
              </Flex>
            </Paper>
          </div>
        </Container>
      </div>
    </>
  )
}
