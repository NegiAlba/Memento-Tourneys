import { AuthProvider } from '@lib/auth'
import { ChakraProvider } from "@chakra-ui/react"
import "@fontsource/inter"
// import '../styles/globals.css'
import theme from '../styles/theme'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme} resetCSS={true}>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </ChakraProvider>

  )
}

export default MyApp

