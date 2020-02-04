import React from 'react';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Resume from './components/resume/Resume';
import About from './components/about/About';
import Contact from './components/contact/Contact';



function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Resume/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
