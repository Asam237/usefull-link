import Head from "next/head";
import { Ubuntu } from "@next/font/google"
import { Header } from "../components/commons/header.common";
import { Footer } from "../components/commons/footer.common";
import { BiTrash } from "react-icons/bi";
import { Items } from "../components/commons/items.commont";
import { ItemType } from "../types";
import { useQuery } from "@tanstack/react-query";
import { getAllLink } from "./api";
import Link from "next/link";
import { useCookies } from "react-cookie";

const ubuntu = Ubuntu({ weight: "400", subsets: ['latin'] })
export default function Dashboard() {

    const cookie: any = Object.values(useCookies(["qwer"]))[0]
    const token = cookie?.qwer?.token
    
    const { isLoading, error, data } = useQuery({
        queryKey: ["links"],
        queryFn: () => getAllLink()
    })
    const links = data || []

    return (
        <>
            <Head>
                <title>Save Link  |  Dashboard</title>
                <meta name="description" content="Save Link" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={`${ubuntu.className}`}>
                <Header />
                {typeof token !== "undefined" ?
                    (
                        <main className='py-16 container'>
                            <div className="flex justify-center items-center flex-col text-center">
                                <h1 className="text-2xl lg:text-6xl text-gray-900 font-bold leading-tight">
                                    Dashboard
                                </h1>
                                <p className="leading-7 max-w-xl mx-auto text-gray-600 mt-6">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo, dolores! Modi culpa nisi cum corrupti.</p>
                            </div>
                            <hr className="my-10" />
                            {isLoading && (
                                <div>
                                    Loading..
                                </div>
                            )}
                            {error && (
                                <div>
                                    Error..
                                </div>
                            )}
                            <div className={`${links?.length === 0 ? 'sm:grid-cols-1 lg:grid-cols-1' : 'sm:grid-cols-2 lg:grid-cols-3'} grid gap-x-4 gap-y-10 `}>
                                {
                                    links?.length === 0 ? <div className="flex justify-center items-center flex-col mx-auto">
                                        <BiTrash size={50} />
                                        <h4 className="my-4 text-sm">Vide</h4>
                                    </div> :
                                        links?.map((item: ItemType, index: any) => {
                                            return (
                                                <Items key={index} _id={item?._id} description={item.description} name={item.name} path={item.path} url={item.url} publicLink={false} createdAt={item.createdAt} />
                                            )
                                        })
                                }
                            </div>
                        </main>
                    ) :
                    (<div className='py-16 lg:py-32  container'>
                        <div className="flex justify-center items-center flex-col text-center">
                            Vous devez vous connectez pour ajouter un lien.
                            <Link href={'/login'} className="font-semibold text-sm mt-8 border px-4 py-2 border-black rounded-md">
                                Connexion
                            </Link>
                        </div>
                    </div>
                    )
                }
                <Footer />
            </div>
        </>
    )
}