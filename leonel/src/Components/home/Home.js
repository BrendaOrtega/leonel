 import React, { Component } from 'react';
import Intro from './Intro';
import About from './About';
import Destacados from './Destacados';
import Comentarios from './Comentarios';
import Footer from '../footer/Footer';

class Home extends Component {
  render() {
    return (
      <div className="home">
            <Intro />
            <About />
            <Destacados />
            <Comentarios />
            <Footer />
      </div>
    );
  }
}

 export default Home;