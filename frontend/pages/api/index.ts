import { AuthCreateType, AuthLoginType } from "../../types/index"
import axios from "axios"

const api = axios.create({
    baseURL: "http://localhost:5200",
})

export const authLogin = async (data: AuthLoginType) => {
    return await api.post("/auth/login", data)
}

export const createUser = async (data: AuthCreateType) => {
    return await api.post("/auth/create", data)
}

export const getAll = async () => {
    return await api.get("/links/all").then((res) => res.data.links)
}

export const createLink = async (data: any) => {
    return await api.post("/links/create", data)
}

export const destroyLink = async (id: any) => {
    return await api.delete(`/links/${id}`)
}

export const getOneLink = async (id: any) => {
    return await api.get(`/links/${id}`).then((res) => res.data.link)
}

export const me = async (id: any) => {
    return await api.get(`/users/${id}`).then((res) =>res.data.data.user)
}