
// Importing necessary components from react-router-dom for routing
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// Importing the main CSS file for the app
import './App.css';
// Importing custom components
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import NavigationBar from './components/NavigationBar';
import Read from './components/Read';
import Create from './components/Create';

// Main App component
function App() {
  return (
    <div>
      {/* Setting up the Router for navigation */}
      <Router>
        {/* Including the NavigationBar component */}
        <NavigationBar />
        {/* Defining the routes for the application */}
        <Routes>
          {/* Route for the home page, rendering the Content component */}
          <Route path="/home" element={<Content />} />
          {/* Route for the read page, rendering the Footer component */}
          <Route path="/read" element={<Read/>} />
          {/* Route for the create page, rendering the Header component */}
          <Route path="/create" element={<Create />} />
        </Routes>
      </Router>
    </div>
  );
}

// Exporting the App component as the default export
export default App;