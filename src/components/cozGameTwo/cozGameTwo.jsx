
import React, { Component } from 'react';
import './cozGameTwo.css';
import $ from "jquery";


class CozGameTwo extends Component {
    componentDidMount() {

      const { answerset } = this.props;

      $('.start').hide();

      $('.skip').on('click',function() { 
        $('.layer').hide();
        $('iframe').remove();
        $('.skip').remove();
        $('.start').show();
      
      });
     

      $('.win').hide();
      $('.lose').hide();
      $('.nextLevel').hide();

      $('.cozGameThree').on('click',function(e) {
        console.log('FIRRRRRREEE');
        var parentOffset = $(this).parent().offset();
         var relX = e.pageX - parentOffset.left;
         var relY = e.pageY - parentOffset.top;
         $('audio#snowballThrow')[0].play();
         $('audio#snowballThrow')[0].currentTime = 0
        $(".snowball").animate({
            width: '10px',
            left: relX,
            top: relY
        }, 330, function() {
        
            $(".snowball").removeAttr('style');
        });
      });

     
      
      $('.start').on('click',function() {
      $('.start').hide();
      $('.win').hide();
      $('.lose').hide();
      $("audio#SlingSong").prop("volume", 0.19);
      $('audio#raceMusic')[0].play();
      $('.nextLevel').hide();
      $('li').first().remove();
      $('li').first().remove();
      $('li').first().remove();
      $('.kart2').finish().css('left', '0');
      $('.kart1').finish().css('left', '0%');
      $('.fline').finish().css('left', '100%');
      $('.groundSno').finish().css('left','-79%');
      $('.backgroundSno2').finish().css('left','0%');
      
      
      
      
      
      ///// animate kart2
      
      setTimeout(function() {
        $('.kart2').animate({
              left: "45%"
          }, 75000);
        
      });
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
          $( ".backgroundSno2" ).animate({  
            left: "-120%"
        },29999);
        /////////////
      /////timer and lose logic
      var counter = 30;
      var interval = setInterval(function() {
          counter--;
          // Display 'counter' wherever you want to display it.
          if (counter <= 0 && currentGameArray.length > 0) {
               clearInterval(interval);
                $('#timer').html("");
                console.log("you lose");
                $('.lose').show();
                $('audio#loseSound')[0].play();
                $("audio#loseSound").prop("volume", 0.75);
                $(".reset").html(" ");
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
        var boost = 5
        
      
        // when answer is clicked on
        $('.answers div').on('click',function() {
          var clickedAnswer = $(this).text();
          
          if (clickedAnswer === theAnswer) {
            console.log("Correct!");
            $(this).fadeOut(200, function() {
                currentGameArray.splice(randomProblemSelector,1);
                winningCheck();
                $('p').remove();
                generateNextTurn();
        
                console.log(currentGameArray.length + "Current game array");
                $('.kart1').animate({
                  'left': boost + "%"
              }, 1000);
              
            });
            
            // get new problem/answer 
      
          } else {
          
            console.log("False");
          };
          
      
        });
      
       
        
      
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
          boost = boost + 5;
          
          
        }
        
      
        function winningCheck() {
        
        if (currentGameArray.length > 0){
      console.log('keep playing');
        } else {
          $('.win').show();
          $('audio#winSound')[0].play();
          $("audio#winSound").prop("volume", 0.75);
          $('.nextLevel').show();
          $(".reset").html(" ");
          $(".start").show();
          $('.tryAgain').show();
          $('audio#raceMusic')[0].pause()
          $('audio#raceMusic')[0].currentTime = 0
          
          clearInterval(interval);
          
  
          
        };
      }
        
      }); 
 }

 render() {
  return (
<div class="cozGameTwo">
  <body>
  <a class="gButton" href={this.props.gButton}>
                <img src='https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/Studypup_Map_Icon.png' alt=""  class='mapIcon'/>
  </a>
  <div class="layer"></div>
  <button class="skip">Skip Video</button>
  <iframe src="https://player.vimeo.com/video/469168400" width="640" height="361" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
  <img class="backgroundSno2" src="https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/Cozmo_Taxi_Background.png"alt=""/>
 <audio id="raceMusic">
    <source src='https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/Cozmo_Taxi_Song_Sounds.m4a' type="audio/mpeg"/>
  </audio>
  <audio id="winSound">
    <source src='https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/YOU_WIN_SOUND.m4a' type="audio/mpeg"/>
  </audio>
  <audio id="loseSound">
    <source src='https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/YOU_LOSE_SOUND.m4a' type="audio/mpeg"/>
  </audio>
  
  

<div class="floor"></div>
  <div>
  <div class="answers reset"></div>
  <button class="start">START</button>
  <div class="footer">
  <img class="win" src='https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/YOU_WON_Cozmo_Game2.png' alt="" />
  
        <div class="problem reset"></div>
    </div>
  </div>
  <a class="nextLevel" href={this.props.nxtlvl}>Next Level!</a>
  <div>
      <span id="timer">00:
        <span id="time"></span>     
      </span>
  </div>
   <img class="lose" src='https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/YOU_LOSE_Cozmo_Game2.png' alt="" />
    <img class="kart1" src="https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/Cozmo_Taxi_Nova.gif"alt=""/>

    
   
    <img class="groundSno" src="https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/Cozmo_Taxi_Foreground.png"alt=""/>


    <link href="https://fonts.googleapis.com/css?family=Titan+One&display=swap" rel="stylesheet"></link>
    <link href='https://fonts.googleapis.com/css?family=Orbitron' rel='stylesheet' type='text/css'></link>
    
</body>
</div>
);
  
}

}

export default CozGameTwo;