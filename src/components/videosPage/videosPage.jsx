import React, { Component } from 'react';
import "./videosPage.css"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Navbar from '../Nav/Navbar';

import FooterSpot from '../footer/footer';




class VideosPage extends Component {
  componentDidMount() {
    
  }

    render() {
      return (
        <div class="videosPage" style ={ { backgroundImage: "url('https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/BG_Purple_Pattern_niew.png')"} }>
          <Router>

          
<body>
<Navbar/>

<a href="/arcade-play">
  <img src='https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/Video_Header_Image.png' alt=""  class='arcadeBanner'/>
  </a>
  
  <div class="opCon">
             
                 <a  href="/arcade-play">
                    <img src='https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/Video_Button_Math.png' alt="" class="mathButton" />
                 </a>
                 <a  href="/arcade-play">
                    <img src='https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/Video_Button_English.png' alt="" class="englishButton" />
                 </a>
                 <a  href="/arcade-play">
                    <img src='https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/Video_Button_Science.png' alt="" class="scienceButton" />
                 </a>
  </div>
  <div class="vidCon">
      <img src='https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/thumbnail_doubles.png' alt="" class="doublesThumb" />
      <img src='https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/thumbnail_commutative.png' alt="" class="comThumb" />
      <img src='https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/thumbnail_fives.png' alt="" class="fivesThumb" />
  </div>
    

  
 

  {/* <a href="/arcade-ducka">
  <img src='https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/thumbnail_duck_race.png' alt=""  class='duckThumb'/>
  </a>
  <a href="/arcade-slama">
  <img src='https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/thumbnail_SJS.png' alt=""  class='sjsThumb'/>
  </a>
  <a href="/arcade-fireworksa">
  <img src='https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/thumbnail_firework.png' alt=""  class='fwThumb'/>
  </a> */}
 
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
  
  export default VideosPage;