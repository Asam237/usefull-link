import Head from 'next/head'
import { Footer } from '../components/commons/footer.common'
import { AiOutlineCodepen } from "react-icons/ai"
import { Inter } from "@next/font/google"
import Link from 'next/link'

const inter = Inter({ weight: "400", subsets: ['latin'] })

export default function Login() {
    return (
        <>
            <Head>
                <title>Save Link  |  Login</title>
                <meta name="description" content="Save Link" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                <main className={`py-16 ${inter.className}`}>
                    <div className="container mx-auto">
                        <div className='flex flex-col justify-center items-center'>
                            <AiOutlineCodepen size={60} />
                            <h1 className="text-base lg:text-2xl text-gray-900 font-medium leading-tight py-4">
                                Sign in to SaveLink
                            </h1>
                            <div className='max-w-sm bg-gray-50 px-8 py-6 border'>
                                <div>
                                    <p className='text-sm py-1'>Email address</p>
                                    <input type="text" className='px-2 rounded-md py-1 bg-white border lg:w-[20rem]' />
                                </div>
                                <div className='mt-4'>
                                    <div className='flex justify-between items-center py-1'>
                                        <p className='text-sm'>Password</p>
                                        <Link href={""} className='text-xs text-blue-500'>Forgot password?</Link>
                                    </div>
                                    <input type="password" className='px-2 rounded-md py-1 bg-white border lg:w-[20rem]' />
                                </div>
                                <div className='mt-4 flex justify-center items-center'>
                                    <button className='text-sm text-white bg-green-700 hover:bg-green-900 rounded-md py-2 w-full'>Sign in</button>
                                </div>
                            </div>
                            <div className='max-w-sm p-4 mt-6'>
                                <div className='flex justify-center items-center'>
                                    <p className='text-sm py-1 text-center'>New to SaveLink ? <Link className='text-blue-500 font-medium' href={"/create"}>Create account.</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        </>
    )
}