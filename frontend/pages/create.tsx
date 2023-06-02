import Head from 'next/head'
import { AiOutlineCodepen } from "react-icons/ai"
import { Ubuntu } from "@next/font/google"
import Link from 'next/link'
import { Footer } from '../components/commons/footer.common'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { useMutation } from "@tanstack/react-query"
import { createUser } from './api'

const ubuntu = Ubuntu({ weight: "400", subsets: ['latin'] })

export default function Create() {
    const [fullname, setFullname] = useState("")
    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const newUser: any = { fullname, email, password, username }
    const [loading, setLoading] = useState(false)
    const router = useRouter()

    const mutationKey = ["register"]
    const createUserMutation = useMutation({
        mutationKey,
        mutationFn: createUser,
        onSuccess: () => {
            setLoading(false)
            router.push("/login")
        },
        onError: () => {
            setLoading(false)
            router.push("/create")
        }
    })

    const handlerAddUser = (e: any) => {
        e.preventDefault()
        setLoading(true)
        createUserMutation.mutate(newUser)
    }

    return (
        <>
            <Head>
                <title>Save Link  |  Signup</title>
                <meta name="description" content="Save Link" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                <main className={`py-16 ${ubuntu.className}`}>
                    <div className="container mx-auto">
                        <div className='flex flex-col justify-center items-center'>
                            <AiOutlineCodepen size={60} />
                            <h1 className="text-base lg:text-2xl text-gray-900 font-medium leading-tight py-4">
                                Sign up to SaveLink
                            </h1>
                            <form onSubmit={handlerAddUser}>
                                <div className='max-w-sm bg-gray-50 px-8 py-6 border'>
                                    <div>
                                        <p className='text-sm py-1'>Email address</p>
                                        <input type="email" onChange={(e) => setEmail(e.target.value)} className='px-2 rounded-md py-1 bg-white border lg:w-[20rem]' />
                                    </div>
                                    <div className='mt-4'>
                                        <p className='text-sm py-1'>Full name</p>
                                        <input type="text" onChange={(e) => setFullname(e.target.value)} className='px-2 rounded-md py-1 bg-white border lg:w-[20rem]' />
                                    </div>
                                    <div className='mt-4'>
                                        <p className='text-sm py-1'>Username</p>
                                        <input type="text" onChange={(e) => setUsername(e.target.value)} className='px-2 rounded-md py-1 bg-white border lg:w-[20rem]' />
                                    </div>
                                    <div className='mt-4'>
                                        <div className='flex justify-between items-center py-1'>
                                            <p className='text-sm'>Password</p>
                                        </div>
                                        <input type="password" onChange={(e) => setPassword(e.target.value)} className='px-2 rounded-md py-1 bg-white border lg:w-[20rem]' />
                                    </div>
                                    <div className='mt-4 flex justify-center items-center'>
                                        <button type='submit' className='text-sm text-white bg-green-700 hover:bg-green-900 rounded-md py-2 w-full'>Sign up</button>
                                    </div>
                                </div>
                            </form>
                            <div className='max-w-sm p-4 mt-6'>
                                <div className='flex justify-center items-center'>
                                    <p className='text-sm py-1 text-center'>Al ready have an account ? <Link className='text-blue-500 font-medium' href={"/login"}>Sign in.</Link></p>
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
