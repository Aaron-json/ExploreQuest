import axios from "axios";
const base_url = "https://api.openweathermap.org/data/3.0/onecall"

export const globalAxios = axios.create({
    baseURL: base_url
})