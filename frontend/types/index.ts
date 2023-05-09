export type FooterLinkType = {
    icon: any
    path: string
}

export type FooterLinkConditionType = {
    name: string
    path: string
}

export type FeatureItemType = {
    icon: any
    title: string
    content: string
}

export type TeamItemType = {
    pic: any
    name: string
    role: string
    description: string
}

export type FaqItemType = {
    title: string
    content: string
    lists?: string[]
}

export type HeaderItemType = {
    name: string
    path: string
}

export type AuthLoginType = {
    email: string
    password: string
}

export type AuthCreateType = {
    fullname: string
    email: string
    password: string
    userType: string
}

export type ItemType = {
    name: String
    description: String
    url: String
    path: String
    report: Boolean
    status: String
    user: any
}
