import { ChakraBaseProvider, Container, theme } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { ResultViewPresenter } from './ResultViewPresenter'

export interface ResultViewProps {
  // ページコンポーネントに渡すプロップスの型定義
}

export const ResultView: React.FC = () => {
  const router = useRouter()
  const { categoryId, id, questions } = router.query

  // クエリパラメータが文字列であることを確認
  const categoryIdString = Array.isArray(categoryId)
    ? categoryId[0]
    : categoryId || ''
  const idNumber = parseInt(Array.isArray(id) ? id[0] : id || '0', 10)
  const questionsObject =
    typeof questions === 'string' ? JSON.parse(questions) : {}

  return (
    <ChakraBaseProvider theme={theme}>
      <Container maxW="container.sm" flex="1">
        <ResultViewPresenter
          id={idNumber}
          categoryId={categoryIdString}
          questions={questionsObject}
        />
      </Container>
    </ChakraBaseProvider>
  )
}
