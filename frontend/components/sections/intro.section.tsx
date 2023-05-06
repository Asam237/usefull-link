import Link from "next/link"
import { AiOutlineCode, AiOutlineLink, AiOutlineUser } from "react-icons/ai"
import { useRecoilValue } from "recoil"
import { authState } from "../../atoms/auth"

export const Intro = () => {
    const userToken = useRecoilValue(authState)
    return (
        <section className={`text-md`}>
            <div className="flex justify-center items-center flex-col text-center">
                <h1 className="text-2xl lg:text-6xl text-gray-900 font-bold leading-tight">
                    Save all the important links<br /> you have visited
                </h1>
                <p className="leading-7 max-w-md mx-auto text-gray-600 mt-6">We build products to help developers to save a link</p>
                <div className="mt-10 flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
                    <Link href={""} className="bg-black h-12 w-64 lg:w-52 rounded-lg text-white flex justify-center items-center hover:text-gray-900 hover:bg-white hover:border hover:border-black">
                        <AiOutlineLink size={24} className="mr-2" />  Explore link
                    </Link>
                    {
                        userToken.length > 50 ?
                            <Link href={"/dashboard"} className="border-gray-900 border h-12 w-64 lg:w-52 rounded-lg text-gray-900 flex justify-center items-center hover:bg-black hover:text-white">
                                <AiOutlineCode size={24} className="mr-2" />
                                Your dashboard
                            </Link> :
                            <Link href={"/login"} className="border-gray-900 border h-12 w-64 lg:w-52 rounded-lg text-gray-900 flex justify-center items-center hover:bg-black hover:text-white">
                                <AiOutlineUser size={24} className="mr-2" />
                                Sign in
                            </Link>

                    }
                </div>
            </div>
        </section>
    )
}