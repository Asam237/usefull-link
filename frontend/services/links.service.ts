
import { ItemType } from "../types";
import DataService from "./data";

export class LinkService extends DataService {
    all = () => {
        return this.get('/links/all')
    }
    create = (data: ItemType) => {
        return this.post('/links/create', data)
    }
    destroy = (id: any) => {
        return this.delete(`/links/${id}`)
    }
}
