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
    username: string
    password: string
}

export type AuthCreateType = {
    fullname: string
    username: string
    email: string
    password: string
    userType: string
}

export type ItemType = {
    _id?: any
    nameItem: String
    descriptionItem: String
    urlItem: String
    path: String
    reportItem?: Boolean
    status?: String
    createdAt?: any
    publicLink?: boolean
    user?: any
}
