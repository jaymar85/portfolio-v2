import React, {Component} from 'react';
import Footer from './components/footer/Footer';
import Hero from './components/hero/Hero';
import Resume from './components/resume/Resume';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Navbar from './components/navbar/Navbar';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  componentWillMount() {
    window.addEventListener('scroll', this.navHighlighter);
  }

  navHighlighter() {}

  render() {
    let scrollY = window.pageYOffset;
    
    return (
      <div className="App">
        <Navbar />
        <Hero/>
        <About/>
        <Resume/>
        <Contact/>
        <Footer/>
      </div>
    );
  }
}

export default App;
