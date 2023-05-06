import axios from "axios";
import { host_server } from "../config/config.json";


export class UserService {

    url: string = `${host_server}user`;

    constructor(url?: string) {

        this.url = url || this.url;

    }

    async Login(username: string, password: string) {
        const { data } = await axios.post(`${this.url}/login`, { username, password });
        return data;
    }

}