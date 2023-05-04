import Link from "next/link"
import { AiOutlineGlobal } from "react-icons/ai"
import { Ubuntu } from "@next/font/google"
import { footerlink, footerlinkCondition } from "../../data/footer"
import TwitterImg from "../../public/twitter.png"
import Image from "next/image"

const ubuntu = Ubuntu({ weight: "400", subsets: ['latin'] })
export const Footer = () => {
    return (
        <footer className={`${ubuntu.className} text-sm`}>
            <div className="container mx-auto">
                <div>
                    <div className="flex flex-col lg:flex-row lg:justify-between items-center py-4">
                        <div className="flex justify-center items-center">
                            <AiOutlineGlobal size={25} className="mr-1" />
                            <p>Built by<Link href={'https://github.com/Asam237'} className="ml-1 underline underline-offset-4">Asam</Link></p>
                        </div>
                        <div className="flex justify-center items-center">
                            {
                                footerlink.map((item, index) => {
                                    return (
                                        <Link href={item.path} key={index} className="mr-4"><Image src={item.icon} alt={item.icon} className="w-6 h-6" /></Link>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className="border-t">
                    <div className="flex flex-col lg:flex-row lg:justify-between items-center py-4">
                        <div className="flex justify-center items-center">
                            <p>© Copyright {new Date().getFullYear()}, All Rights Reserved</p>
                        </div>
                        <div className="flex justify-center items-center">
                            {
                                footerlinkCondition.map((item, index) => {
                                    return (
                                        <Link href={item.path} key={index} className="mr-4 hover:underline hover:underline-offset-4">{item.name}</Link>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}