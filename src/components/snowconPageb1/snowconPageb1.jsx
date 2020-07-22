import React, { Component } from 'react';
import "./snoconPageb1.css"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


class SnowConb1 extends Component {

    render() {
      return (
        <div className="landing">
            <Router>
            <img src='../StudyPup_assets/Snow-con.png' alt="" class='bg'/>
              <h1 class="welcome">Welcome to Sno-Con!</h1>
              <div class="gamessno">
            <p><a class="sg1" href="/sno1">gameOnehkefwf</a></p>
            <p><a class="sg2" href="/sno2">gameTwo</a></p>
            <p><a class="sg3"href="/sno3">gameThree</a></p>
            </div>
            

            </Router>
        </div>
      );
    }
  }
  
  export default SnowConb1;