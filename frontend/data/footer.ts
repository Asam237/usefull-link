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
        name: "FAQ",
        path: "#faq"
    },
    {
        name: "Terms & Conditions",
        path: "/"
    },
]
