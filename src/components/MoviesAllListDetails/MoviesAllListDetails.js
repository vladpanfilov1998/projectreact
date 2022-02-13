import {Link} from "react-router-dom";

import './MovieAllListDetails.css'

export function MoviesAllListDetails(props) {
    let {movie} = props;

    return (
        <div className={'movie_block'}>
            <div className={'movie_card'}>
                <div>
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} width={'315px'}
                         alt="Poster"/>
                </div>

                <div><h2>{movie.title}</h2></div>
                <Link to={'movie-details'} state={movie}>
                    <button>FILM DETAILS</button>
                </Link>

            </div>
        </div>
    );
}