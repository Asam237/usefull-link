import { atom } from "recoil"

export const fullnameState = atom({
    key: 'fullname-state',
    default: ''
})
export const authState = atom({
    key: 'auth-state',
    default: ''
})