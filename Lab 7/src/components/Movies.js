import MovieItem from "./MovieItem";

function Movies(myMovies)
{
    return myMovies.map(
        (movie) =>
        {
            return <MovieItem myMovie={movie} key={movie.imdbID}/>

        });
}

export default Movies