import React, { Component } from 'react';
import "./mysticBadgePage.css"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Navbar from '../Nav/Navbar';
import FooterSpot from '../footer/footer';
import $ from "jquery";




class MysticBadgePage extends Component {
  componentDidMount() {

    $('.layerOp').hide();
    $('iframe').hide();
    $('.skipToGame').hide();
    $('.opCon').hide();
    $('.backButton').hide();

    $('.newGame').on('click',function() { 
      // $('.layerOp').show();
      $('iframe').show();
      $('.skipToGame').show();
      $('.backButton').show();
     
    
    });
    $('.skipToGame').on('click',function() { 
      
      $('iframe').hide();
      $('.skipToGame').hide();
      $('.opCon').show();
    
    });
    $('.backButton').on('click',function() { 
     
      $('iframe').hide();
      $('.skipToGame').hide();
      $('.backButton').hide();
      // $('.layerOp').hide();
      $('.opCon').hide();
      
    
    });


   
  }

    render() {
      return (
        <div class="mysticBadgePage" style ={ { backgroundImage: "url('../StudyPup_assets/Puptune_Boss_Background.png')"} }>
            <Router>
              <body>
            <Navbar/>
              <div class="layerOp"></div>
              <button class="skipToGame">Skip To Game</button>
              <iframe title="rr" width="720" height="480" src="https://www.youtube.com/embed/ub7Ox9SBZZw?mode=opaque&amp;rel=0&amp;autohide=1&amp;showinfo=0&amp;wmode=transparent&amp;modestbranding=1&amp;loop=1&amp;playlist=ub7Ox9SBZZw" allowfullscreen></iframe>

        
                <section>

                <div className="newGame">NEW GAME</div>
                <a href="/planetspagea" className="selectGame">SELECT LEVEL</a>
                {/* <div class="layerOp"></div> */}
                <div class="backButton">BACK</div>

                <div class="opCon">
                <div class="chg">CHOOSE OPERATION</div>
                  <a class="opa" href="/sno1">+</a>
                  <a class="ops"href="/sno1s">-</a>
                  <a class="opm" href="/sno1m">x</a>
                  <a class="opd" href="/sno1d">÷</a>
                </div>
            
                </section>
                </body>
                <FooterSpot></FooterSpot>
             
              

            </Router>
            <link href="https://fonts.googleapis.com/css?family=Titan+One&display=swap" rel="stylesheet"></link>
            <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@800&display=swap" rel="stylesheet"></link>
        </div>
      );
    }
  }
  
  export default MysticBadgePage;