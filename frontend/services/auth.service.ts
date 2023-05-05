import { AuthCreateType, AuthLoginType } from "../types";
import DataService from "./data";

export class AuthService extends DataService {
    login = (data: AuthLoginType) => {
        return this.post('/auth/login', data)
    }
    create = (data: AuthCreateType) => {
        return this.post('/auth/create', data)
    }
}
