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
              <p className="select">Study Pup is an edutainment company designed to help 1st - 4rd graders learn common core standards, and have a blast doing so! We provide educational videos and arcade games, as well as our flagship Story Game "StudyPup and the Quest for the Mystic Badges!" This game takes children on a journey through the galaxy, playing math games to help our protagonist Nova save the universe. Each level increases difficultly, allowing the child to progress in math skills while progressing in the story.  </p>

          
              <img class="familyPic" src='https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/IMG_1348.jpeg' alt="" />
              <h2 class="fam">The Story</h2>
              <p className="select">Karen May founded StudyPup when she was teaching 1st grade in the San Francisco Bay Area. One day she found herself looking to find engaging resources for her students beyond what her classroom could offer. After weeks of struggling to find content that was entertaining, funny, and taught the common core standards, she envisioned StudyPup. Her sons, Joe and Josh, having the same passion for the vision, went to computer programming school to make studyPup a reality. With the perspective of an educator, the technical know-how of Joe and Josh, and the story-telling ability of the talented Aubrey Huntsman, (not to forget the adorable face of their real-life dog Obie!) StudyPup was born!

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