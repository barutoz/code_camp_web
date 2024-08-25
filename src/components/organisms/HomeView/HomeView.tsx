import { ChakraBaseProvider, Container, theme } from '@chakra-ui/react'
import { HomeViewPresenter } from './HomeViewPresenter'

export interface HomeViewProps {
  // ページコンポーネントに渡すプロップスの型定義
}

export const HomeView: HomeViewProps = () => {
  return (
    <>
      <ChakraBaseProvider theme={theme}>
        <Container maxW="container.sm" flex="1">
          <HomeViewPresenter />
        </Container>
      </ChakraBaseProvider>
    </>
  )
}
