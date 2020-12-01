import React, { Component } from 'react';
import "./mysticBadgePage.css"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Navbar from '../Nav/Navbar';
import FooterSpot from '../footer/footer';
import $ from "jquery";






class MysticBadgePage extends Component {
  componentDidMount() {

  
 

    $('.layerOp').hide();
  

    $('.skipToGame').hide();
    $('.opCon').hide();
    $('.backButton').hide();

    $('.newGame').on('click',function() { 
      $('.layerOp').show();
      
      
      $('body').append("<iframe src='https://player.vimeo.com/video/474079873' width='640' height='360' frameborder='0' allow='autoplay; fullscreen' allowfullscreen></iframe>");;

      $('.skipToGame').show();
      $('.backButton').show();
     
    
    });
    $('.skipToGame').on('click',function() { 
      $('iframe').remove();
      $('.skipToGame').hide();
      $('.opCon').show();
    
    });
    $('.backButton').on('click',function() { 
     
      $('iframe').hide();
      $('.skipToGame').hide();
      $('.backButton').hide();
      $('.layerOp').hide();
      $('.opCon').hide();
      
    
    });

    $('.okButton').on('click',function() { 
     
     $('.flipLayer').hide();
     $('.okButton').hide();
      
    
    });

    


   
  }

    render() {
      return (
        <div class="mysticBadgePage" style ={ { backgroundImage: "url('https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/MB_START_MENU_BACKGROUNDpure.png')"} }>
            <Router>
              <body>
            <Navbar/>
              <div class="layerOp"></div>
              <button class="okButton">OK!</button>
              <button class="skipToGame">Skip To Game</button>
            
              
        
                <section>

                <div class="mobileLayer">
                <p class="mobileInfo">For the best gaming experience, please visit this site on a laptop or tablet</p>
                </div>
                <div class="flipLayer">
                <p class="flipInfo">For the best gaming experience, please flip screen!</p>
                </div>
                
                <img src='https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/MB_START_MENU_Button_New_Game.png' alt=""  class='newGame'/>
                <a href="/planetspagea">
                <img src='https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/MB_START_MENU_Button_Select_Level.png' alt=""  class='selectGame'/>
                </a>
                
                <a href="/arcade-play">
                <img src='https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/MB_START_MENU_Button_ARCADE.png' alt=""  class='arcadePlay'/>
                </a>

                {/* <div class="layerOp"></div> */}
                <div class="backButton">BACK</div>

                <div class="opCon">
                <a  href="/arcade-play">
                    <img src='https://studypupassets.s3-us-west-1.amazonaws.com/button+-+addition1.png' alt="" class="addLvlOne" />
                 </a> 
                 <a  href="/arcade-play">
                    <img src='https://studypupassets.s3-us-west-1.amazonaws.com/ops/button+-+subtraction1.png' alt="" class="subLvlOne" />
                 </a> 
                 <a  href="/arcade-play">
                    <img src='https://studypupassets.s3-us-west-1.amazonaws.com/ops/button+-+multiplication1.png' alt="" class="mulLvlOne" />
                 </a> 
                 <a  href="/arcade-play">
                    <img src='https://studypupassets.s3-us-west-1.amazonaws.com/ops/button+-+division1.png' alt="" class="divLvlOne" />
                 </a> 
                 <a  href="/arcade-play">
                    <img src='https://studypupassets.s3-us-west-1.amazonaws.com/button+-+addition2.png' alt="" class="addLvlTwo" />
                 </a> 
                 <a  href="/arcade-play">
                    <img src='https://studypupassets.s3-us-west-1.amazonaws.com/ops/button+-+subtraction2.png' alt="" class="subLvlTwo" />
                 </a> 
                 <a  href="/arcade-play">
                    <img src='https://studypupassets.s3-us-west-1.amazonaws.com/ops/button+-+multiplication2.png' alt="" class="mulLvlTwo" />
                 </a> 
                 <a  href="/arcade-play">
                    <img src='https://studypupassets.s3-us-west-1.amazonaws.com/ops/button+-+division2.png' alt="" class="divLvlTwo" />
                 </a> 
               
                </div>
            
                </section>
                
                </body>
                <footer>
                <FooterSpot></FooterSpot>
                </footer>
             
              

            </Router>
            <link href="https://fonts.googleapis.com/css?family=Titan+One&display=swap" rel="stylesheet"></link>
            <link rel="stylesheet" href="https://use.typekit.net/wug4dcf.css"></link>
            <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@800&display=swap" rel="stylesheet"></link>
            <link rel="stylesheet" href="https://use.typekit.net/wug4dcf.css"></link>


        </div>
      );
    }
  }
  
  export default MysticBadgePage;