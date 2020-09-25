import React, { Component } from 'react';
import "./aboutUs.css"
// import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Navbars from "../navBar/navBar"



class AboutUs extends Component {
  componentDidMount() {
    
  }

  render() {
    return (
      <div class="aboutUs" style ={ { backgroundImage: "url('../StudyPup_assets/Puptune_Boss_Background.png')"} }>
          <Router>

          <section>
              

          </section>
              <section>
              <p className="select">Article About Us Goes Here</p>
             

              

                


              </section>
              <section>
             
              </section>
              <section>
              
              </section>
              <Navbars/>

          </Router>
          <link href="https://fonts.googleapis.com/css?family=Titan+One&display=swap" rel="stylesheet"></link>
      </div>
    );
  }
}
  
  export default AboutUs;