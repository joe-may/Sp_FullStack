import React, { Component } from 'react';
import "./contactUs.css"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Navbar from '../Nav/Navbar';



class ContactUs extends Component {
  componentDidMount() {
    const script = document.createElement('script');
    script.src ="https://www.powr.io/powr.js?platform=html"
    script.async = true;
    document.body.appendChild(script);
    
  }

  render() {
    return (
      <div class="contactUs" style ={ { backgroundImage: "url('../StudyPup_assets/Puptune_Boss_Background.png')"} }>
          <Router>
                <body>
             

                    <Navbar/>

                    <div class="powr-form-builder" id="0ff1bd7f_1601943291"></div>

              </body>
          </Router>
          <link href="https://fonts.googleapis.com/css?family=Titan+One&display=swap" rel="stylesheet"></link>
      </div>
    );
  }
}
  
  export default ContactUs;