import axios from "axios"

export default class DataService {
    public client: any
    constructor() {
        this.client = axios.create({
            baseURL: 'http://127.0.0.1:5200/',
            headers: {
                'content-type': 'application/json'
            }
        })
    }

    post = (url: string, data: any, config?: any) => {
        return this.client.post(url, data, config)
    }

    get = (url: string, config?: any) => {
        return this.client.get(url, config)
    }
    put = (url: string, config?: any) => {
        return this.client.put(url, config)
    }
    delete = (url: string, config?: any) => {
        return this.client.delete(url, config)
    }
}