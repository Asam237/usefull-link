import Link from "next/link";
import { useState } from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai"
import { ItemType } from "../../types";
import { Modal } from "./modal.common";

export const Items = ({ name, description, url, path }: ItemType) => {
    const [deleteLinkModal, setDeleteLinkModal] = useState(false)
    const [editLinkModal, setEditLinkModal] = useState(false)

    const handleDeleteLink = () => {
        setDeleteLinkModal(true)
    }

    const handleEditLink = () => {
        setEditLinkModal(true)
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
                            <p className='text-sm py-1'>Title</p>
                            <input type="text" className='px-6 rounded-md py-1 bg-white border w-full' />
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
                            <input type="text" className='px-6 rounded-md py-1 bg-white border w-full' />
                        </div>
                    </Modal>
                )
            }
        </>
    )
}