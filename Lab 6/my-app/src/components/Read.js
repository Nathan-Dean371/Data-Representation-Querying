import { useEffect, useState } from 'react';
import Movies from './Movies';
import axios from 'axios';
const Read = () => 
{ 
    // Declare a state variable 'movies' and a function 'setMovies' to update it
    const [movies, setMovies] = useState([]);


     // useEffect hook to perform side effects in the component
    useEffect(() =>
    {
        axios.get('https://jsonblob.com/api/jsonblob/1287718524221775872')
        .then((response) =>
        {
          //console.log(response.data);
          setMovies(response.data.movies);
        })
        .catch((error) =>
        {
            console.log(error);
        });
    }); 


    return (
        <div>
            <h3>Hello from Read component</h3>
            {/* <Movies myMovies={data}></Movies> */}
            <Movies myMovies={movies}></Movies>
        </div>
    );
};

export default Read