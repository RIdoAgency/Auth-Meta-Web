import { Auth } from "aws-amplify"
import { useState } from "react"
import { Text } from "@chakra-ui/react"
import SignUpForm from "@/components/signup-form"
import SignOutForm from "@/components/signout-form"
import SignInForm from "@/components/signin-form"

export default function Home() {
  const [user, setUser] = useState<any>(null)

  const getAuthUser = async () => {
    try {
      const user = await Auth.currentAuthenticatedUser()
      setUser(user)
    } catch (error) {
      console.log("error get user auth", error)
    }
  }

  if (user === "SIGNUP") {
    return <SignUpForm setUser={setUser} />
  }

  if (user) {
    return <SignOutForm setUser={setUser} />
  }

  return <SignInForm setUser={setUser} />
}
