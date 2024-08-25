import { ChakraBaseProvider, Container, theme } from '@chakra-ui/react'
import { SelectionFormPresenter } from './SelectionFormPresenter'

export interface SelectionFormProps {
  // ページコンポーネントに渡すプロップスの型定義
}

export const SelectionForm: SelectionFormProps = () => {
  return (
    <>
      <ChakraBaseProvider theme={theme}>
        <Container maxW="container.sm" flex="1">
          <SelectionFormPresenter />
        </Container>
      </ChakraBaseProvider>
    </>
  )
}
