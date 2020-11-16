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
      <div class="arcadePages" style ={ { backgroundImage: "url('https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/BG_Purple_Pattern_niew.png')"} }>
          <Router>

          
              <body>
              <div class="mobileLayer">
                <p class="mobileInfo">For the best gaming experience, please visit this site on a laptop or tablet</p>
                </div>
          <Navbar/>
          <a href="/arcade-play">
                <img src='https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/ARCADE_HEADER_IMAGE.png' alt=""  class='arcadeBanner'/>
                </a>
                
              <div class="opCon">
              <div class="chg">SELECT OPERATION</div>
                  <a class="opa" href="/arcade-play">+</a>
                  <a class="ops"href="/arcade-plays">-</a>
                  <a class="opm" href="/arcade-playm">x</a>
                  <a class="opd" href="/arcade-playd">÷</a>
                </div>
                <a href="/arcade-ducks">
                <img src='https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/thumbnail_duck_race.png' alt=""  class='duckThumb'/>
                </a>
                <a href="/arcade-slams">
                <img src='https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/thumbnail_SJS.png' alt=""  class='sjsThumb'/>
                </a>
                <a href="/arcade-fireworkss">
                <img src='https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/thumbnail_firework.png' alt=""  class='fwThumb'/>
                </a>
               
              </body> 
              <FooterSpot></FooterSpot>
             

              

                



          </Router>
          <link href="https://fonts.googleapis.com/css?family=Titan+One&display=swap" rel="stylesheet"></link>
          <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@800&display=swap" rel="stylesheet"></link>
          <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@800&display=swap" rel="stylesheet"></link>
            <link rel="stylesheet" href="https://use.typekit.net/wug4dcf.css"></link>
      </div>
    );
  }
}
  
  export default ArcadePages;