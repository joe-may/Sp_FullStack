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
                

            </section>
                <section>
                <p className="select">SELECT AN OPERATION</p>
                {/* <div className="gradLevels">
                <p><a  href='/snocon'>1</a></p>
                <p><a href='/snocon'>2</a></p>
                </div> */}
                <img class="snoPlanetG1" src="../StudyPup_assets/Sno-con_planet_forground.png" alt=""/>
                <img class="hotsvaPlanetG1" src="../StudyPup_assets/Sno-con_planet_forground.png" alt=""/>
                <img class="tumblewildPlanetG1" src="../StudyPup_assets/Sno-con_planet_forground.png" alt=""/> 
                <img class="cosmoG1" src="../StudyPup_assets/Sno-con_planet_forground.png" alt=""/>
                <img class="puptuneG1" src="../StudyPup_assets/Sno-con_planet_forground.png" alt=""/>  
                <img class="locktrans1" src="../StudyPup_assets/locktrans.png" alt=""/>  
                <img class="locktrans2" src="../StudyPup_assets/locktrans.png" alt=""/> 
                <img class="locktrans3" src="../StudyPup_assets/locktrans.png" alt=""/>   
                <img class="locktrans4" src="../StudyPup_assets/locktrans.png" alt=""/>  

                  <div class="menu">
                    
                  <a class="game1g1" href="/link">+</a>
                  <a href="/minus_nmb">-</a>
                  <a href="/multiplication_nmb">x</a>
                  <a href="division_nmb">%</a>
                  </div>

                </section>
                <section>
               <a class='linkL1G1'href='/sno1'>Lvl1</a>
               <img class="locktrans5" src="../StudyPup_assets/locktrans.png" alt=""/>  
               <img class="locktrans6" src="../StudyPup_assets/locktrans.png" alt=""/>  
               <img class="locktrans7" src="../StudyPup_assets/locktrans.png" alt=""/>  
                </section>
                <section>
                
                </section>
                <Navbar/>

            </Router>
            <link href="https://fonts.googleapis.com/css?family=Titan+One&display=swap" rel="stylesheet"></link>
        </div>
      );
    }
  }
  
  export default PlanetsPageG1;