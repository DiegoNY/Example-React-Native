import axios from "axios";
import { host_server } from "../config/config.json";
import { Product } from "../types/product.type";

export class ProductService {
  url: string = `${host_server}products`;
  token: string = "";

  constructor(token?: string) {
    this.token = token || "";
  }

  async GetProducts() {
    const { data } = await axios.get(`${this.url}`, {
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    });
    return data;
  }

  async UpdateProduc(id: number, datap: Product) {
    const { data } = await axios.post(`${host_server}`, datap, {
      headers: {
        Referer: "http://apis.net.pe/api-ruc",
        Authorization: `Bearer ${this.token}`,
      },
    });
    return data;
  }
}
