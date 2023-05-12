import Link from "next/link"
import { AiOutlineCodepen, AiOutlineUser } from "react-icons/ai"
import { headers } from "../../data/header"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@radix-ui/react-dropdown-menu'
import { useRouter } from "next/router"


export const Header = () => {
    const router = useRouter()

    const profile = () => {
        console.log('profile')
    }
    const logout = () => {
        router.push("/")
    }

    return (
        <header className={`py-4 shadow-md border-b z-50 sticky top-0 left-0 bg-white`}>
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
                    <div className="flex lg:flex-row items-center">
                        <Link href={"/"}>
                            <AiOutlineCodepen size={40} />
                        </Link>
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
                    {/* {userToken.length > 50 ?
                        userType === "NORMAL" ?
                            < div className="flex justify-center items-center underline underline-offset-4">
                                <DropdownMenu>
                                    <DropdownMenuTrigger className="outline-none">
                                        <div className="flex flex-row text-primary font-bold items-center text-sm">
                                            <AiOutlineUser size={24} className="mr-2" /> {userFullname}
                                        </div>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent
                                        sideOffset={5}
                                        className="bg-white shadow-sm border min-w-[150px] rounded text-sm"
                                    >
                                        <DropdownMenuItem
                                            onClick={profile}
                                            className="px-3 py-1 outline-none cursor-pointer flex gap-2 items-center hover:bg-gray-100"
                                        >
                                            Profile
                                        </DropdownMenuItem>
                                        <DropdownMenuSeparator className="border-t" />
                                        <DropdownMenuItem
                                            onClick={logout}
                                            className="px-3 py-1 outline-none cursor-pointer flex gap-2 items-center text-red-600 hover:bg-red-50"
                                        >
                                            Deconnexion
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div> :
                            < div className="flex justify-center items-center">
                                <DropdownMenu>
                                    <DropdownMenuTrigger className="outline-none">
                                        <div className="flex flex-row text-primary font-bold items-center text-sm">
                                            <AiOutlineUser size={24} className="mr-2" /> {userFullname}
                                        </div>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent
                                        sideOffset={5}
                                        className="bg-white shadow-sm border min-w-[150px] rounded text-sm"
                                    >
                                        <DropdownMenuItem
                                            onClick={profile}
                                            className="px-3 py-1 outline-none cursor-pointer flex gap-2 items-center hover:bg-gray-100"
                                        >
                                            Profile
                                        </DropdownMenuItem>
                                        <DropdownMenuSeparator className="border-t" />
                                        <DropdownMenuItem
                                            onClick={logout}
                                            className="px-3 py-1 outline-none cursor-pointer flex gap-2 items-center text-red-600 hover:bg-red-50"
                                        >
                                            Deconnexion
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                                <div className="flex justify-center items-center border px-4 py-2 rounded-md border-black hover:bg-black hover:text-white ml-4">
                                    <Link href={'/administration'} className="font-semibold text-sm">
                                        Administration
                                    </Link>
                                </div>
                            </div>
                        :
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
                    } */}

                    < div className="flex justify-center items-center underline underline-offset-4">
                        <DropdownMenu>
                            <DropdownMenuTrigger className="outline-none">
                                <div className="flex flex-row text-primary font-bold items-center text-sm">
                                    <AiOutlineUser size={24} className="mr-2" /> Abba Sali
                                </div>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                                sideOffset={5}
                                className="bg-white shadow-sm border min-w-[150px] rounded text-sm"
                            >
                                <DropdownMenuItem
                                    onClick={profile}
                                    className="px-3 py-1 outline-none cursor-pointer flex gap-2 items-center hover:bg-gray-100"
                                >
                                    Profile
                                </DropdownMenuItem>
                                <DropdownMenuSeparator className="border-t" />
                                <DropdownMenuItem
                                    onClick={logout}
                                    className="px-3 py-1 outline-none cursor-pointer flex gap-2 items-center text-red-600 hover:bg-red-50"
                                >
                                    Deconnexion
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
            </div>
        </header >
    )
}