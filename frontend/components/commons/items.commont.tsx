import Link from "next/link";
import { AiFillEdit, AiFillDelete } from "react-icons/ai"
import { ItemType } from "../../types";

export const Items = ({ name, description, url, path }: ItemType) => {
    return (
        <div className="px-4 py-2 border rounded-md shadow-lg hover:shadow-2xl">
            <h4 className="text-xl">{name}</h4>
            <p className="text-sm py-4 leading-loose line-clamp-4">{description}</p>
            <p className="leading-loose truncate">
                <Link target={"_blank"} className="text-clip text-sm text-blue-600 font-semibold underline truncate underline-offset-4 hover:text-blue-800" href={""}>{url}</Link>
            </p>
            <hr className="my-3" />
            <div className="flex justify-between items-center">
                <AiFillEdit size={24} color="blue" />
                <AiFillDelete size={24} color="red" />
            </div>
        </div>
    )
}