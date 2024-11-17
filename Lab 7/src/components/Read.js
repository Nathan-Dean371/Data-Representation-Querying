import React, { useState } from 'react';
import axios from 'axios';

const Read = () => {
    // State to store the movie ID input by the user
    const [id, setId] = useState('');
    // State to store the movie data fetched from the API
    const [movies, setMovies] = useState(null);

    // Function to handle form submission
    const handleSubmit = (event) => {
        // Prevent the default form submission behavior
        event.preventDefault();
        
        // Make a GET request to fetch movie data by ID
        axios.get('http://localhost:4000/api/movies/' + id)
        .then((response) => {
            // Log the response data to the console
            console.log(response.data);
            // Update the movies state with the fetched data
            setMovies(response.data);
        })
        .catch((error) => {
            // Log any errors to the console
            console.log(error);
        });
    }

    return (
        <div>
            <h3>Hello from Read component</h3>
            {/* Form to input movie ID and submit to fetch data */}
            <form onSubmit={handleSubmit}>
                <label>Id:</label><br />
                {/* Input field for movie ID */}
                <input type="text" id="id" value={id} onChange={(event) => setId(event.target.value)}/><br />
                {/* Submit button to trigger handleSubmit */}
                <button type="submit">Search</button>
            </form>
        </div>
    );
};

export default Read;