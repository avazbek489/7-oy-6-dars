import axios from "axios";

export const getProduct = axios.create({
    baseURL: "https://strapi-store-server.onrender.com/api/"
})