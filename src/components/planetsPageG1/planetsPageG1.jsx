import React, { Component } from 'react';
import "./planetsPageG1.css"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Navbar from '../Nav/Navbar';




class PlanetsPageG1 extends Component {
  componentDidMount() {
    
  }

    render() {
      return (
        <div class="planetsPageG1" style ={ { backgroundImage: "url('../StudyPup_assets/Background_Galaxy.png')"} }>
            <Router>

            <section>
            <Navbar/>

            </section>
                <section>
  
      

                </section>
                <section>
                  <div class="planetContainer">
          
                <img src='../StudyPup_assets/StudyPup_MysticBadges_PLANET_MAP.png' alt=""  class='planets'/>
                {/* <div class="top-left">Top Left</div> */}
                <a href="/sno1">
                <img src='../StudyPup_assets/blueButton1.png' alt=""  class='blueButton1'/>
                </a>
                <a href="/sno1">
                <img src='../StudyPup_assets/blueButton2.png' alt=""  class='blueButton2'/>
                </a>
                <a href="/sno1">
                <img src='../StudyPup_assets/blueButton3.png' alt=""  class='blueButton3'/>
                </a>
                <a href="/sno1">
                <img src='../StudyPup_assets/blueButton4.png' alt=""  class='blueButton4'/>
                </a>
                 <a href="/sno1">
                <img src='../StudyPup_assets/redButton5.png' alt=""  class='redButton5'/>
                </a>
                <a href="/sno1">
                <img src='../StudyPup_assets/redButton6.png' alt=""  class='redButton6'/>
                </a>
                <a href="/sno1">
                <img src='../StudyPup_assets/redButton7.png' alt=""  class='redButton7'/>
                </a>
                <a href="/sno1">
                <img src='../StudyPup_assets/redButton8.png' alt=""  class='redButton8'/>
                </a>
                <a href="/sno1">
                <img src='../StudyPup_assets/Studypup_MysticBadges_Number_9.png' alt=""  class='yellowButton9'/>
                </a>
                <a href="/sno1">
                <img src='../StudyPup_assets/Studypup_MysticBadges_Number_10.png' alt=""  class='yellowButton10'/>
                </a>
                <a href="/sno1">
                <img src='../StudyPup_assets/Studypup_MysticBadges_Number_11.png' alt=""  class='yellowButton11'/>
                </a>
                <a href="/sno1">
                <img src='../StudyPup_assets/Studypup_MysticBadges_Number_12.png' alt=""  class='yellowButton12'/>
                </a>
                <a href="/sno1">
                <img src='../StudyPup_assets/Studypup_MysticBadges_Number_13.png' alt=""  class='purpButton13'/>
                </a>
                <a href="/sno1">
                <img src='../StudyPup_assets/Studypup_MysticBadges_Number_14.png' alt=""  class='purpButton14'/>
                </a>
                <a href="/sno1">
                <img src='../StudyPup_assets/Studypup_MysticBadges_Number_15.png' alt=""  class='purpButton15'/>
                </a>
                <a href="/sno1">
                <img src='../StudyPup_assets/Studypup_MysticBadges_Number_16.png' alt=""  class='purpButton16'/>
                </a>
                <a href="/sno1">
                <img src='../StudyPup_assets/Studypup_MysticBadges_Number_17.png' alt=""  class='greenButton17'/>
                </a>
                <a href="/sno1">
                <img src='../StudyPup_assets/Studypup_MysticBadges_Number_18.png' alt=""  class='greenButton18'/>
                </a>
                <a href="/sno1">
                <img src='../StudyPup_assets/Studypup_MysticBadges_Number_19.png' alt=""  class='greenButton19'/>
                </a>
                <a href="/sno1">
                <img src='../StudyPup_assets/Studypup_MysticBadges_Number_20.png' alt=""  class='greenButton20'/>
                </a>
           
                </div>
                
                
               <a class='linkL1G1'href='/sno1'>Lvl1</a>

                
                </section>
                <section>
                
                </section>
               

            </Router>
            <link href="https://fonts.googleapis.com/css?family=Titan+One&display=swap" rel="stylesheet"></link>
        </div>
        
      );
    }
  }
  
  export default PlanetsPageG1;