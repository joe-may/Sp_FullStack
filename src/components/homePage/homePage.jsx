import React, { Component } from 'react';
import "./homePage.css"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Navbar from '../Nav/Navbar';
import FooterSpot from '../footer/footer';




class HomePage extends Component {
  componentDidMount() {
    
  }

    render() {
      return (
        <div class="homePage" style ={ { backgroundImage: "url('../StudyPup_assets/Puptune_Boss_Background.png')"} }>
            <Router>

         <body>
         <Navbar/>
                <p className="select">SELCET A GRADE LEVEL</p>
               
                  </body>
                 
                <FooterSpot></FooterSpot>
        
                
           

            </Router>
            <link href="https://fonts.googleapis.com/css?family=Titan+One&display=swap" rel="stylesheet"></link>
        </div>
        
      );
    }
  }
  
  export default HomePage;