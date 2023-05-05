import Head from 'next/head'
import { Footer } from '../components/commons/footer.common'
import { Header } from '../components/commons/header.common'
import { FAQ } from '../components/sections/faq.section'
import { Feature } from '../components/sections/feature.section'
import { Intro } from '../components/sections/intro.section'
import { Teams } from '../components/sections/teams.section'
import { Ubuntu } from "@next/font/google"
import { useRecoilValue } from "recoil"
import { authState } from '../atoms/auth'

const ubuntu = Ubuntu({ weight: "400", subsets: ['latin'] })
export default function Home() {
  const userToken = useRecoilValue(authState)
  return (
    <>
      <Head>
        <title>Save Link</title>
        <meta name="description" content="Save Link" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`${ubuntu.className}`}>
        <Header />
        <main className='py-16 lg:py-40'>
          <div className="container mx-auto">
            <Intro />
            <Feature />
            <Teams />
            <FAQ />
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
