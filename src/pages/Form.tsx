import { SelectionForm } from '@/components/organisms/SelectionForm/SelectionForm'
import { NextPage } from 'next'
import Head from 'next/head'

interface PageProps {
  // ページコンポーネントに渡すプロップスの型定義
}

const Page: NextPage<PageProps> = () => {
  return (
    <>
      <Head>
        <title>Musicality Finder | Form</title>
      </Head>
      <SelectionForm />
    </>
  )
}

export default Page
