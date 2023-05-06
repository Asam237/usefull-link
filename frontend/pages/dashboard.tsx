import Head from "next/head";
import { Ubuntu } from "@next/font/google"
import { Header } from "../components/commons/header.common";
import { Footer } from "../components/commons/footer.common";
import Link from "next/link";
import { AiOutlinePlus } from "react-icons/ai";

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
                <main className='py-16 container'>
                    <div className="flex justify-center items-center flex-col text-center">
                        <h1 className="text-2xl lg:text-6xl text-gray-900 font-bold leading-tight">
                            Dashboard
                        </h1>
                        <p className="leading-7 max-w-xl mx-auto text-gray-600 mt-6">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo, dolores! Modi culpa nisi cum corrupti.</p>
                        <div className="mt-10 flex">
                            <Link href={""} className="bg-black h-12 w-64 lg:w-52 rounded-lg text-white flex justify-center items-center hover:text-gray-900 hover:bg-white hover:border hover:border-black">
                                <AiOutlinePlus size={20} className="mr-2" />  Add new code
                            </Link>
                        </div>
                    </div>
                    <hr className="my-10"/>
                </main>
                <Footer />
            </div>
        </>
    )
}