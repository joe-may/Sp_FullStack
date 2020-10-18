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
        <div class="homePage" style ={ { backgroundImage: "url('../StudyPup_assets/Planet_Galaxy_Background.png')"} }>
            <Router>

         <body>
         <Navbar/>
         <a href="/mysticbadge-play">
                <img src='../StudyPup_assets/play_story_button.png' alt=""  class='storyGames'/>
                </a>
                <a href="/arcade-play">
                <img src='../StudyPup_assets/play_arcade_button.png' alt=""  class='arcadeGames'/>
                </a>
                <p class="edutain">Edu-taining math games and videos for kids K-4th Grade!</p>
                  </body>
                 
                <FooterSpot></FooterSpot>
        
                
           

            </Router>
            <link href="https://fonts.googleapis.com/css?family=Titan+One&display=swap" rel="stylesheet"></link>
            <link rel="stylesheet" href="https://use.typekit.net/wug4dcf.css"></link>
        </div>
        
      );
    }
  }
  
  export default HomePage;