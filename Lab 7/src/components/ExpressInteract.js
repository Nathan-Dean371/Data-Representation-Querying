import axios from 'axios'; // Import axios for making HTTP requests
import { useEffect, useState } from 'react'; // Import useEffect and useState hooks from React

const ExpressInteract = () =>
{
    // Component to handle form submission to the express server
    //Submit a GET request to the express server
    //Use the useEffect hook to make the GET request when the component is mounted
    //Set the response data to the movies state
    //Display the movies state in the component

    // Define the movies state and setMovies function
    const [movies, setMovies] = useState([]);

    // Define the useEffect hook
    useEffect(() =>
    {
        // Make a GET request to the express server
        axios.get("http://localhost:4000/api/movies")
        .then((response) =>
        {
            // Set the response data to the movies state
            setMovies(response.data.movies);
        })
        .catch((error) =>
        {
            console.log(error);
        });
    }, []);

    // Return the ExpressInteract component
    return (
        <div>
            <h1>Movies</h1>
            <ul>
                {/* Display the movies state in the component */}
                {movies.map((movie) =>
                {
                    return (
                        <li key={movie.imdbID}>
                            <img src={movie.Poster} alt={movie.Title} />
                            <h2>{movie.Title}</h2>
                            <p>{movie.Year}</p>
                        </li>
                    );
                })}
            </ul>
        </div>
    );    
}

export default ExpressInteract; // Export the ExpressInteract component

