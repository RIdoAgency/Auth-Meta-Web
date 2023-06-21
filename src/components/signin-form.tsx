import {
  Box,
  VStack,
  Text,
  Input,
  InputGroup,
  InputLeftElement,
  Button,
} from "@chakra-ui/react"
import { EmailIcon, ViewIcon } from "@chakra-ui/icons"
import { Auth } from "aws-amplify"
import { useState } from "react"

const SignInForm = ({ setUser }: { setUser: any }) => {
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")

  const signIn = async (email: string, password: string) => {
    try {
      const user = await Auth.signIn(email, password)
      const autheticated = await Auth.currentAuthenticatedUser()
      console.log(autheticated)
      console.log(user)
      setUser(user)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Box
      width="5xl"
      height="70vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <VStack
        py={12}
        px={12}
        borderWidth={1}
        borderRadius="lg"
        spacing={4}
        alignItems="flex-start"
      >
        <Text fontSize={30}>Welcome</Text>
        <InputGroup>
          <InputLeftElement>{<EmailIcon></EmailIcon>}</InputLeftElement>
          <Input
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          ></Input>
        </InputGroup>
        <InputGroup>
          <InputLeftElement>{<ViewIcon></ViewIcon>}</InputLeftElement>
          <Input
            placeholder="Password"
            value={pass}
            onChange={(event) => setPass(event.target.value)}
          ></Input>
        </InputGroup>
        <Button
          width="100%"
          colorScheme="teal"
          onClick={async () => {
            signIn(email, pass)
          }}
        >
          Sign In
        </Button>
        <Button
          width="100%"
          colorScheme="teal"
          onClick={async () => {
            setUser("SIGNUP")
          }}
        >
          Create An Account
        </Button>
      </VStack>
    </Box>
  )
}

export default SignInForm
