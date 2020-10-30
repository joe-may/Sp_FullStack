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
      <div class="aboutUs" style ={ { backgroundImage: "url('https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/BG_Purple_Pattern_niew.png')"} }>
          <Router>

          
              <body>
          <Navbar/>
          <img class="collage" src='https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/BeFunky-collage1.png' alt="" />
              <p className="select">Study Pup is an edu-tainment company designed for children 1st-4rd grade to learn common core standard and have a blast doing so. 
              We provide Videos, Aracde games, and most of all, our Story Game "StudyPup and the Quest for the Mystic Badges!" This game takes children on a journey through the galaxy as our protagantist Nova earns pins to save the galaxy. 
              Each level increases difficultly allowing the child to progress in the subject all the while progessing in the story.  </p>

              <h2 class="fam">The Family</h2>
              <img class="familyPic" src='https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/IMG_1348.jpeg' alt="" />
 
{/*      
               <div class="vidCon">
                
              <img src='https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/thumbnail_doubles.png' alt="" class="momThumb" /> */}
              {/* <p>Karen May - Creator/Educator</p> */}
              {/* <img src='https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/thumbnail_doubles.png' alt="" class="doublesThumb" /> */}
              {/* <p>Aubrey Huntsman - designer/ script writer</p> */}
              {/* <img src='https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/62331695878__7E12C487-37E7-42D2-A4DD-0109CCD21C8E.jpeg' alt="" class="comThumb" /> */}
              {/* <p>Joe May - Software Engineer/ Product Manager/ Karen's Son</p> */}
              {/* <img src='https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/IMG_5427.jpeg' alt="" class="fivesThumb" />
              </div>  */}


              </body>
              <FooterSpot></FooterSpot>
             

              

                



          </Router>
          <link href="https://fonts.googleapis.com/css?family=Titan+One&display=swap" rel="stylesheet"></link>
      </div>
    );
  }
}
  
  export default AboutUs;