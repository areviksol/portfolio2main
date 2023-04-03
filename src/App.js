import React from 'react';
import './App.css';
import Home from './components/pages/HomePage/Home';
import Skills from './components/pages/Skills/Skills';
import Projects from './components/pages/Projects/Projects';
import SayHi from './components/pages/SayHi/SayHi';
import { BrowserRouter as Router, Switch, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/pages/Footer.js/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/skills' element={<Skills/>} />
        <Route exact path='/projects' element={<Projects/>} />
        <Route exact path='/say-hi' element={<SayHi/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
