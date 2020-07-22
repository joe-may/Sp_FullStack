import React, { Component } from 'react';
import "./landingpage.css"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';




class LandingPage extends Component {

    render() {
      return (
        <div className="landing">
            <Router>
            <section>
                <h1>This is the landing page</h1>
                <img class='lpbg' src='../StudyPup_assets/galaxy.jpeg' alt="" />
            </section>
                <section>
                <p><a class="startgame" href="/snocon">Start Game</a></p>
                </section>
                <section>
                <Link to="/login">Login</Link>
                </section>
                <section>
                <Link to="/signup">Sign Up</Link>
                </section>
                

            </Router>
        </div>
      );
    }
  }
  
  export default LandingPage;