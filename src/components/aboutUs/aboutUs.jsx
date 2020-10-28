import React, { Component } from 'react';
import "./aboutUs.css"

import Navbar from '../Nav/Navbar';
import FooterSpot from '../footer/footer';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';




class AboutUs extends Component {
  componentDidMount() {
    
  }

  render() {
    return (
      <div class="aboutUs" style ={ { backgroundImage: "url('https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/Puptune_Boss_Background.png')"} }>
          <Router>

          
              <body>
          <Navbar/>

              <p className="select">Article About Us Goes Here</p>
              </body>
              <FooterSpot></FooterSpot>
             

              

                



          </Router>
          <link href="https://fonts.googleapis.com/css?family=Titan+One&display=swap" rel="stylesheet"></link>
      </div>
    );
  }
}
  
  export default AboutUs;