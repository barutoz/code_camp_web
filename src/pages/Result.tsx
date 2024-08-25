import { ResultView } from '@/components/organisms/ResultView/ResultView'
import { NextPage } from 'next'
import Head from 'next/head'

interface PageProps {
  // ページコンポーネントに渡すプロップスの型定義
}

const Page: NextPage<PageProps> = () => {
  return (
    <>
      <Head>
        <title>Musicality Finder | Result</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ResultView />
    </>
  )
}

export default Page
