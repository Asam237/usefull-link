import Head from "next/head";
import { Ubuntu } from "@next/font/google"
import { Header } from "../components/commons/header.common";
import { Footer } from "../components/commons/footer.common";

const ubuntu = Ubuntu({ weight: "400", subsets: ['latin'] })
export default function Dashboard() {
    return (
        <>
            <Head>
                <title>Save Link  |  Dashboard</title>
                <meta name="description" content="Save Link" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={`${ubuntu.className}`}>
                <Header />
                <main className='py-16 lg:py-40'>
                    Hello World
                </main>
                <Footer />
            </div>
        </>
    )
}