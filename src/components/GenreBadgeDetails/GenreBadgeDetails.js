import {Link} from "react-router-dom";

export function GenreBadgeList(props) {
    let {item} = props;

    return (
        <div>
            <div className={'genre_block'}>
                <div>ID: {item.id}</div>
                <div>GENRE: {item.name}</div>
                <Link to={'genre-details'} state={item.id.toString()}>
                    <button>FILMS</button>
                </Link>
            </div>

        </div>
    );
}

export default GenreBadgeList;