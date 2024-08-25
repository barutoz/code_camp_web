import { ChakraBaseProvider, Container, theme } from '@chakra-ui/react'
import { ResultViewPresenter } from './ResultViewPresenter'

export interface ResultViewProps {
  // ページコンポーネントに渡すプロップスの型定義
}

export const ResultView: ResultViewProps = () => {
  return (
    <>
      <ChakraBaseProvider theme={theme}>
        <Container maxW="container.sm" flex="1">
          <ResultViewPresenter />
        </Container>
      </ChakraBaseProvider>
    </>
  )
}
