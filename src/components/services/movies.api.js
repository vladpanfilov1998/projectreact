import {axiosInstance} from './api.service';
import {IPkey} from "./api.service";

export const getMovies = () => {
    return axiosInstance.get(`/discover/movie?api_key=${IPkey}`)
}

