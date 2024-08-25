import { Box, Flex, Text, useColorModeValue } from '@chakra-ui/react'

export interface FooterProps {
  // フッターコンポーネントに渡すプロップスの型定義
}

export const Footer: React.FC<FooterProps> = () => {
  const bgGradient = useColorModeValue(
    'linear(to-r, purple.400, pink.400)',
    'linear(to-r, purple.900, pink.900)'
  )
  const textColor = useColorModeValue('white', 'gray.200')

  return (
    <Box as="footer" bgGradient={bgGradient} color={textColor} py={6} mt={12}>
      <Flex
        direction={{ base: 'column', md: 'row' }}
        maxW="container.xl"
        mx="auto"
        px={4}
        justifyContent="space-between"
        alignItems="center"
      >
        <Text fontSize="sm" mb={{ base: 4, md: 0 }}>
          © 2024 Musicality Finder. All rights reserved.
        </Text>
      </Flex>
    </Box>
  )
}
