import { faqs } from "../../data/faqs"
import { FaqItem } from "./faqItem.section"

export const FAQ = () => {
    return (
        <section id="faq" className={`text-md px-4 pt-32 lg:pt-52 lg:max-w-7xl`}>
            <div className="flex justify-center items-center flex-col text-center">
                <h1 className="text-2xl lg:text-6xl text-gray-900 font-bold leading-tight">
                    FAQ
                </h1>
                <p className="leading-7 max-w-md mx-auto font-medium text-gray-400 mt-6 text-center text-base lg:text-lg">
                    Have any questions ?
                </p>
            </div>
            <div className="pb-16">
                {
                    faqs.map((item, index) => {
                        return (
                            <div key={index}>
                                <div className="container mx-auto">
                                    <FaqItem title={item.title} content={item.content} lists={item.lists} />
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}