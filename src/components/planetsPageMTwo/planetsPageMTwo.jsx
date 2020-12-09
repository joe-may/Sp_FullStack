import React, { Component } from 'react';
import "./planetsPageMTwo.css"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Navbar from '../Nav/Navbar';
import FooterSpot from '../footer/footer';
import $ from "jquery";



class PlanetsPageMTwo extends Component {
  componentDidMount() {

    $('.backButton').hide();
    $('.opCon').hide();
    $('.layerOp').hide();



    $('.chg').on('click',function() { 
      $('.opCon').show();
      $('.chg').hide();
      $('.backButton').show();
      $('.layerOp').show();

    });
    $('.backButton').on('click',function() { 
      $('.chg').show();
      $('.backButton').hide();
      $('.opCon').hide();
      $('.layerOp').hide();

    });
    
  }

    render() {
      return (
        <div class="planetsPageMTwo" style ={ { backgroundImage: "url('https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/Background_Galaxy.png')"} }>
            <Router>

            <section>
            <Navbar/>

            </section>
                <section>
  
      

                </section>
                <section>
                  <div class="planetContainer">
          
                <img src='https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/StudyPup_MysticBadges_PLANET_MAP_NEW.png' alt=""  class='planets'/>
                {/* <div class="top-left">Top Left</div> */}
                <div class="buttons">
                <a href="/sno1m2">
                <img src='https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/blueButton1.png' alt=""  class='blueButton1'/>
                </a>
                <a href="/sno2m2">
                <img src='https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/blueButton2.png' alt=""  class='blueButton2'/>
                </a>
                <a href="/sno3m2">
                <img src='https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/blueButton3.png' alt=""  class='blueButton3'/>
                </a>
                <a href="/bbsno1m2">
                <img src='https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/blueButton4.png' alt=""  class='blueButton4'/>
                </a>
                 <a href="/hot1m2">
                <img src='https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/redButton5.png' alt=""  class='redButton5'/>
                </a>
                <a href="/hot2m2">
                <img src='https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/redButton6.png' alt=""  class='redButton6'/>
                </a>
                <a href="/hot3m2">
                <img src='https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/redButton7.png' alt=""  class='redButton7'/>
                </a>
                <a href="/hot4m2">
                <img src='https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/redButton8.png' alt=""  class='redButton8'/>
                </a>
                <a href="/wild1m2">
                <img src='https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/Studypup_MysticBadges_Number_9.png' alt=""  class='yellowButton9'/>
                </a>
                <a href="/wild2m2">
                <img src='https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/Studypup_MysticBadges_Number_10.png' alt=""  class='yellowButton10'/>
                </a>
                <a href="/wild3m2">
                <img src='https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/Studypup_MysticBadges_Number_11.png' alt=""  class='yellowButton11'/>
                </a>
                <a href="/wild4m2">
                <img src='https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/Studypup_MysticBadges_Number_12.png' alt=""  class='yellowButton12'/>
                </a>
                <a href="/coz1m2">
                <img src='https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/Studypup_MysticBadges_Number_13.png' alt=""  class='purpButton13'/>
                </a>
                <a href="/coz2m2">
                <img src='https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/Studypup_MysticBadges_Number_14.png' alt=""  class='purpButton14'/>
                </a>
                <a href="/coz3m2">
                <img src='https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/Studypup_MysticBadges_Number_15.png' alt=""  class='purpButton15'/>
                </a>
                <a href="/coz4m2">
                <img src='https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/Studypup_MysticBadges_Number_16.png' alt=""  class='purpButton16'/>
                </a>
                <a href="/pup1m2">
                <img src='https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/Studypup_MysticBadges_Number_17.png' alt=""  class='greenButton17'/>
                </a>
                <a href="/pup2m2">
                <img src='https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/Studypup_MysticBadges_Number_18.png' alt=""  class='greenButton18'/>
                </a>
                <a href="/pup3m2">
                <img src='https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/Studypup_MysticBadges_Number_19.png' alt=""  class='greenButton19'/>
                </a>
                <a href="/pup4m2">
                <img src='https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/Studypup_MysticBadges_Number_20.png' alt=""  class='greenButton20'/>
                </a>
                </div>
                <div class="addOneWords">LEVEL 2 MULTIPLICATION</div>
                <div class="backButton">BACK</div>
                <div class="chg">CHANGE OPERATION</div>
                <div class="opCon">
               
                
                <a  href="/planetsPagea">
                    <img src='https://studypupassets.s3-us-west-1.amazonaws.com/button+-+addition1.png' alt="" class="addLvlOne" />
                 </a> 
                 <a  href="/planetspages">
                    <img src='https://studypupassets.s3-us-west-1.amazonaws.com/ops/button+-+subtraction1.png' alt="" class="subLvlOne" />
                 </a> 
                 <a  href="/planetsPageM">
                    <img src='https://studypupassets.s3-us-west-1.amazonaws.com/ops/button+-+multiplication1.png' alt="" class="mulLvlOne" />
                 </a> 
                 <a  href="/planetspaged">
                    <img src='https://studypupassets.s3-us-west-1.amazonaws.com/ops/button+-+division1.png' alt="" class="divLvlOne" />
                 </a> 
                 <a  href="/planetsPageAtwo">
                    <img src='https://studypupassets.s3-us-west-1.amazonaws.com/button+-+addition2.png' alt="" class="addLvlTwo" />
                 </a> 
                 <a  href="/planetspagestwo">
                    <img src='https://studypupassets.s3-us-west-1.amazonaws.com/ops/button+-+subtraction2.png' alt="" class="subLvlTwo" />
                 </a> 
                 <a  href="/planetsPageMtwo">
                    <img src='https://studypupassets.s3-us-west-1.amazonaws.com/ops/button+-+multiplication2.png' alt="" class="mulLvlTwo" />
                 </a> 
                 <a  href="/planetspagedtwo">
                    <img src='https://studypupassets.s3-us-west-1.amazonaws.com/ops/button+-+division2.png' alt="" class="divLvlTwo" />
                 </a> 
               
                
     
                </div>
                </div>
                
                
             

                <div class="layerOp"></div>
                </section>
                <section>
                <FooterSpot></FooterSpot>
                </section>
               

            </Router>
            <link href="https://fonts.googleapis.com/css?family=Titan+One&display=swap" rel="stylesheet"></link>
            <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@800&display=swap" rel="stylesheet"></link>
            <link rel="stylesheet" href="https://use.typekit.net/wug4dcf.css"></link>
            <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@800&display=swap" rel="stylesheet"></link>
            <link rel="stylesheet" href="https://use.typekit.net/wug4dcf.css"></link>
        </div>
        
      );
    }
  }
  
  export default PlanetsPageMTwo;