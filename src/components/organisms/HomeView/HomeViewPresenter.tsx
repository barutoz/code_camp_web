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
import NextLink from 'next/link'
import { useEffect, useState } from 'react'

interface HomeViewPresenterProps {
  // ページコンポーネントに渡すプロップスの型定義
}

export const HomeViewPresenter: React.FC<HomeViewPresenterProps> = () => {
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const bgColor = useColorModeValue('white', 'gray.900')
  const textColor = useColorModeValue('gray.800', 'gray.100')
  const accentColor = useColorModeValue('pink.500', 'pink.300')

  return (
    <Box bg={bgColor} minHeight="100vh">
      <Header />
      <Container maxW="container.xl" pt="100px">
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
            あなたの音楽性を
            <br />
            <Text as={'span'} color={accentColor} position="relative">
              発見しよう
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
          <Text color={textColor} fontSize={'xl'} maxW="600px">
            Musicality Finderは、あなたの隠れた音楽的才能を見つけ出し、
            新しい音楽の世界への扉を開きます。
            あなたの好みや経験を分析し、最適な音楽ジャンルや楽器を提案します。
          </Text>
          <NextLink href="/Form" passHref>
            <Button
              as="a"
              colorScheme={'pink'}
              size={'lg'}
              rounded={'full'}
              px={10}
              py={6}
              fontSize="xl"
              fontWeight={'bold'}
              bg={accentColor}
              _hover={{
                bg: 'pink.600',
                transform: 'translateY(-2px)',
                boxShadow: 'xl',
              }}
              transition="all 0.3s"
            >
              始めてみる
            </Button>
          </NextLink>
        </VStack>
      </Container>
      <Footer />
    </Box>
  )
}
