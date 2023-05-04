import Image from "next/image"
import { useState } from "react"
import { FaqItemType } from "../../types"
import { AiFillPlusCircle } from "react-icons/ai"


export const FaqItem = ({ title, content }: FaqItemType) => {
    const [isActive, setIsActive] = useState(false)
    return (
        <div className="pt-4">
            <div className="border rounded-xl px-8">
                <div className="flex flex-col">
                    <div>
                        <div className="flex flex-row items-center justify-between">
                            <h1 className="text-gray-900 py-4 text-base lg:text-lg leading-loose cursor-pointer"
                                onClick={() => setIsActive(!isActive)}
                            >
                                {title}
                            </h1>
                            <div>{isActive === false ?
                                <AiFillPlusCircle size={30} />
                                :
                                null
                            }</div>
                        </div>
                    </div>
                    {isActive && <div>
                        <p className="text-sm lg:text-base text-gray-500 leading-loose pb-4">
                            {content}
                        </p>
                    </div>}
                </div>
            </div>
        </div >
    )

}