import Head from "next/head";
import { Footer } from "../components/commons/footer.common";
import { Header } from "../components/commons/header.common";

export default function Administration() {
    return (
        <>
            <Head>
                <title>Save Link</title>
                <meta name="description" content="Save Link" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main className='py-16 lg:py-40'>
                <div className="container mx-auto">
                    <h1>Administration</h1>
                </div>
            </main>
            <Footer />
        </>
    )
}