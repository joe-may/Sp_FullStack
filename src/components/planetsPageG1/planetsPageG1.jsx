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
                {/* <p className="select">SELECT AN OPERATION</p> */}
               

                  {/* <div class="menu">
                  <a class="game1g1" href="/link">+</a>
                  <a href="/minus_nmb">-</a>
                  <a href="/multiplication_nmb">x</a>
                  <a href="division_nmb">%</a>
                  </div> */}


                </section>
                <section>
                  <div class="planetContainer">
                <img src='../StudyPup_assets/StudyPup_MysticBadges_PLANET_MAP.png' alt=""  class='planets'/>
                <img src='../StudyPup_assets/blueButtons.png' alt=""  class='blueButtons'/>
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