import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Layout from '../components/Layout'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>暖心宠物领养平台</title>
        <meta name="description" content="一个温暖治愈的宠物领养平台，帮助流浪动物找到温暖的家" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@500;600;700&display=swap" rel="stylesheet" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
} 