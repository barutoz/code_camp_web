import type { NextApiRequest, NextApiResponse } from 'next'

type RequestData = {
  question: Record<string, string>
}

type ResponseData = {
  id: number
  question: Record<string, string>
  category_id: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method === 'POST') {
    const { question } = req.body as RequestData

    // ここで回答を分析し、カテゴリーIDを決定する処理を実装します
    // この例では、ランダムなカテゴリーIDを生成しています
    const categoryId = `category_${Math.floor(Math.random() * 7) + 1}`

    const response: ResponseData = {
      id: 1, // 実際のアプリケーションでは、適切なIDを生成または取得する必要があります
      question: {
        ...question,
        // 不足している質問がある場合、ここで追加します
        q_6: question.q_6 || '',
        q_7: question.q_7 || '',
        q_8: question.q_8 || '',
      },
      category_id: categoryId,
    }

    res.status(200).json(response)
  } else {
    res.setHeader('Allow', ['POST'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}
