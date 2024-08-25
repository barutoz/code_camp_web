import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'

type RequestData = {
  question: Record<string, string>
}

type ResponseData = {
  id: number
  question: Record<string, string>
  category_id: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method === 'POST') {
    const { question } = req.body as RequestData

    try {
      // FastAPIバックエンドへのリクエスト
      const fastApiResponse = await axios.post(
        'http://127.0.0.1:8000/diagnosis/create',
        {
          question: question,
        }
      )

      const response: ResponseData = {
        id: fastApiResponse.data.id,
        question: fastApiResponse.data.question,
        category_id: fastApiResponse.data.category_id,
      }

      res.status(200).json(response)
    } catch (error) {
      console.error('FastAPIバックエンドへのリクエストエラー:', error)
      res.status(500).json({ error: 'Internal Server Error' } as any)
    }
  } else {
    res.setHeader('Allow', ['POST'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}
