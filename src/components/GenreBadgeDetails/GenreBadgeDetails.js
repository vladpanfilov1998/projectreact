import {Link, Outlet} from "react-router-dom";

export function GenreBadgeList (props) {
    let {item} = props;

    return (
        <div>
        <div>
            <div>ID: {item.id}</div>
            <div>GENRE: {item.name}</div>
            <Link to={`/discover/movie?&language=uk-UK&api_key=60d2342e24ff5de18d7cb0f5a9adf2f5&with_genres=${item.id.toString()}`}>
                <button>FILMS</button>
            </Link>
        </div>
            <Outlet/>
        </div>
    );
}

export default GenreBadgeList;