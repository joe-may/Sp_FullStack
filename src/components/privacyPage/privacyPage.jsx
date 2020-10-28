import React, { Component } from 'react';
import "./privacyPage.css"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Navbar from '../Nav/Navbar';




class PrivacyPage extends Component {
  componentDidMount() {
    
  }

    render() {
      return (
        <div class="privacyPage" style ={ { backgroundImage: "url('https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/Puptune_Boss_Background.png')"} }>
            <Router>

            <section>
                

          
                <p className="select">This is where the policy goes</p>
               

                  
                <Navbar/>
                </section>

            </Router>
            <link href="https://fonts.googleapis.com/css?family=Titan+One&display=swap" rel="stylesheet"></link>
        </div>
      );
    }
  }
  
  export default PrivacyPage;