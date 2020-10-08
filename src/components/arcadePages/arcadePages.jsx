import React, { Component } from 'react';
import "./arcadePages.css"

import Navbar from '../Nav/Navbar';
import FooterSpot from '../footer/footer';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';




class ArcadePages extends Component {
  componentDidMount() {
    
  }

  render() {
    return (
      <div class="arcadePages" style ={ { backgroundImage: "url('../StudyPup_assets/Puptune_Boss_Background.png')"} }>
          <Router>

          
              <body>
          <Navbar/>

              <p className="select">Arcade Games Go Here</p>
              <div class="opCon">
                <div class="chg">CHANGE OPERATION</div>
                  <a class="opa" href="/arcade-play">+</a>
                  <a class="ops"href="/arcade-plays">-</a>
                  <a class="opm" href="/arcade-playm">x</a>
                  <a class="opd" href="/arcade-playd">÷</a>
                </div>
              </body>
              <FooterSpot></FooterSpot>
             

              

                



          </Router>
          <link href="https://fonts.googleapis.com/css?family=Titan+One&display=swap" rel="stylesheet"></link>
          <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@800&display=swap" rel="stylesheet"></link>
      </div>
    );
  }
}
  
  export default ArcadePages;