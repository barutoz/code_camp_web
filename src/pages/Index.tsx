import { HomeView } from '@/components/organisms/HomeView/HomeView'
import { NextPage } from 'next'
import Head from 'next/head'

interface PageProps {
  // ページコンポーネントに渡すプロップスの型定義
}

const Page: NextPage<PageProps> = () => {
  return (
    <>
      <Head>
        <title>Musicality Finder | index</title>
      </Head>
      <HomeView />
    </>
  )
}

export default Page
