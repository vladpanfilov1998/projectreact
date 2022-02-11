import {Routes, Route, Link, Outlet} from "react-router-dom";
import Home from "./components/Home/Home";
import GenreBadge from "./components/GenreBadge/GenreBadge";
import {MoviesAllList} from "./components";
import Layout from "./components/Layout/Layout";

function App() {
    return (
        <div>

            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route path={'/genres'} element={<GenreBadge/>}/>

                    <Route path={'/movies'} element={<MoviesAllList/>}/>

                </Route>
            </Routes>
            <Outlet/>
        </div>
    );
}

export default App;

