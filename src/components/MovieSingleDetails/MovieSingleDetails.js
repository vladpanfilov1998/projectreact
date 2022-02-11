import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {getMovies} from "../services/movies.api";
import {MoviesListDetails} from "../MoviesListDetails/MoviesListDetails";

export default function MovieSingleDetails () {

    const {id} = useParams();
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        getMovies.getById(id).then(value => {
            let {data: {results}} = value;
            setMovies(results)
        })
        }, [id])


        return (
        <div>
            {movies.map(movie => <MoviesListDetails key={movie.id} movie={movie}/>)}
        </div>
    );
}
