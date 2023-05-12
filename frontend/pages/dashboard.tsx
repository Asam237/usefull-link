import Head from "next/head";
import { Ubuntu } from "@next/font/google"
import { Header } from "../components/commons/header.common";
import { Footer } from "../components/commons/footer.common";
import { BiTrash } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import { Items } from "../components/commons/items.commont";
import { useEffect, useState } from "react";
import { Modal } from "../components/commons/modal.common";
import { LinkService } from "../services/links.service";
import { ItemType } from "../types";

const ubuntu = Ubuntu({ weight: "400", subsets: ['latin'] })
export default function Dashboard() {
    const [addLinkModal, setAddLinkModal] = useState(false)
    const [loading, setLoading] = useState(false)
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [data, setData] = useState([])
    const [link, setLink] = useState("")
    const handleCancel = () => {
        setAddLinkModal(false)
    }
    const handleAddLink = () => {
        setAddLinkModal(true)
    }
    const saveLink = (e: any) => {
        e.preventDefault()
        setLoading(true)
        return new LinkService().create({ name: title, description, url: link, path: link, report: false, status: "VALID", user: "iibadbiab" }).then((res: any) => {
            setAddLinkModal(false)
            fetchLink()
        })
    }
    const fetchLink = async () => {
        setLoading(true)
        return new LinkService().all().then((res: any) => {
            setData(res.data.links)
        })
    }
    useEffect(() => {
        fetchLink()
    }, [])
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
                    <div className={`${data.length === 0 ? 'sm:grid-cols-1 lg:grid-cols-1' : 'sm:grid-cols-2 lg:grid-cols-3'} grid gap-x-4 gap-y-10 `}>
                        {
                            data.length === 0 ? <div className="flex justify-center items-center flex-col mx-auto">
                                <BiTrash size={50} />
                                <h4 className="my-4 text-sm">Vide</h4>
                            </div> :
                                data.map((item: ItemType, index) => {
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
                            <input type="text" className='px-6 rounded-md py-1 bg-white border w-full' onChange={(e) => setTitle(e.target.value)} />
                        </div>
                        <div>
                            <p className='text-sm py-1 mt-4'>Link</p>
                            <input type="text" className='px-6 rounded-md py-1 bg-white border w-full' onChange={(e) => setLink(e.target.value)} />
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
                            <button onClick={saveLink} className="bg-black px-4 py-2 w-28 rounded-lg text-white flex justify-center items-center">
                                Add
                            </button>
                        </div>
                    </Modal>
                )
            }
        </>
    )
}