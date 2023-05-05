import Link from "next/link"
import { AiOutlineCodepen, AiOutlineUser } from "react-icons/ai"
import { headers } from "../../data/header"
import { useRecoilValue } from "recoil"
import { authState, fullnameState } from "../../atoms/auth"

export const Header = () => {
    const userToken = useRecoilValue(authState)
    const userFullname = useRecoilValue(fullnameState)
    return (
        <header className={`py-4 shadow-md border-b z-50 sticky top-0 left-0 bg-white`}>
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
                    <div className="flex lg:flex-row items-center">
                        <AiOutlineCodepen size={40} />
                        <ul className="ml-4">
                            {
                                headers.map((item, index) => {
                                    return (
                                        <Link className="my-2 text-sm mx-2 font-medium hover:underline hover:underline-offset-4 hover:font-semibold" href={item.path} key={index}>{item.name}</Link>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    {userToken.length > 50 ?
                        <div className="flex justify-center items-center underline underline-offset-4"> <AiOutlineUser size={24} className="mr-2" /> {userFullname}</div> :
                        <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 mt-4 lg:mt-0">
                            <div className="flex justify-center items-center">
                                <Link href={'/login'} className="font-semibold text-sm hover:underline hover:underline-offset-4">
                                    Sign in
                                </Link>
                            </div>
                            <div className="flex justify-center items-center border px-4 py-2 rounded-md border-black hover:bg-black hover:text-white">
                                <Link href={'/create'} className="font-semibold text-sm">
                                    Sign up
                                </Link>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </header>
    )
}