import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import NavigationBar from './components/NavigationBar';

function App() {
  return (

    <div>
      <Router>
        <NavigationBar/>
        <Routes>
          <Route path="/home" element={<Content />} />
          <Route path="/read" element={<Footer/>} />
          
          <Route path="/create" element={<Header/>} />

        </Routes>
      </Router>      
    </div>
  );
}

export default App;
