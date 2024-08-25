import {
  Box,
  Link as ChakraLink,
  Flex,
  Heading,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react'
import Link from 'next/link'
import { FaMusic } from 'react-icons/fa'

export interface HeaderProps {
  // ページコンポーネントに渡すプロップスの型定義
}

export const Header: React.FC<HeaderProps> = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const bgGradient = useColorModeValue(
    'linear(to-r, purple.400, pink.400)',
    'linear(to-r, purple.900, pink.900)'
  )
  const textColor = useColorModeValue('white', 'gray.200')

  return (
    <Box
      as="header"
      bgGradient={bgGradient}
      px={4}
      py={4}
      position="sticky"
      top={0}
      zIndex="sticky"
      boxShadow="md"
    >
      <Flex
        alignItems="center"
        justifyContent="space-between"
        maxW="container.xl"
        mx="auto"
      >
        <Link href="/Index" passHref>
          <ChakraLink _hover={{ textDecoration: 'none' }}>
            <Flex alignItems="center">
              <FaMusic size={24} color={textColor} />
              <Heading color={textColor} fontSize="xl" ml={2}>
                Musicality Finder
              </Heading>
            </Flex>
          </ChakraLink>
        </Link>
      </Flex>
    </Box>
  )
}
