import React, { Component } from 'react';
import "./homePage.css"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Navbar from '../Nav/Navbar';




class HomePage extends Component {
  componentDidMount() {
    
  }

    render() {
      return (
        <div class="homePage" style ={ { backgroundImage: "url('../StudyPup_assets/Puptune_Boss_Background.png')"} }>
            <Router>

            <section>
                

            </section>
                <section>
                <p className="select">SELCET A GRADE LEVEL</p>
               

                  <div class="menu">
                    
                  <a class="g1" href="/link">1st</a>
                  <a href="#">2nd</a>
                  <a href="#">3rd</a>
                  <a href="#">4th</a>
                  </div>

                </section>
                <section>
               
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
  
  export default HomePage;