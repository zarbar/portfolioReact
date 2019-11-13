import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './Navbar/Navbar';
import Landing from './Landing/Landing';
import About from './About/About';
import Parallex from './Parallex/Parallex';
import Portfolio from './Portfolio/Portfolio';
import ContactForm from './ContactForm/ContactForm';

function App() {
  document.title = "Zara's Portfolio";
  return (
    <div className="App">
      <Nav />
      <Landing />
      <About />
      <Parallex img={'parallex1'} />
      <Portfolio />
      <Parallex img={'parallex2'} />
      <ContactForm />

    </div>
  );
}

export default App;
