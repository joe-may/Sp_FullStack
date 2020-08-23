import React, { Component } from 'react';
import "./snoconPageb3.css"
import $ from "jquery";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


class SnowConb3 extends Component {
  componentDidMount() {
    $('audio#snoconSong')[0].play();
  }

        render() {
          return (
            <div className="landingb3" style ={ { backgroundImage: "url('../StudyPup_assets/Background_Galaxy.png')"} }>
            <audio id="snoconSong">
                <source src='../StudyPup_assets/Song_Snow-Con_Planet.m4a' type="audio/mpeg"/>
            </audio>
                <Router>
                <div class='planetWrapper'>
                <img class="snoconPlanet" src="../StudyPup_assets/Sno-con_planet_forground.png" alt=""/>

                <a href="/sno1">
                <img class="blueLevel1" src="../StudyPup_assets/Snow-con_Level1_Complete.png"alt=""/>
                </a>



                <a href="/sno3">
                <img class="blueLevel2" src="../StudyPup_assets/Snow-con_Level2_Complete.png"alt=""/>
                </a>
  
                <a href="/sno2">
                <img class="blueLevel3" src="../StudyPup_assets/Snow-con_Level3_Complete.png"alt=""/>
                </a>
                <img class="wind" src="../StudyPup_assets/Snow-con_Level4_Deco.gif" alt=""/>

                <a href="/bbsno1">
                <img class="bossLevel1" src="../StudyPup_assets/Snow-con_Level4_On.png"alt=""/>
                </a>
                 
    
                </div>
                
    
                  <div class="gamessno">
               
                </div>
                
    
                </Router>
            </div>
          );
        }
      }
  
  export default SnowConb3;