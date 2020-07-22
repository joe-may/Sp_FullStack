import React, { Component } from 'react';
import "./snoconPageb2.css"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


class SnowConb2 extends Component {


        render() {
          return (
            <div className="landingb2" style ={ { backgroundImage: "url('../StudyPup_assets/Background_Galaxy.png')"} }>
                <Router>
                <div class='planetWrapper'>
                <img class="snoconPlanet" src="../StudyPup_assets/Sno-con_planet_forground.png" alt=""/>

                <a href="/sno1">
                <img class="blueLevel1" src="../StudyPup_assets/Snow-con_Level1_Complete.png"alt=""/>
                </a>



                <a href="/sno2">
                <img class="blueLevel2" src="../StudyPup_assets/Snow-con_Level2_Complete.png"alt=""/>
                </a>
  
                <a href="/sno2">
                <img class="greenLevel3" src="../StudyPup_assets/Snow-con_Level3_On.png"alt=""/>
                </a>
                <img class="storm" src="../StudyPup_assets/Snow-con_Level3_On_Deco.gif" alt=""/>
                
    
                </div>
                
    
                  <div class="gamessno">
               
                </div>
                
    
                </Router>
            </div>
          );
        }
      }
  
  export default SnowConb2;