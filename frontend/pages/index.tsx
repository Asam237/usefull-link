import Head from 'next/head'
import { Footer } from '../components/commons/footer.common'
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
        <main className='py-16'>
          <div className="container mx-auto">
            hello world
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
