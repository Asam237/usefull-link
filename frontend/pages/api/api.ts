import { AuthCreateType, AuthLoginType } from "../../types/index"
import axios from "axios"

const api = axios.create({
    baseURL: "http://localhost:5200",
})

export const login = async (data: AuthLoginType) => {
    return await api.post("/login", data)
}

export const create = async (data: AuthCreateType) => {
    return await api.post("/create", data)
}

export const getAll = async () => {
    return await api.get("/links/all").then((res) => res.data.links)
}

export const createLink = async (data: any) => {
    return await api.post("/links/create", data)
}