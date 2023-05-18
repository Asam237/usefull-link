import Link from "next/link";
import { useState } from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai"
import { HiOutlineEyeOff } from "react-icons/hi"
import { ItemType } from "../../types";
import { Modal } from "./modal.common";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { destroyLink, updateLink } from "../../pages/api";

export const Items = ({ _id, nameItem, descriptionItem, urlItem, path, createdAt, publicLink, reportItem }: ItemType) => {

    const [deleteLinkModal, setDeleteLinkModal] = useState(false)
    const [reportLinkModal, setReportLinkModal] = useState(false)
    const [editLinkModal, setEditLinkModal] = useState(false)
    const [name, setName] = useState(nameItem)
    const [description, setDescription] = useState(descriptionItem)
    const [url, setUrl] = useState(urlItem)
    const data: any = { name, description, url }
    const clientQuery = useQueryClient()

    const deleteLinkMutation = useMutation({
        mutationFn: destroyLink,
        onSuccess: () => {
            clientQuery.invalidateQueries({ queryKey: ['links'] })
        }
    })

    const handleDestroyLink = async () => {
        deleteLinkMutation.mutate(_id)
        setDeleteLinkModal(false)
    }

    const handleEditLink = async (e: any) => {
        e.preventDefault()
        const edit = await updateLink(_id, data)
        if (edit.status === 200) {
            await updateLink(_id, data)
            setEditLinkModal(false)
        }
    }

    const handleReportLink = async (e: any) => {
        e.preventDefault()
        let report = true
        const myreport = await updateLink(_id, { report })
        if (myreport.status === 200) {
            await updateLink(_id, { report })
        }
    }

    const handleCancel = () => {
        setEditLinkModal(false)
        setDeleteLinkModal(false)
    }

    const handleEditLinkBtn = () => {
        setEditLinkModal(true)
    }

    const handleReportlLink = () => {
        setReportLinkModal(true)
    }

    const handleDeleteLink = () => {
        setDeleteLinkModal(true)
    }

    return (
        <>
            <div className="px-4 py-2 border rounded-md shadow-lg hover:shadow-2xl">
                <div className="h-56">
                    <h4 className="text-xl">{name}</h4>
                    <p className="text-sm py-4 leading-loose line-clamp-4">{description}</p>
                    <p className="leading-loose truncate">
                        <Link target={"_blank"} className="text-clip text-sm text-blue-600 font-semibold underline truncate underline-offset-4 hover:text-blue-800" href={""}>{url}</Link>
                    </p>
                </div>
                <p className="italic text-xs py-4 text-gray-500">{new Date(createdAt).toDateString()}</p>
                {
                    publicLink === false ?
                        (
                            <div>
                                <hr className="my-3" />
                                <div className="flex justify-between items-center">
                                    <HiOutlineEyeOff className="cursor-pointer" size={24} onClick={handleReportlLink} color="gray" />
                                </div>
                            </div>
                        )
                        :
                        <div>
                            <hr className="my-3" />
                            <div className="flex justify-between items-center">
                                <AiFillEdit className="cursor-pointer" size={24} onClick={handleEditLinkBtn} color="gray" />
                                <AiFillDelete className="cursor-pointer" onClick={handleDeleteLink} size={24} color="red" />
                            </div>
                        </div>
                }
            </div>
            {
                deleteLinkModal && (
                    <Modal
                        onClose={() => setDeleteLinkModal(false)}
                        title="Delete link">
                        <div>
                            <p className='text-sm py-1'>Delete Link</p>
                        </div>
                        <div className="flex flex-row space-x-4 items-center justify-end my-6">
                            <button onClick={handleCancel} className="font-semibold text-sm flex justify-center items-center border px-4 py-2 rounded-md border-black w-28">
                                Cancel
                            </button>
                            <button onClick={() => handleDestroyLink()} className="bg-red-500 px-4 py-2 w-28 rounded-lg text-white flex justify-center items-center">
                                Delete
                            </button>
                        </div>
                    </Modal>
                )
            }
            {
                editLinkModal && (
                    <Modal
                        onClose={() => setEditLinkModal(false)}
                        title="Edit link">
                        <div>
                            <p className='text-sm py-1'>Title</p>
                            <input type="text" value={`${name}`} className='px-6 rounded-md py-1 bg-white border w-full' onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div>
                            <p className='text-sm py-1 mt-4'>Link</p>
                            <input type="text" value={`${url}`} className='px-6 rounded-md py-1 bg-white border w-full' onChange={(e) => setUrl(e.target.value)} />
                        </div>
                        <div>
                            <p className='text-sm py-1 mt-4'>Description</p>
                            <textarea value={`${description}`} cols={3} rows={4} className='px-6 rounded-md py-1 bg-white border w-full' onChange={(e) => setDescription(e.target.value)} />
                        </div>
                        <div className="flex flex-row space-x-4 items-center justify-end my-6">
                            <div className="flex justify-center items-center border px-4 py-2 rounded-md border-black w-28">
                                <button onClick={handleCancel} className="font-semibold text-sm">
                                    Cancel
                                </button>
                            </div>
                            <button onClick={(e: any) => handleEditLink(e)} className="bg-gray-700 px-4 py-2 w-28 rounded-lg text-white flex justify-center items-center">
                                Edit
                            </button>
                        </div>
                    </Modal>
                )
            }
            {
                reportLinkModal && (
                    <Modal
                        onClose={() => setReportLinkModal(false)}
                        title="Report a link">
                        <p>Do you want to report this link ?</p>
                        <div className="flex flex-row space-x-4 items-center justify-end my-6">
                            <div className="flex justify-center items-center border px-4 py-2 rounded-md border-black w-28">
                                <button onClick={() => setReportLinkModal(false)} className="font-semibold text-sm">
                                    Cancel
                                </button>
                            </div>
                            <button onClick={(e: any) => {
                                handleReportLink(e)
                                setReportLinkModal(false)
                            }} className="bg-red-500 px-4 py-2 w-28 rounded-lg text-white flex justify-center items-center">
                                Report
                            </button>
                        </div>
                    </Modal>
                )
            }
        </>
    )
}