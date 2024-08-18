import React from 'react'
import { NextPage } from 'next'
import Head from 'next/head'

interface PageProps {
  // ページコンポーネントに渡すプロップスの型定義
}

const NewPage: NextPage<PageProps> = () => {
  return (
    <>
      <Head>
        <title>新しいページ</title>
        <meta name="description" content="新しいページの説明" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>新しいページへようこそ</h1>
        {/* ページのコンテンツをここに追加 */}
      </main>
    </>
  )
}

export default NewPage
