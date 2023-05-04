import { Ubuntu } from "@next/font/google"
import Link from "next/link"
import { AiFillGithub, AiOutlineGlobal } from "react-icons/ai"

const ubuntu = Ubuntu({ weight: "400", subsets: ['latin'] })
export const Header = () => {
    return (
        <header className={`${ubuntu.className} py-4 border-b`}>
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
                    <div>
                        <div className="flex justify-center items-center">
                            <AiOutlineGlobal size={25} />
                            <h1 className="text-xl font-bold ml-2">Savelink</h1>
                        </div>
                    </div>
                    <div className="flex justify-center items-center border px-8 py-2 rounded-md border-black mt-4 lg:mt-0 hover:bg-black hover:text-white">
                        <AiFillGithub size={25} />
                        <Link href={'https://github.com/Asam237/usefull-link'} className="font-semibold text-sm ml-4">
                            Star on Github
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}