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
          <h2 class="fam">About StudyPup</h2>
              <p className="select">Study Pup is an edu-tainment company designed for children 1st-4rd grade to learn common core standard and have a blast doing so. 
              We provide Videos, Aracde games, and most of all, our Story Game "StudyPup and the Quest for the Mystic Badges!" This game takes children on a journey through the galaxy as our protagantist Nova earns pins to save the galaxy. 
              Each level increases difficultly allowing the child to progress in the subject all the while progessing in the story.  </p>

          
              <img class="familyPic" src='https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/IMG_1348.jpeg' alt="" />
              <h2 class="fam">The Story</h2>
              <p className="select">Karen May founded StudyPup when she was a 1st grade teacher in the San Fransico Bay Area. 
              She found her self trying to find extra resorces for her students beyond what her class room could offer. 
              After weeks of struggling to find content that was entertaining, ingaging, funny, and followed the common core standards she came up with an idea to create StudyPup.
              Her Sons, Joe and Josh having the same passion for the vision, both went to school to become programmers to make studyPup a reality. With the prospective of an educator, 
              the technial know-how of her sons, and the story telling ability of the talented Aubrey Huntsman, and the adorble face of their dog Obie StudyPup was Born.

             </p>
 
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
          <link href="https://fonts.googleapis.com/css?family=Titan+One&display=swap" rel="stylesheet"></link>
            <link rel="stylesheet" href="https://use.typekit.net/wug4dcf.css"></link>
            <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@800&display=swap" rel="stylesheet"></link>
            <link rel="stylesheet" href="https://use.typekit.net/wug4dcf.css"></link>
      </div>
    );
  }
}
  
  export default AboutUs;