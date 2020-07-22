import React, { Component } from 'react';
import "./snoconPageb1.css"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


class SnowConb1 extends Component {


        render() {
          return (
            <div className="landingb1" style ={ { backgroundImage: "url('../StudyPup_assets/Background_Galaxy.png')"} }>
                <Router>
                <div class='planetWrapper'>
                <img class="snoconPlanet" src="../StudyPup_assets/Sno-con_planet_forground.png" alt=""/>

                <a href="/sno1">
                <img class="blueLevel1" src="../StudyPup_assets/Snow-con_Level1_Complete.png"alt=""/>
                </a>



                <a href="/sno3">
                <img class="greenLevel2" src="../StudyPup_assets/Snow-con_Level2_On.png"alt=""/>
                </a>
                <img class="glitter2" src="../StudyPup_assets/Snow-con_Level2_On_Deco.gif" alt=""/>
                
  
    
                </div>
                
    
                  <div class="gamessno">
               
                </div>
                
    
                </Router>
            </div>
          );
        }
      }
  
  export default SnowConb1;