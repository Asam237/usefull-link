import { atom } from "recoil"

export const authState = atom({
    key: 'auth-state',
    default: ''
})

export const authId = atom({
    key: 'auth-id',
    default: ''
})

export const userTypeState = atom({
    key: 'user-type-state',
    default: ''
})