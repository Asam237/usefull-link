import Head from 'next/head'
import { Header } from '../components/commons/header.common'

export default function Home() {
  return (
    <>
      <Head>
        <title>Save Link</title>
        <meta name="description" content="Save Link" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Header />
        hello world
      </div>
    </>
  )
}
