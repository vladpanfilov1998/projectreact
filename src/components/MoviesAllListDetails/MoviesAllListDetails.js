import './MovieAllListDetails.css'

export function MoviesAllListDetails(props) {
    let {movie} = props;

    return (
        <div>
            <div className={'movie_card'}>
                <div>
                    <img href={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                         alt="Poster"/>
                </div>

                <div>TITLE: {movie.title}</div>


            </div>
        </div>
    );
}
