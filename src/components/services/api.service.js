import axios from "axios";

export let IPkey = '60d2342e24ff5de18d7cb0f5a9adf2f5'

export let axiosInstance = axios.create ({
    baseURL: 'https://api.themoviedb.org/3',
});