import React, { Component } from 'react';
import "./videosPage.css"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Navbars from "../navBar/navBar"




class VideosPage extends Component {
  componentDidMount() {
    
  }

    render() {
      return (
        <div class="videosPage" style ={ { backgroundImage: "url('../StudyPup_assets/Puptune_Boss_Background.png')"} }>
            <Router>

            <section>
                

            </section>
                <section>
                <p className="select">VIDEOS BY GRADE LEVEL</p>
                {/* <div className="gradLevels">
                <p><a  href='/snocon'>1</a></p>
                <p><a href='/snocon'>2</a></p>
                </div> */}

                  <div class="boxey"> Video</div>

                </section>
                <section>
               
                </section>
                <section>
                
                </section>
                <Navbars/>

            </Router>
            <link href="https://fonts.googleapis.com/css?family=Titan+One&display=swap" rel="stylesheet"></link>
        </div>
      );
    }
  }
  
  export default VideosPage;