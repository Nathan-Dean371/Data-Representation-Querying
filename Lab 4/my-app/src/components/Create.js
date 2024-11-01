import axios from 'axios'; // Import axios for making HTTP requests
import { useEffect, useState } from 'react'; // Import useEffect and useState hooks from React

// Define the Create component
const Create = () =>
{
    // Function to handle form submission
    const handleSubmit = (e) =>
    {
        e.preventDefault(); // Prevent the default form submission behavior
        // Log the new movie details to the console
        console.log("New title: " + title);
        console.log("New year: " + movieYear);
        console.log("New poster URL: " + moviePoster);
    }

    // Declare state variables for title, movieYear, and moviePoster
    const [title, setTitle] = useState('');
    const [movieYear, setYear] = useState('');
    const [moviePoster, setPoster] = useState('');

    // Return the JSX to render the component
    return (
        <div>
            <h3>Hello from create</h3>
            {/* Form to add a new movie */}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    {/* Input field for movie title */}
                    <label>Add movie title: </label>
                    <input 
                        type="text" 
                        className="form-control"
                        value={title}
                        onChange={(e) => { setTitle(e.target.value)}} 
                    />
                    {/* Input field for movie year */}
                    <label>Add movie year: </label>
                    <input 
                        type="text" 
                        className="form-control"
                        value={movieYear}
                        onChange={(e) => { setYear(e.target.value)}}
                    />
                    {/* Input field for movie poster URL */}
                    <label>Add movie poster URL</label>
                    <input 
                        type="text" 
                        className="form-control"
                        value={moviePoster}
                        onChange={(e) => { setPoster(e.target.value)}}
                    />
                </div>
                {/* Submit button */}
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

// Export the Create component as the default export
export default Create;