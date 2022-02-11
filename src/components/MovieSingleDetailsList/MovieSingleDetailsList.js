import React from 'react';

export function MovieSingleDetailsList (props) {
    let {movie} = props;

    return (
        <div>
            <div>ID: {movie.id}</div>
            <div>GENRE: {movie.name}</div>
        </div>
    );
}

