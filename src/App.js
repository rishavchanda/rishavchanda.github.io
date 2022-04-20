import Navbar from "./components/Navbar";
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import HeroSection from "./components/HeroSection";

function App() {
  return (
    <Router >
      <Navbar/>
      <HeroSection/>
    </Router>
  );
}

export default App;
