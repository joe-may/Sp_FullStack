import React, { Component } from 'react';
import "./feedbackPage.css"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Navbar from '../Nav/Navbar';
import FooterSpot from '../footer/footer';




class FeedbackPage extends Component {
  componentDidMount() {
    const script = document.createElement('script');
    script.src ="https://www.powr.io/powr.js?platform=html"
    script.async = true;
    document.body.appendChild(script);
  }

    render() {
      return (
        <div class="feedbackPage" style ={ { backgroundImage: "url('https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/Puptune_Boss_Background.png')"} }>
            <Router>
<header>

</header>
           
                
                <body>
                <Navbar/>
            
                <div class="powr-form-builder" id="6776191a_1601795262"></div>
                
                

                
           
                
                </body>
                <FooterSpot></FooterSpot>

            </Router>
            <link href="https://fonts.googleapis.com/css?family=Titan+One&display=swap" rel="stylesheet"></link>
            
        </div>
      );
    }
  }
  
  export default FeedbackPage;