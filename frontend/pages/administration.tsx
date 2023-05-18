import Head from "next/head";
import { Footer } from "../components/commons/footer.common";
import { Header } from "../components/commons/header.common";
import { Ubuntu } from "@next/font/google"
import { getAllLink } from "./api";
import { useQuery } from "@tanstack/react-query";
import { BiTrash } from "react-icons/bi";
import { Items } from "../components/commons/items.commont";

const ubuntu = Ubuntu({ weight: "400", subsets: ['latin'] })
export default function Administration() {

    const { isLoading, error, data } = useQuery({
        queryKey: ["links"],
        queryFn: () => getAllLink()
    })

    const links = data || []
    const reportLinks: any = []

    links.map((item: any, index: any) => {
        if (item.report === true) {
            reportLinks.push({ ...item })
        }
    })

    return (
        <>
            <Head>
                <title>Save Link</title>
                <meta name="description" content="Save Link" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={`${ubuntu.className}`}>
                <Header />
                <main className='py-16'>
                    <div className="container mx-auto">

                        <div className="flex justify-center items-center flex-col text-center">
                            <h1 className="text-2xl lg:text-6xl text-gray-900 font-bold leading-tight">
                                Reports
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
                                reportLinks?.length === 0 ? <div className="flex justify-center items-center flex-col mx-auto">
                                    <BiTrash size={50} />
                                    <h4 className="my-4 text-sm">Vide</h4>
                                </div> :
                                    reportLinks?.map((item: any, index: any) => {
                                        return (
                                            <Items key={index} publicLink={true} _id={item?._id} descriptionItem={item.description} nameItem={item.name} path={item.path} urlItem={item.url} createdAt={item.createdAt} />
                                        )
                                    })
                            }
                        </div>



                    </div>
                </main>
                <Footer />
            </div>
        </>
    )
}