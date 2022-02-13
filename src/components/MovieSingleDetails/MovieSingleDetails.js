import React, {useEffect, useState} from 'react';
import {Outlet, useLocation} from "react-router-dom";

import {axiosInstance, IPkey} from "../services/api.service";
import {MovieSingleDetailsList} from "../MovieSingleDetailsList/MovieSingleDetailsList";

const MovieSingleDetails = () => {
    let {state: {id}} = useLocation();

      const getMovies =() => {
        return axiosInstance.get(`/discover/movie?&language=uk-UK&api_key=${IPkey}&with_genres=${id.toString()}`);
    }
    let [movies, setMovies] = useState([]);

    useEffect(()=> {
        getMovies().then(value => {
            let {data: {results}} = value;
            setMovies(results);
        })

    });

    return (
        <div>
            <Outlet/>
            <div>
                <h2>MOVIES</h2>
                <div className={'movies_list'}>
                    {movies.map((movie) => <MovieSingleDetailsList key={movie.id} movie={movie}/>)}
                </div>
            </div>
        </div>
    );
}

export default MovieSingleDetails;