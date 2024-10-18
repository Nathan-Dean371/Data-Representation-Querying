import Button from 'react-bootstrap/Button'; // Import the Button component from react-bootstrap
import Card from 'react-bootstrap/Card'; // Import the Card component from react-bootstrap

// Define the MovieItem component
const MovieItem = (props) =>
{
    // Return the JSX to render the component
    return(
        // Render a Card component with a fixed width
        <Card style={{ width: '18rem' }}>
            {/* Render the movie poster image */}
            <Card.Img variant="top" src={props.myMovie.Poster} />
            <Card.Body>
                {/* Render the movie title */}
                <Card.Title>{props.myMovie.Title}</Card.Title>
                {/* Render a Button component */}
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    );
}

// Export the MovieItem component as the default export
export default MovieItem