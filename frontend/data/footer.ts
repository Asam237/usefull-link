import { FooterLinkConditionType, FooterLinkType } from "../types";
import { GithubImg, TwitterImg } from "./icons";

export const footerlink: FooterLinkType[] = [
    {
        icon: GithubImg,
        path: "/"
    },
    {
        icon: TwitterImg,
        path: "/"
    },
]

export const footerlinkCondition: FooterLinkConditionType[] = [
    {
        name: "Features",
        path: "#features"
    },
    {
        name: "Teams",
        path: "#teams"
    },
    {
        name: "FAQs",
        path: "#faq"
    },
]
