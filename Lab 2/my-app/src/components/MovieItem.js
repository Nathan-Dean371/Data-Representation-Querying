import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const MovieItem = (props) =>
{
    return(
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.myMovie.Poster} />
            <Card.Body>
                <Card.Title>{props.myMovie.Title}</Card.Title>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    );
}
export default MovieItem