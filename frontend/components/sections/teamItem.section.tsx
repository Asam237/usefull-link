import Image from "next/image";
import { TeamItemType } from "../../types";

export const TeamItem = ({ pic, name, role, description }: TeamItemType) => {
    return (
        <div className="p-10 bg-white shadow-lg rounded-xl dark:bg-opacity-5">
            <div className="flex flex-row items-center">
                <Image src={pic} alt={pic} className="w-14 h-14" />
                <div className="ml-4">
                    <p className="text-sm lg:text-base font-medium text-gray-500 dark:text-gray-400">{name}</p>
                    <p className="text-sm lg:text-base font-medium text-gray-500 dark:text-gray-400">{role}</p>
                </div>
            </div>
            <div className="mt-4">
                <p className="mt-2 text-sm lg:text-base font-medium text-gray-500 dark:text-gray-400">{description}</p>
            </div>

        </div>
    )

}