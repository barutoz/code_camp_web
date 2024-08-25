import { Footer } from '@/components/atoms/Footer/Footer'
import { Header } from '@/components/atoms/Header/Header'
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  CircularProgress,
  Container,
  FormControl,
  FormErrorMessage,
  Heading,
  Radio,
  RadioGroup,
  Stack,
  Text,
  useColorModeValue,
  useToast,
  VStack,
} from '@chakra-ui/react'
import axios from 'axios'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'

export interface SelectionFormPresenterProps {
  // ページコンポーネントに渡すプロップスの型定義
}

export const SelectionFormPresenter: React.FC<
  SelectionFormPresenterProps
> = () => {
  const router = useRouter()
  const toast = useToast()

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const questions = [
    {
      question: '音楽を聴くときに最も重視するのは？',
      options: [
        { value: 'a', label: 'パワフルな音圧' },
        { value: 'b', label: 'キャッチーなメロディ' },
        { value: 'c', label: '革新的なサウンド' },
        { value: 'd', label: 'DJ洗練された演奏技術をする' },
      ],
    },
    {
      question: '好きなライブ・コンサートの雰囲気は？',
      options: [
        { value: 'a', label: '熱狂的で激しい' },
        { value: 'b', label: '一体感のある盛り上がり' },
        { value: 'c', label: 'クールでスタイリッシュ' },
        { value: 'd', label: '落ち着いた鑑賞' },
      ],
    },
    {
      question: '音楽を聴く主な目的は？',
      options: [
        { value: 'a', label: 'ストレス発散' },
        { value: 'b', label: '気分を上げる' },
        { value: 'c', label: '集中力を高める' },
        { value: 'd', label: '癒しや瞑想' },
      ],
    },
    {
      question: '好きな楽器は？',
      options: [
        { value: 'a', label: 'ギター' },
        { value: 'b', label: 'ピアノ' },
        { value: 'c', label: 'シンセサイザー' },
        { value: 'd', label: 'サックス' },
      ],
    },
    {
      question: '音楽の歴史で最も興味のある時代は？',
      options: [
        { value: 'a', label: '70-80年代' },
        { value: 'b', label: '90-2000年代' },
        { value: 'c', label: '2010年代以降' },
        { value: 'd', label: 'クラシック音楽の時代' },
      ],
    },
  ]

  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: questions.reduce(
      (acc, _, index) => {
        acc[`question_${index}`] = ''
        return acc
      },
      {} as Record<string, string>
    ),
  })

  const watchAllFields = watch()

  const onSubmit = async (data: Record<string, string>) => {
    setIsSubmitting(true)
    try {
      const formattedData = {
        question: questions.reduce(
          (acc, _, index) => {
            acc[`q_${index + 1}`] = data[`question_${index}`]
            return acc
          },
          {} as Record<string, string>
        ),
      }
      console.log(formattedData)

      const response = await axios.post('/api/submit-form', formattedData)
      console.log('フォーム送信成功:', response.data)

      toast({
        title: '送信成功',
        description: '結果ページに移動します',
        status: 'success',
        duration: 2000,
        isClosable: true,
      })

      // 成功時に /Result ページに遷移し、レスポンスデータを渡す
      setTimeout(() => {
        router.push({
          pathname: '/Result',
          query: {
            id: response.data.id,
            categoryId: response.data.category_id,
            questions: JSON.stringify(response.data.question),
          },
        })
      }, 2000)
    } catch (error) {
      console.error('フォーム送信エラー:', error)
      toast({
        title: 'エラー',
        description: '送信に失敗しました。もう一度お試しください。',
        status: 'error',
        duration: 3000,
        isClosable: true,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const isCurrentQuestionAnswered = () => {
    return !!watchAllFields[`question_${currentQuestionIndex}`]
  }

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    } else {
      handleSubmit(onSubmit)()
    }
  }

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1)
    }
  }

  const bgColor = useColorModeValue('white', 'gray.900')
  const textColor = useColorModeValue('gray.800', 'gray.100')
  const accentColor = useColorModeValue('pink.500', 'pink.300')

  const currentQuestion = questions[currentQuestionIndex]

  return (
    <Box bg={bgColor} minHeight="100vh">
      <Header />
      <Container maxW="container.xl" pt="100px">
        <VStack
          spacing={8}
          textAlign={'center'}
          px={4}
          maxWidth={'600px'}
          margin="0 auto"
        >
          <Heading
            fontWeight={700}
            fontSize={{ base: '3xl', sm: '4xl', md: '5xl' }}
            lineHeight={'110%'}
            color={textColor}
          >
            あなたの音楽性を発見しよう
          </Heading>
          <Box width={'100%'}>
            <Heading
              fontSize={'2xl'}
              textAlign={'center'}
              color={textColor}
              mb={4}
            >
              {currentQuestion.question}
            </Heading>
            <Controller
              name={`question_${currentQuestionIndex}`}
              control={control}
              defaultValue=""
              rules={{ required: '選択してください' }}
              render={({ field }) => (
                <FormControl
                  isInvalid={!!errors[`question_${currentQuestionIndex}`]}
                >
                  <RadioGroup
                    {...field}
                    value={watchAllFields[`question_${currentQuestionIndex}`]}
                    onChange={(value) => field.onChange(value)}
                  >
                    <Stack spacing={4} width={'100%'}>
                      {currentQuestion.options.map((option) => (
                        <Radio
                          key={option.value}
                          value={option.value}
                          colorScheme={'pink'}
                          size={'lg'}
                          borderColor={'gray.300'}
                        >
                          <Text fontSize={'lg'} color={textColor}>
                            {option.label}
                          </Text>
                        </Radio>
                      ))}
                    </Stack>
                  </RadioGroup>
                  <FormErrorMessage color="red.500">
                    {
                      errors[`question_${currentQuestionIndex}`]
                        ?.message as string
                    }
                  </FormErrorMessage>
                </FormControl>
              )}
            />
          </Box>
          <Stack direction="row" spacing={4} width="100%">
            <Button
              leftIcon={<ChevronLeftIcon />}
              colorScheme={'pink'}
              variant={'outline'}
              size={'lg'}
              width={'50%'}
              onClick={handlePrevious}
              isDisabled={currentQuestionIndex === 0}
            >
              戻る
            </Button>
            <Button
              position="relative"
              colorScheme={'pink'}
              variant={'solid'}
              size={'lg'}
              width={'50%'}
              onClick={
                currentQuestionIndex === questions.length - 1
                  ? handleSubmit(onSubmit)
                  : handleNext
              }
              isDisabled={!isCurrentQuestionAnswered() || isSubmitting}
              bg={accentColor}
              _hover={{
                bg: 'pink.600',
                transform: 'translateY(-2px)',
                boxShadow: 'xl',
              }}
              transition="all 0.3s"
            >
              {isSubmitting && currentQuestionIndex === questions.length - 1 ? (
                <CircularProgress
                  isIndeterminate
                  color="white"
                  size="40px"
                  thickness="4px"
                  position="absolute"
                  top="50%"
                  left="50%"
                  transform="translate(-50%, -50%)"
                />
              ) : (
                <>
                  {currentQuestionIndex === questions.length - 1
                    ? '送信する'
                    : '次へ'}
                  <ChevronRightIcon ml={2} />
                </>
              )}
            </Button>
          </Stack>
        </VStack>
      </Container>
      <Footer />
    </Box>
  )
}
