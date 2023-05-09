import Head from "next/head";
import { Ubuntu } from "@next/font/google"
import { Header } from "../components/commons/header.common";
import { Footer } from "../components/commons/footer.common";
import Link from "next/link";
import { AiOutlinePlus } from "react-icons/ai";
import { Items } from "../components/commons/items.commont";
import { items } from "../data/items";
import { useState } from "react";
import { Modal } from "../components/commons/modal.common";

const ubuntu = Ubuntu({ weight: "400", subsets: ['latin'] })
export default function Dashboard() {
    const [addLinkModal, setAddLinkModal] = useState(false)
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
                    <div className="grid gap-x-4 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
                        {
                            items.map((item, index) => {
                                return (
                                    <Items key={index} description={item.description} name={item.name} path={item.path} url={item.url} />
                                )
                            })
                        }
                    </div>
                </main>
                <Footer />
            </div>
            {
                addLinkModal && (
                    <Modal
                        onClose={() => setAddLinkModal(false)}
                        title="New link"
                    >
                        <div>
                            <p className='text-sm py-1'>Title</p>
                            <input type="text" className='px-6 rounded-md py-1 bg-white border w-full' />
                        </div>
                        <div>
                            <p className='text-sm py-1 mt-4'>Link</p>
                            <input type="text" className='px-6 rounded-md py-1 bg-white border w-full' />
                        </div>
                        <div>
                            <p className='text-sm py-1 mt-4'>Description</p>
                            <textarea cols={3} rows={4} className='px-6 rounded-md py-1 bg-white border w-full' />
                        </div>
                        <div className="flex flex-row space-x-4 items-center justify-end my-6">
                            <div className="flex justify-center items-center border px-4 py-2 rounded-md border-black w-28">
                                <button onClick={handleCancel} className="font-semibold text-sm">
                                    Cancel
                                </button>
                            </div>
                            <button className="bg-black px-4 py-2 w-28 rounded-lg text-white flex justify-center items-center">
                                Add
                            </button>
                        </div>
                    </Modal>
                )
            }
        </>
    )
}