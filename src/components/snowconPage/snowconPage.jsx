import React, { Component } from 'react';
import "./snoconPage.css"
import { BrowserRouter as Router, Route, Link,} from 'react-router-dom';


class SnowCon extends Component {

    render() {
      return (
        <div className="landing" style ={ { backgroundImage: "url('../StudyPup_assets/Background_Galaxy.png')"} }>
            <Router>
            <img class="snoconPlanet" src="../StudyPup_assets/Sno-con_planet_forground.png"alt=""/>
              <h1 class="welcome">Welcome to Sno-Con!</h1>
              <div class="gamessno">
            <p><a class="sg1" href="/sno1">gameOne</a></p>
            <p><a class="sg2" href="/sno2">gameTwo</a></p>
            <p><a class="sg3"href="/sno3">gameThree</a></p>
            </div>
            

            </Router>
        </div>
      );
    }
  }
  
  export default SnowCon;