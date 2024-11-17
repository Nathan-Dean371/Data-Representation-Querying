import { useEffect, useState } from 'react';
import Movies from './Movies';
import axios from 'axios';
const Read = () => 
{ 
    // Declare a state variable 'movies' and a function 'setMovies' to update it
    const [movies, setMovies] = useState([]);
    const [id, setId] = useState('');

    const handleSubmit = (event) =>
    {
        event.preventDefault();
        
        axios.get('http://localhost:4000/api/movies/' + id)
        .then((response) =>
        {
            console.log(response.data);
            setMovies(response.data);
        })
        .catch((error) =>
        {
            console.log(error);
        });
    }


    return (
        <div>
            <h3>Hello from Read component</h3>
            <form onSubmit={handleSubmit}>
                <label>Id:</label><br />
                <input type="text" id="id" value={id} onChange={(event) => setId(event.target.value)}/><br />
                <button type="submit">Search</button>
            </form>
        </div>
    );
};

export default Read