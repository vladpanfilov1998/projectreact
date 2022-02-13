import React from 'react';
import {useLocation} from "react-router-dom";

export function MoviesPages () {
    let {
        state: {
            title,
            backdrop_path,
            original_title,
            original_language,
            overview,
            popularity,
            release_date,
            vote_average,
            vote_count
        }
    } = useLocation();

    return (
        <div>
            <div className={'name'}>
                <div>
                    <img src={`https://image.tmdb.org/t/p/w500${backdrop_path}`} width={'400px'}
                         alt="Poster"/>
                </div>
                <div><h2>Title: {title}</h2></div>
                <div>Original title: {original_title}</div>
                <div>Original language: {original_language}</div>
                <div>{overview}</div>
                <div>Popularity: {popularity}</div>
                <div>Release data: {release_date}</div>
                <div>Vote average: {vote_average}</div>
                <div>Vote count: {vote_count}</div>
            </div>
        </div>
    );
}
