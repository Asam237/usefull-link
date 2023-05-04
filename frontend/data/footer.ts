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
        name: "Privacy Police",
        path: "/"
    },
    {
        name: "Terms & Conditions",
        path: "/"
    },
]
