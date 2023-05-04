import Head from 'next/head'
import { Footer } from '../components/commons/footer.common'
import { Header } from '../components/commons/header.common'
import { FAQ } from '../components/sections/faq.section'
import { Feature } from '../components/sections/feature.section'
import { Intro } from '../components/sections/intro.section'

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
        <main className='py-16 lg:py-40'>
          <div className="container mx-auto">
            <Intro />
            <Feature />
            <FAQ />
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
