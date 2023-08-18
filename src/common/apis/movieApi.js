import axios from "axios";

export const MovieApi = axios.create({
    baseURL: "http://www.omdbapi.com/"
});