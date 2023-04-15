import axios from "axios";

export const apiTmdb = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    headers: {
        Accept:"application/json"
    },
    params: {
        api_key: "1a0d8643de94a0bdad2ec29735e6c342",
    },
})