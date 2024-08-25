import { Footer } from '@/components/atoms/Footer/Footer'
import { Header } from '@/components/atoms/Header/Header'
import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'

export interface ResultViewPresenterProps {
  id: number | null
  categoryId: string
}

export const ResultViewPresenter: React.FC<ResultViewPresenterProps> = ({
  id,
  categoryId,
}) => {
  const router = useRouter()
  const bgColor = useColorModeValue('white', 'gray.900')
  const textColor = useColorModeValue('gray.800', 'gray.100')
  const accentColor = useColorModeValue('pink.500', 'pink.300')

  const handleRetry = () => {
    router.push('/')
  }

  // カテゴリーIDに基づいて音楽ジャンルを決定する関数
  const getMusicGenre = (categoryId: string) => {
    const genres = {
      '1': 'ロック',
      '2': 'ポップ',
      '3': 'ジャズ',
      '4': 'クラシック',
      '5': 'エレクトロニック',
      '6': 'ヒップホップ',
      '7': 'R&B',
    }
    return genres[categoryId as keyof typeof genres] || '不明なジャンル'
  }

  const musicGenre = getMusicGenre(categoryId)

  return (
    <Box bg={bgColor} minHeight="100vh">
      <Header />
      <Container maxW="container.xl" pt="100px">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <VStack
            spacing={12}
            textAlign={'center'}
            px={4}
            maxWidth={'800px'}
            margin="0 auto"
          >
            <Heading
              fontWeight={700}
              fontSize={{ base: '4xl', sm: '5xl', md: '6xl' }}
              lineHeight={'110%'}
              color={textColor}
            >
              あなたに適した
              <br />
              <Text as={'span'} color={accentColor} position="relative">
                音楽ジャンル
                <Box
                  position="absolute"
                  bottom="-4px"
                  left="0"
                  right="0"
                  height="2px"
                  bg={accentColor}
                />
              </Text>
            </Heading>
            <Box
              bg={useColorModeValue('pink.50', 'gray.700')}
              p={6}
              borderRadius="xl"
              boxShadow="lg"
              textAlign="center"
            >
              <Text fontSize="4xl" fontWeight="bold" color={accentColor}>
                {musicGenre}
              </Text>
            </Box>
            <Text color={textColor} fontSize={'xl'} maxW="600px">
              このジャンルはあなたの音楽的趣向と才能に最適です。
              新しい音楽の世界を探索してみましょう！
            </Text>
            <Button
              colorScheme={'pink'}
              size={'lg'}
              rounded={'full'}
              px={10}
              py={6}
              fontSize="xl"
              fontWeight={'bold'}
              bg={accentColor}
              onClick={handleRetry}
              _hover={{
                bg: 'pink.600',
                transform: 'translateY(-2px)',
                boxShadow: 'xl',
              }}
              transition="all 0.3s"
            >
              もう一度診断する
            </Button>
          </VStack>
        </motion.div>
      </Container>
      <Footer />
    </Box>
  )
}
