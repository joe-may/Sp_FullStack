import React, { Component } from 'react';
import "./landingpage.css"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';




class LandingPage extends Component {

    render() {
      return (
        <div class="landing" style ={ { backgroundImage: "url('../StudyPup_assets/galaxy.jpeg')"} }>
            <Router>
            <section>
                

            </section>
                <section>
                <p><a class="start" href='/snocon'>START</a></p>
                </section>
                <section>
               
                </section>
                <section>
                
                </section>
                

            </Router>
            <link href="https://fonts.googleapis.com/css?family=Titan+One&display=swap" rel="stylesheet"></link>
        </div>
      );
    }
  }
  
  export default LandingPage;