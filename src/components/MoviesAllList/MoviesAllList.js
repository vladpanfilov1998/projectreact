import {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";

import {MoviesAllListDetails} from "../MoviesAllListDetails/MoviesAllListDetails";
import '../MoviesAllListDetails/MovieAllListDetails.css'
import {axiosInstance, IPkey} from "../services/api.service";

export function MoviesAllList() {
    let [movies, setMovies] = useState([]);

    let [counter, setCounter] = useState(0)

    useEffect(() => {

        const getMovies = () => {
            return axiosInstance.get(`/discover/movie?api_key=${IPkey}&page=${counter}`)
        }

        getMovies().then(value => {
            let {data: {results}} = value;
            setMovies(results);
        })

    }, [counter]);

    return (
        <div>
            <Outlet/>
            <div>
                <div className={'buttons_block'}>
                    <button className={'buttons'} onClick={() => {
                        counter -= 1;
                        setCounter(counter);
                    }}>PREV
                    </button>
                    <button className={'buttons'} onClick={() => {
                        counter += 1;
                        setCounter(++counter);
                    }}>NEXT
                    </button>
                </div>
                <h2>MOVIES</h2>
                <div className={'movies_list'}>
                    {movies.map((movie) => <MoviesAllListDetails key={movie.id} movie={movie}/>)}
                </div>
            </div>
        </div>
    );
}