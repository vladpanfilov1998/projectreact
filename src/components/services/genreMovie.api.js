import {axiosInstance} from './api.service';
import {IPkey} from "./api.service";

export const moviesService = {
    getById:(id) => axiosInstance.get(`/discover/movie? &language=uk-UK&api_key=${IPkey}&with_genres=${id}`).then(value => value.data)
}


