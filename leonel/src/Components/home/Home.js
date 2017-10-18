 import React, { Component } from 'react';
import Intro from './Intro';
import About from './About';
 class Home extends Component {
  render() {
    return (
      <div className="home">
            <Intro />
            <About />

      </div>
    );
  }
}

 export default Home;