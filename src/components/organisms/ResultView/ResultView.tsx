import { ChakraBaseProvider, Container, theme } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { ResultViewPresenter } from './ResultViewPresenter'

export interface ResultViewProps {
  // ページコンポーネントに渡すプロップスの型定義
}

export const ResultView: React.FC = () => {
  const router = useRouter()
  const { categoryId, id, questions } = router.query

  const categoryIdString = Array.isArray(categoryId)
    ? categoryId[0]
    : categoryId || ''
  const idNumber = id ? parseInt(Array.isArray(id) ? id[0] : id, 10) : null
  let questionsObject = {}
  try {
    questionsObject = typeof questions === 'string' ? JSON.parse(questions) : {}
  } catch (error) {
    console.error('questionsのパースに失敗しました:', error)
  }

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
