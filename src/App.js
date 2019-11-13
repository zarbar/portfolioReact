import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './Navbar/Navbar';
import Landing from './Landing/Landing';
import About from './About/About';

function App() {
  document.title = "Zara's Portfolio";
  return (
    <div className="App">
      <Nav />
      <Landing />
      <About />
      <h1>All looks good</h1>

    </div>
  );
}

export default App;
