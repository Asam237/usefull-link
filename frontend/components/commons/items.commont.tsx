import Link from "next/link";
import { useState } from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai"
import { ItemType } from "../../types";
import { Modal } from "./modal.common";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { destroyLink } from "../../pages/api";

export const Items = ({ _id, name, description, url, path }: ItemType) => {
    const [deleteLinkModal, setDeleteLinkModal] = useState(false)
    const [editLinkModal, setEditLinkModal] = useState(false)
    const [editTitle, setEditTitle] = useState(name)
    const [editDescription, setEditDescription] = useState(description)
    const [editLink, setEditLink] = useState(url)
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

    const handleCancel = () => {
        setEditLinkModal(false)
        setDeleteLinkModal(false)
    }

    const handleDeleteLink = () => {
        setDeleteLinkModal(true)
    }

    const handleEditLink = () => {
        setEditLinkModal(true)
    }

    const saveEditLink = () => {
        console.log("Edit Link here !")
        setEditLinkModal(false)
    }

    return (
        <>
            <div className="px-4 py-2 border rounded-md shadow-lg hover:shadow-2xl">
                <h4 className="text-xl">{name}</h4>
                <p className="text-sm py-4 leading-loose line-clamp-4">{description}</p>
                <p className="leading-loose truncate">
                    <Link target={"_blank"} className="text-clip text-sm text-blue-600 font-semibold underline truncate underline-offset-4 hover:text-blue-800" href={""}>{url}</Link>
                </p>
                <hr className="my-3" />
                <div className="flex justify-between items-center">
                    <AiFillEdit className="cursor-pointer" size={24} onClick={handleEditLink} color="blue" />
                    <AiFillDelete className="cursor-pointer" onClick={handleDeleteLink} size={24} color="red" />
                </div>
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
                            <div className="flex justify-center items-center border px-4 py-2 rounded-md border-black w-28">
                                <button onClick={handleCancel} className="font-semibold text-sm">
                                    Cancel
                                </button>
                            </div>
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
                            <input type="text" value={`${editTitle}`} className='px-6 rounded-md py-1 bg-white border w-full' onChange={(e) => setEditTitle(e.target.value)} />
                        </div>
                        <div>
                            <p className='text-sm py-1 mt-4'>Link</p>
                            <input type="text" value={`${editLink}`} className='px-6 rounded-md py-1 bg-white border w-full' onChange={(e) => setEditLink(e.target.value)} />
                        </div>
                        <div>
                            <p className='text-sm py-1 mt-4'>Description</p>
                            <textarea value={`${editDescription}`} cols={3} rows={4} className='px-6 rounded-md py-1 bg-white border w-full' onChange={(e) => setEditDescription(e.target.value)} />
                        </div>
                        <div className="flex flex-row space-x-4 items-center justify-end my-6">
                            <div className="flex justify-center items-center border px-4 py-2 rounded-md border-black w-28">
                                <button onClick={handleCancel} className="font-semibold text-sm">
                                    Cancel
                                </button>
                            </div>
                            <button onClick={saveEditLink} className="bg-black px-4 py-2 w-28 rounded-lg text-white flex justify-center items-center">
                                Edit
                            </button>
                        </div>
                    </Modal>
                )
            }
        </>
    )
}