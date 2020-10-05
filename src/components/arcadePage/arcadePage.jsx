import React, { Component } from 'react';
import "./arcadePage.css"

import Navbar from '../Nav/Navbar';
import FooterSpot from '../footer/footer';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';




class ArcadePage extends Component {
  componentDidMount() {
    
  }

  render() {
    return (
      <div class="arcadePage" style ={ { backgroundImage: "url('../StudyPup_assets/Puptune_Boss_Background.png')"} }>
          <Router>

          
              <body>
          <Navbar/>

              <p className="select">Arcade Games Go Here</p>
              </body>
              <FooterSpot></FooterSpot>
             

              

                



          </Router>
          <link href="https://fonts.googleapis.com/css?family=Titan+One&display=swap" rel="stylesheet"></link>
      </div>
    );
  }
}
  
  export default ArcadePage;