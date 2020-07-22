import React, { Component } from 'react';
import "./snoconPage.css"
import { BrowserRouter as Router, Route, Link,} from 'react-router-dom';


class SnowCon extends Component {

    render() {
      return (
        <div className="landing" style ={ { backgroundImage: "url('../StudyPup_assets/Background_Galaxy.png')"} }>
            <Router>
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