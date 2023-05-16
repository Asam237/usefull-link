import Head from "next/head";
import { Ubuntu } from "@next/font/google"
import { Header } from "../components/commons/header.common";
import { Footer } from "../components/commons/footer.common";
import { BiTrash } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import { Items } from "../components/commons/items.commont";
import { useState } from "react";
import { Modal } from "../components/commons/modal.common";
import { ItemType } from "../types";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { createLink, getAll } from "./api";
import Link from "next/link";

const ubuntu = Ubuntu({ weight: "400", subsets: ['latin'] })
export default function Dashboard() {

    const [addLinkModal, setAddLinkModal] = useState(false)
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [url, setUrl] = useState("")
    const router = useRouter()

    const queryClient = useQueryClient()
    const mutationCache = queryClient.getMutationCache()
    const mutation: any = mutationCache.find({ mutationKey: ['auth'] })

    const user = mutation?.state?.data.data || {}
    const addLink: any = { name, description, url, user: `${user._id}` }

    const createLinkMutation = useMutation({
        mutationFn: createLink,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["links"] })
        }
    })
    const { isLoading, error, data } = useQuery({
        queryKey: ["links"],
        queryFn: () => getAll(user.token)
    })
    const links = data || []

    const handleLink = (e: any) => {
        e.preventDefault()
        createLinkMutation.mutate(addLink)
        setAddLinkModal(false)
    }

    const handleCancel = () => {
        setAddLinkModal(false)
    }
    const handleAddLink = () => {
        setAddLinkModal(true)
    }

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
                {Object.keys(user).length === 0 ?
                    (<div className='py-16 lg:py-32  container'>
                        <div className="flex justify-center items-center flex-col text-center">
                            Vous devez vous connectez pour ajouter un lien.
                            <Link href={'/login'} className="font-semibold text-sm mt-8 border px-4 py-2 border-black rounded-md">
                                Connexion
                            </Link>
                        </div>
                    </div>
                    ) :
                    (
                        <main className='py-16 container'>
                            <div className="flex justify-center items-center flex-col text-center">
                                <h1 className="text-2xl lg:text-6xl text-gray-900 font-bold leading-tight">
                                    Dashboard
                                </h1>
                                <p className="leading-7 max-w-xl mx-auto text-gray-600 mt-6">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo, dolores! Modi culpa nisi cum corrupti.</p>
                                <div className="mt-10 flex">
                                    <button onClick={handleAddLink} className="bg-black h-12 w-64 lg:w-52 rounded-lg text-white flex justify-center items-center hover:shadow-2xl">
                                        <AiOutlinePlus size={20} className="mr-2" />  Add new link
                                    </button>
                                </div>
                            </div>
                            <hr className="my-10" />
                            {isLoading && (
                                <div>
                                    Loading..
                                </div>
                            )}
                            {error && (
                                <div>
                                    Error..
                                </div>
                            )}
                            <div className={`${links?.length === 0 ? 'sm:grid-cols-1 lg:grid-cols-1' : 'sm:grid-cols-2 lg:grid-cols-3'} grid gap-x-4 gap-y-10 `}>
                                {
                                    links?.length === 0 ? <div className="flex justify-center items-center flex-col mx-auto">
                                        <BiTrash size={50} />
                                        <h4 className="my-4 text-sm">Vide</h4>
                                    </div> :
                                        links?.map((item: ItemType, index: any) => {
                                            return (
                                                <Items key={index} publicLink={true} _id={item?._id} description={item.description} name={item.name} path={item.path} url={item.url} createdAt={item.createdAt} />
                                            )
                                        })
                                }
                            </div>
                        </main>
                    )}
                <Footer />
            </div>
            {
                addLinkModal && (
                    <Modal
                        onClose={() => setAddLinkModal(false)}
                        title="New link"
                    >
                        <form onSubmit={handleLink}>
                            <div>
                                <p className='text-sm py-1'>Title</p>
                                <input type="text" className='px-6 rounded-md py-1 bg-white border w-full' onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div>
                                <p className='text-sm py-1 mt-4'>Link</p>
                                <input type="text" className='px-6 rounded-md py-1 bg-white border w-full' onChange={(e) => setUrl(e.target.value)} />
                            </div>
                            <div>
                                <p className='text-sm py-1 mt-4'>Description</p>
                                <textarea cols={3} rows={4} className='px-6 rounded-md py-1 bg-white border w-full' onChange={(e) => setDescription(e.target.value)} />
                            </div>
                            <div className="flex flex-row space-x-4 items-center justify-end my-6">
                                <div className="flex justify-center items-center border px-4 py-2 rounded-md border-black w-28">
                                    <button onClick={handleCancel} className="font-semibold text-sm">
                                        Cancel
                                    </button>
                                </div>
                                <button type="submit" className="bg-black px-4 py-2 w-28 rounded-lg text-white flex justify-center items-center">
                                    Add
                                </button>
                            </div>
                        </form>
                    </Modal>
                )
            }
        </>
    )
}