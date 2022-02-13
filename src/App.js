import {Routes, Route, Outlet} from "react-router-dom";

import GenreBadge from "./components/GenreBadge/GenreBadge";
import {MoviesAllList, MoviesListDetails} from "./components";
import Layout from "./components/Layout/Layout";
import MovieSingleDetails from "./components/MovieSingleDetails/MovieSingleDetails";
import {MoviesList} from "./components";

function App() {
    return (
        <div>

            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route path={'/genres'} element={<GenreBadge/>}>
                        <Route path={'genre-details'} element={<MovieSingleDetails/>}>

                        </Route>
                    </Route>

                    <Route path={'/genres/genre-details/movies'} element={<MoviesListDetails/>}/>

                    <Route path={'/movies'} element={<MoviesAllList/>}>
                        <Route path={'movie-details'} element={<MoviesList/>}/>
                    </Route>
                </Route>
            </Routes>
            <Outlet/>
        </div>
    );
}

export default App;