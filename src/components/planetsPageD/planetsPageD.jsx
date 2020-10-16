import React, { Component } from 'react';
import "./planetsPageD.css"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Navbar from '../Nav/Navbar';
import FooterSpot from '../footer/footer';




class PlanetsPageD extends Component {
  componentDidMount() {
    
  }

    render() {
      return (
        <div class="planetsPageD" style ={ { backgroundImage: "url('../StudyPup_assets/Background_Galaxy.png')"} }>
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
                <div class="buttons">
                <a href="/sno1d">
                <img src='../StudyPup_assets/blueButton1.png' alt=""  class='blueButton1'/>
                </a>
                <a href="/sno2d">
                <img src='../StudyPup_assets/blueButton2.png' alt=""  class='blueButton2'/>
                </a>
                <a href="/sno3d">
                <img src='../StudyPup_assets/blueButton3.png' alt=""  class='blueButton3'/>
                </a>
                <a href="/bbsno1d">
                <img src='../StudyPup_assets/blueButton4.png' alt=""  class='blueButton4'/>
                </a>
                 <a href="/hot1d">
                <img src='../StudyPup_assets/redButton5.png' alt=""  class='redButton5'/>
                </a>
                <a href="/hot2d">
                <img src='../StudyPup_assets/redButton6.png' alt=""  class='redButton6'/>
                </a>
                <a href="/hot3d">
                <img src='../StudyPup_assets/redButton7.png' alt=""  class='redButton7'/>
                </a>
                <a href="/hot4d">
                <img src='../StudyPup_assets/redButton8.png' alt=""  class='redButton8'/>
                </a>
                <a href="/wild1d">
                <img src='../StudyPup_assets/Studypup_MysticBadges_Number_9.png' alt=""  class='yellowButton9'/>
                </a>
                <a href="/wild2d">
                <img src='../StudyPup_assets/Studypup_MysticBadges_Number_10.png' alt=""  class='yellowButton10'/>
                </a>
                <a href="/wild3d">
                <img src='../StudyPup_assets/Studypup_MysticBadges_Number_11.png' alt=""  class='yellowButton11'/>
                </a>
                <a href="/wild4d">
                <img src='../StudyPup_assets/Studypup_MysticBadges_Number_12.png' alt=""  class='yellowButton12'/>
                </a>
                <a href="/coz1d">
                <img src='../StudyPup_assets/Studypup_MysticBadges_Number_13.png' alt=""  class='purpButton13'/>
                </a>
                <a href="/coz2d">
                <img src='../StudyPup_assets/Studypup_MysticBadges_Number_14.png' alt=""  class='purpButton14'/>
                </a>
                <a href="/coz3d">
                <img src='../StudyPup_assets/Studypup_MysticBadges_Number_15.png' alt=""  class='purpButton15'/>
                </a>
                <a href="/coz4d">
                <img src='../StudyPup_assets/Studypup_MysticBadges_Number_16.png' alt=""  class='purpButton16'/>
                </a>
                <a href="/pup1d">
                <img src='../StudyPup_assets/Studypup_MysticBadges_Number_17.png' alt=""  class='greenButton17'/>
                </a>
                <a href="/pup2d">
                <img src='../StudyPup_assets/Studypup_MysticBadges_Number_18.png' alt=""  class='greenButton18'/>
                </a>
                <a href="/pup3d">
                <img src='../StudyPup_assets/Studypup_MysticBadges_Number_19.png' alt=""  class='greenButton19'/>
                </a>
                <a href="/pup4d">
                <img src='../StudyPup_assets/Studypup_MysticBadges_Number_20.png' alt=""  class='greenButton20'/>
                </a>
                </div>
               
                <div class="opCon">
                <div class="chg">CHANGE OPERATION</div>
                  <a class="opa" href="/planetspagea">+</a>
                  <a class="ops"href="/planetspages">-</a>
                  <a class="opm" href="/planetspagem">x</a>
                  <a class="opd" href="/planetspaged">÷</a>
                </div>
                
            
                </div>
                
                
             

                
                </section>
                <section>
                <FooterSpot></FooterSpot>
                </section>
               

            </Router>
            <link href="https://fonts.googleapis.com/css?family=Titan+One&display=swap" rel="stylesheet"></link>
            <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@800&display=swap" rel="stylesheet"></link>
          
        </div>
        
      );
    }
  }
  
  export default PlanetsPageD;