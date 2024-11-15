import axios from 'axios'; // Import axios for making HTTP requests
import { useEffect, useState } from 'react'; // Import useEffect and useState hooks from React

// Define the Create component
const Create = () =>
{
    
    // Declare state variables for title, movieYear, and moviePoster
    const [title, setTitle] = useState('');
    const [movieYear, setYear] = useState('');
    const [moviePoster, setPoster] = useState('');

    // Define the handleSubmit function
    const handleSubmit = (event) =>
    {
        // Prevent the default form submission behavior
        event.preventDefault();

        // Make a POST request to the express server
        // Ensure data is sent in the correct format
        axios.post('http://localhost:4000/api/movies', 
            { title, year: movieYear, poster: moviePoster }, 
            { headers: { 'Content-Type': 'application/json' } }
        ).then(response =>
            {
                // Log the response to the console
                console.log(response);

                // Reset the form
                setTitle('');
                setYear('');
                setPoster('');
            })
            .catch(error =>
            {
                // Log any errors to the console
                console.error(error);
            });
    }

    // Return the Create component
    return (
        <div>
            <h1>Create Movie</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Title:
                    <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} />
                </label>
                <br />
                <label>
                    Year:
                    <input type="text" value={movieYear} onChange={(event) => setYear(event.target.value)} />
                </label>
                <br />
                <label>
                    Poster:
                    <input type="text" value={moviePoster} onChange={(event) => setPoster(event.target.value)} />
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );

    
}

// Export the Create component as the default export
export default Create;