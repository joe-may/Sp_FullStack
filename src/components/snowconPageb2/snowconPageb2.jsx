import React, { Component } from 'react';
import "./snoconPageb2.css"
import $ from "jquery";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


class SnowConb2 extends Component {
  componentDidMount() {
    $('audio#snoconSong')[0].play();
  }

        render() {
          return (
            
            <div className="landingb2" style ={ { backgroundImage: "url('https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/Background_Galaxy.png')"} }>
              <audio id="snoconSong">
                 <source src='https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/Song_Snow-Con_Planet.m4a' type="audio/mpeg"/>
            </audio>
                <Router>
                <div class='planetWrapper'>
                <img class="snoconPlanet" src="https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/Sno-con_planet_forground.png" alt=""/>

                <a href="/sno1">
                <img class="blueLevel1" src="https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/Snow-con_Level1_Complete.png"alt=""/>
                </a>



                <a href="/sno3">
                <img class="blueLevel2" src="https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/Snow-con_Level2_Complete.png"alt=""/>
                </a>
  
                <a href="/sno2">
                <img class="greenLevel3" src="https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/Snow-con_Level3_On.png"alt=""/>
                </a>
                <img class="storm" src="https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/Snow-con_Level3_On_Deco.gif" alt=""/>
                
    
                </div>
                
    
                  <div class="gamessno">
               
                </div>
                
    
                </Router>
            </div>
          );
        }
      }
  
  export default SnowConb2;