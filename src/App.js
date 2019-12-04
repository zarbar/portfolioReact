import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './frontend/Navbar/Navbar';
import Landing from './frontend/Landing/Landing';
import About from './frontend/About/About';
import Parallex from './frontend/Parallex/Parallex';
import Portfolio from './frontend/Portfolio/Portfolio';
import ContactForm from './frontend/ContactForm/ContactForm';
import Footer from './frontend/Footer/Footer';

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
      <Footer />
    </div>
  );
}

export default App;
