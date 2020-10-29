
import React, { Component } from 'react';
import './slamDunk.css';
import $ from "jquery";


class SlamDunk extends Component {
    componentDidMount() {

      var { answerset } = this.props;
      var { answerset2 } = this.props;

      var changeAnswerset = function () {
        if (levelCont === 2) {
          answerset = answerset2
      }};
      
    
      

    var levelCont =  1  
      $('.hoop').hide();
      $('.win').hide();
      $('.lose').hide();
      $('.nextLevel').hide();

     
      

 
      
      $('.start').on('click',function() {
        var wrongCount = 0;
        changeAnswerset();
      $('.start').hide();
      $("audio#slamSong").prop("volume", 0.19);
      $('audio#slamSong')[0].play();
      $('.win').hide();
      $('.lose').hide();
      // $('audio#raceMusic')[0].play();
      // $("audio#raceMusic").prop("volume", 0.19);
      $('.nextLevel').hide();
      $('li').first().remove();
      $('li').first().remove();
      $('li').first().remove();
      $('.kart2').finish().css('left', '0');
      // $('.kart1').finish().css('left', '0%');
      $('.fline').finish().css('left', '100%');
      $('.groundSno').finish().css('left','-79%');
      $('.backgroundSno2').finish().css('left','0%');
      
      
    
      
      var addOneWrong = function () {
        var wrongCount = wrongCount + 1;
       };
      ///// animate kart2
      
    
 
      ///////// finish line
      $( ".fline" ).delay( 15000 ).animate({  
          left: "55%"
      },2200);
      ///////////////

      /////////////groundSno
      $( ".groundSno" ).animate({  
        left: "-790%"
    },25000);
    /////////////
          /////////////gamebackground
         
        /////////////
      /////timer and lose logic
      

      
      
      
      
  
      
      var currentGameArray = [];
     
      
      
      answerset.forEach(function(questions) {
        currentGameArray.push(questions)
      })
      
      
        var randomProblemSelector = Math.floor((Math.random() * currentGameArray.length));
        var selectedProblem = currentGameArray[randomProblemSelector].problem;
        var theAnswer = currentGameArray[randomProblemSelector].answer;
      
      console.log(currentGameArray);
      
        $.each(currentGameArray, function(index,value){
          $(".answers").append("<div class='snowmen' id='0'>" + value.answer + "</div>");
          console.log("index: " + index + " problem: " + value.problem + " answer: " + value.answer );
        });
      
       
      
        
      
        // display the selected problem on the screen
        
        var currentEquation = function () {
          var problemHtml = $('<p></p>').html(selectedProblem);
          return $(".problem").append(problemHtml);
            
        }
       
        currentEquation();
        ///boost varible
        // var boost = 5
        
      
        // when answer is clicked on
        $('.answers div').on('click',function() {
          var clickedAnswer = $(this).text();
          
          if (clickedAnswer === theAnswer) {
          
            $('.problem').hide();
            $('.answers').hide();
            

            $('body').append(" <img class='kart1' src='https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/slamin-spaceman.png'alt=''/>");
            setTimeout(function() {
              $('.hoop').show();

             
              
             
            }, 100);
            setTimeout(function() {
              

              $('audio#dunkNoise')[0].play();
              
             
            }, 2300);
            
        
            setTimeout(function() {
              $('.kart1').remove();
             
            }, 3150);
            setTimeout(function() {
              $('.hoop').hide();
             
            }, 3150);
            setTimeout(function() {
              
              $('.problem').show();
              $('.answers').show();
             
            }, 3000);
            setTimeout(function() {
              $('body').append(" <img class='stars' src='https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/SJS_slam_times.gif'alt=''/>");

             

            }, 2950);
            setTimeout(function() {
              $('.stars').remove();
             
            }, 3950);

            console.log("Correct!");

        
            $(this).fadeOut(200, function() {
                currentGameArray.splice(randomProblemSelector,1);
                winningCheck();
                $('p').remove();
                generateNextTurn();
                // $('audio#boardBoost')[0].play();
                // $('audio#boardBoost')[0].currentTime = 0
                console.log(currentGameArray.length + "Current game array");
               
           
                
             
              
            });
            
            // get new problem/answer 
      
          } else {
            $('.problem').hide();
            $('.answers').hide();
            $('body').append(" <img class='kart2' src='https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/slamin-spaceman.png'alt=''/>");
             setTimeout(function() {
              $('.kart2').remove();
              $('.problem').show();
              $('.answers').show();
             
            }, 2450);
          
            wrongCount = wrongCount + 1
            
            console.log("False");
            console.log(wrongCount);
          };
          
      
        });
        var counter = 20000;
        var interval = setInterval(function() {
            counter--;
            // Display 'counter' wherever you want to display it.
            if ( ( counter <= 0 && currentGameArray.length > 0 ) || (wrongCount === 3) ) {
                 clearInterval(interval);
                  $('#timer').html("");
                  console.log("you lose");
                  $('.lose').show();
                  $(".reset").html(" ");
                  $('#timer').hide();
                  $(".start").show();
                  $('p').hide();
                  $('audio#raceMusic')[0].pause()
                  $('audio#raceMusic')[0].currentTime = 0
                  clearInterval(interval);
  
                  
                return;
            }else{
              $('#time').text(counter);
              console.log("Timer --> " + counter);
            }
        }, 1100);
       
        
      
        function generateNextTurn() {
          if (currentGameArray.length === 0){
          return;
          }
          randomProblemSelector = Math.floor((Math.random() * currentGameArray.length));
          selectedProblem = currentGameArray[randomProblemSelector].problem;
          theAnswer = currentGameArray[randomProblemSelector].answer;
          //$("p").first().html(selectedProblem);
      
          var problemHtml = $('<p></p>').html(selectedProblem);
          $(".problem").append(problemHtml);
          
          
          
        }
        
      
        function winningCheck() {
        
        if (currentGameArray.length > 0){
      console.log('keep playing');
        } else {
          $('.win').show();
          // $('.nextLevel').show();
          $(".reset").html(" ");
          $(".start").show();
          $('.tryAgain').show();
          $('audio#raceMusic')[0].pause()
          $('audio#raceMusic')[0].currentTime = 0
          levelCont = levelCont + 1
          console.log(levelCont);
          
          clearInterval(interval);
          
  
          
        };
      }
        
      }); 
 }

 render() {
  return (
<div class="slamDunk">
  <body>
  <a class="gButton" href={this.props.gButton}>
                <img src='https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/791-removebg-preview.png' alt=""  class='mapIcon'/>
                </a>
 
  
 
  <img class="backgroundSno2" src="https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/galaxyDunk.png"alt=""/>
 <audio id="raceMusic">
    <source src='https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/Hotsva_Racing_Song.m4a' type="audio/mpeg"/>
  </audio>
  <audio id="boardBoost">
    <source src='https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/Hotsva_Racing_Sound_Balloon.m4a' type="audio/mpeg"/>
  </audio>
  
  <audio id="dunkNoise">
    <source src='../sounds/SLAM_DUNK_SOUND.m4a' type="audio/mpeg"/>
  </audio>
  <audio id="slamSong">
    <source src='../sounds/Scratch_the_Itch.mp3' type="audio/mpeg"/>
  </audio>

<div class="floor"></div>
  <div>
  <div class="answers reset"></div>
  <button class="start">START</button>
  <div class="footer">
  <img class="win" src='https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/YOU_WON_Hotsva_Game2.png' alt="" />
  
        <div class="problem reset"></div>
    </div>
  </div>
  {/* <a class="nextLevel" href={this.props.nxtlvl}>Next Level!</a> */}
  <div>
      <span id="timer">00:
        <span id="time"></span>     
      </span>
  </div>
   <img class="lose" src='https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/YOU_LOSE_Hotsva_Game2.png' alt="" />


   <img class="hoop" src="https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/planet_hoop_1.png"alt=""/>
{/* 
    <img class="kart1" src="https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/slamin-spaceman.png"alt=""/> */}
   
   
    

    <link href="https://fonts.googleapis.com/css?family=Titan+One&display=swap" rel="stylesheet"></link>
    <link href='https://fonts.googleapis.com/css?family=Orbitron' rel='stylesheet' type='text/css'></link>
    <link rel="stylesheet" href="https://use.typekit.net/wug4dcf.css"></link>


    
</body>
</div>
);
  
}

}

export default SlamDunk;