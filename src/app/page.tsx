import { ChakraBaseProvider, Container, theme } from '@chakra-ui/react'
import { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraBaseProvider theme={theme}>
      <Container maxW="container.sm" flex="1">
        <Component {...pageProps} />
      </Container>
    </ChakraBaseProvider>
  )
}
