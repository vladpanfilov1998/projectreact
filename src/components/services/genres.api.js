import {axiosInstance} from './api.service';
import {IPkey} from "./api.service";

export const getGenres =() => {
    return axiosInstance.get(`/genre/movie/list?api_key=${IPkey}`);
}