import React from 'react';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Resume from './components/resume/Resume';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header/>
      <About/>
      <Resume/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
