import React from 'react';
import {Link} from "react-router-dom";

export function MovieSingleDetailsList({movie}) {



    return (
        <div className={'movie_block'}>
            <div className={'movie_card'}>
                <div>
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} width={'315px'}
                         alt="Poster"/>
                </div>

                <div><h2>{movie.title}</h2></div>
                <Link to={'/genres/genre-details/movies'} state={movie}>
                    <button>FILM DETAILS</button>
                </Link>

            </div>
        </div>
    );
}