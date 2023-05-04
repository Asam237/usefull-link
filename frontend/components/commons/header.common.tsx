import { Poppins } from "@next/font/google"
import Link from "next/link"
import { AiOutlineLink, AiFillGithub } from "react-icons/ai"

const poppins = Poppins({ weight: "400", subsets: ['latin'] })
export const Header = () => {
    return (
        <header className={`${poppins.className} py-4 lg:py-6 border-b`}>
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
                    <div>
                        <div className="flex justify-center items-center">
                            <AiOutlineLink size={25} />
                            <h1 className="text-lg font-bold ml-2">usefullink</h1>
                        </div>
                    </div>
                    <div className="flex justify-center items-center border px-8 py-2 rounded-md border-black mt-4 lg:mt-0 hover:bg-black hover:text-white">
                        <AiFillGithub size={25} />
                        <Link href={'https://github.com/Asam237/usefull-link'} className="font-semibold text-base ml-4">
                            Star on Github
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}