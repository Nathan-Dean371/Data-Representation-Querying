import MovieItem from "./MovieItem"; // Import the MovieItem component

// Define the Movies component
function Movies(props)
{
    // Map over the 'myMovies' prop and return a MovieItem component for each movie
    return props.myMovies.map(
        (movie) =>
        {
            // Pass the movie object as a prop to MovieItem and use the movie's imdbID as the key
            return <MovieItem myMovie={movie} key={movie.imdbID}/>
        });
}

// Export the Movies component as the default export
export default Movies;