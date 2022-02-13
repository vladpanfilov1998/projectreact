import React, {useEffect, useState} from 'react';

import {getMovies} from "../services/movies.api";
import {MoviesAllListDetails} from "../MoviesAllListDetails/MoviesAllListDetails";
import '../MoviesAllListDetails/MovieAllListDetails.css'
import {Outlet} from "react-router-dom";

export function MoviesAllList () {
    let [movies, setMovies] = useState([]);

    useEffect(()=> {
        getMovies().then(value => {
            let {data: {results}} = value;
            setMovies(results);
        })

    },[]);

    return (
        <div>
            <Outlet/>
        <div>
            <h2>MOVIES</h2>
            <div className={'movies_list'}>
                {movies.map((movie) => <MoviesAllListDetails key={movie.id} movie={movie}/>)}
            </div>
        </div>
        </div>
    );
}