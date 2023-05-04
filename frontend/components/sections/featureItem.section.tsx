import Image from "next/image";
import { FeatureItemType } from "../../types";

export const FeatureItem = ({ icon, title, content }: FeatureItemType) => {
    return (
        <div className="p-10 bg-white shadow-lg rounded-xl dark:bg-opacity-5">
            <Image src={icon} alt={icon} className="w-8 h-8" />
            <div className="mt-4">
                <h3 className="text-lg font-medium dark:text-white">{title}</h3>
                <p className="mt-2 text-base font-medium text-gray-500 dark:text-gray-400">{content}</p>
            </div>

        </div>
    )

}