import React, { Component } from 'react';
import "./homePage.css"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';




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
                <p><a class="welcome" href='/snocon'>START</a></p>
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
  
  export default HomePage;