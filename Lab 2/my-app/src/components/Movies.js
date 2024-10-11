import MovieItem from "./MovieItem";
const Movies = (data) =>
{
    return data.myMovies.map
    (
        ()=> 
            {
                return <MovieItem/>
            }
    );
}

export default Movies