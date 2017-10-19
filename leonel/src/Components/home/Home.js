 import React, { Component } from 'react';
import Intro from './Intro';
import About from './About';
import Destacados from './Destacados';



class Home extends Component {
  render() {
    return (
      <div className="home">
            <Intro />
            <About />
            <Destacados />
      </div>
    );
  }
}

 export default Home;