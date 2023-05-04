import { Inter } from "@next/font/google"
import { teams } from "../../data/teams"
import { TeamItem } from "./teamItem.section"

const inter = Inter({ weight: "400", subsets: ['latin'] })
export const Teams = () => {
    return (
        <section className={`${inter.className} text-md px-4 pt-32 lg:pt-52 lg:max-w-7xl`}>
            <div className="flex justify-center items-center flex-col text-center">
                <h1 className="text-2xl lg:text-6xl text-gray-900 font-bold leading-tight">
                    Established by leaders in the Flutter community
                </h1>
                <p className="leading-7 max-w-md mx-auto font-medium text-gray-400 mt-6 text-center text-base lg:text-lg">
                    The team
                </p>
            </div>
            <div className="grid grid-cols-1 mt-12 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-12">
                {
                    teams.map((item, index) => {
                        return (
                            <TeamItem pic={item.pic} key={index} name={item.name} description={item.description} role={item.role} />
                        )
                    })
                }
            </div>

        </section>
    )
}