import React, { Component } from 'react';
import "./snoconPage.css"
import $ from "jquery";
import { BrowserRouter as Router, Route, Link,} from 'react-router-dom';


class SnowCon extends Component {
  componentDidMount() {
    $('audio#snoconSong')[0].play();
  }

    render() {
      return (
        <div className="landing" style ={ { backgroundImage: "url('../StudyPup_assets/Background_Galaxy.png')"} }>
            <Router>
            <audio id="snoconSong">
                 <source src='../StudyPup_assets/Song_Snow-Con_Planet.m4a' type="audio/mpeg"/>
            </audio>
            <div class='planetWrapper'>
            <img class="snoconPlanet" src="../StudyPup_assets/Sno-con_planet_forground.png" alt=""/>
            <a href="/sno1">
            <img class="greenLevel1" src="../StudyPup_assets/Snow-con_Level1_On.png"alt=""/>
            </a>
            <img class="glitter" src="../StudyPup_assets/Snow-con_Level2_On_Deco.gif" alt=""/>

            </div>
            

              <div class="gamessno">
           
            </div>
            

            </Router>
        </div>
      );
    }
  }
  
  export default SnowCon;