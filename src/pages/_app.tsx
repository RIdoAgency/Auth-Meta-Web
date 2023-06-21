import "@aws-amplify/ui-react/styles.css"
import type { AppProps } from "next/app"
import { ChakraProvider } from "@chakra-ui/react"
import { Amplify, Auth } from "aws-amplify"
import awsconfig from "../../src/aws-exports"

try {
  Amplify.configure(awsconfig)
  Amplify.register(Auth)
} catch (error) {
  console.log(error)
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
