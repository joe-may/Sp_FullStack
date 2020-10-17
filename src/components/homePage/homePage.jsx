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
        <div class="homePage" style ={ { backgroundImage: "url('../StudyPup_assets/BG_Purple_Pattern_niew.png')"} }>
            <Router>

         <body>
         <Navbar/>
         <a href="/sno1m">
                <img src='../StudyPup_assets/Story_Games2x.png' alt=""  class='storyGames'/>
                </a>
                <a href="/sno1m">
                <img src='../StudyPup_assets/Arcade_Gamesv2.png' alt=""  class='arcadeGames'/>
                </a>
                <p class="edutain">Edu-taining math games and videos for kids K-4th Grade!</p>
                  </body>
                 
                <FooterSpot></FooterSpot>
        
                
           

            </Router>
            <link href="https://fonts.googleapis.com/css?family=Titan+One&display=swap" rel="stylesheet"></link>
        </div>
        
      );
    }
  }
  
  export default HomePage;