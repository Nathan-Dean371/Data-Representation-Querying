// Importing necessary components from react-bootstrap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

// Functional component for the navigation bar
const NavigationBar = () => {
  return (
    // Navbar component with dark background and theme
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        {/* Navbar brand that links to the home page */}
        <Navbar.Brand href="/">Navbar</Navbar.Brand>
        {/* Navigation links */}
        <Nav className="me-auto">
          {/* Link to the home page */}
          <Nav.Link href="/home">Home</Nav.Link>
          {/* Link to the create page */}
          <Nav.Link href="/create">Create</Nav.Link>
          {/* Link to the read page */}
          <Nav.Link href="/read">Read</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

// Exporting the NavigationBar component as the default export
export default NavigationBar;