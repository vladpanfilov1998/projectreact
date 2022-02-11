import React, {useEffect, useState} from 'react';

import GenreBadgeDetails from "../GenreBadgeDetails/GenreBadgeDetails";
import {getGenres} from "../services/genres.api";
import css from '../App.module.css';


export function GenreBadge () {
    let [genreses, setGenres] = useState([]);

    useEffect(()=> {
        getGenres().then(value => {
            let {data: {genres}} = value;
            setGenres(genres);
        })

    },[]);


    return (
        <div >
            <h2 className={css.header_list}>GENRES</h2>
            <div className={css.genre_list}>
                {genreses.map((genre) => <GenreBadgeDetails key={genre.id} item={genre}/>)}
            </div>
        </div>
    );
}

export default GenreBadge;