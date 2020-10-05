import React, { Component } from 'react';
import "./aboutUs.css"

import Navbar from '../Nav/Navbar';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';




class AboutUs extends Component {
  componentDidMount() {
    
  }

  render() {
    return (
      <div class="aboutUs" style ={ { backgroundImage: "url('../StudyPup_assets/Puptune_Boss_Background.png')"} }>
          <Router>

          <section>
              
          <Navbar/>
          
          </section>
              <section>
                
              <p className="select">Article About Us Goes Here</p>
             

              

                


              </section>
              <section>
             
              </section>
              <section>
              
              </section>
              

          </Router>
          <link href="https://fonts.googleapis.com/css?family=Titan+One&display=swap" rel="stylesheet"></link>
      </div>
    );
  }
}
  
  export default AboutUs;