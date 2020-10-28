
import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

import './pupGameTwo.css';
import $ from "jquery";


class PupGameTwo extends Component {
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
      
      
      ////snowball throw
      $('body').click(function(e) {
        var parentOffset = $(this).parent().offset();
         var relX = e.pageX - parentOffset.left;
         var relY = e.pageY - parentOffset.top;
        $(".snowball").animate({
            width: '10px',
            left: relX,
            top: relY
        }, 200, function() {
            $(".snowball").removeAttr('style');
        });
      });
      
  
      
      $('.start').on('click',function() {
      $('.start').hide();
      $('.win').hide();
      $('#timer').show();
      $('.lose').hide();
      $("audio#stormSong").prop("volume", 0.19);
      $('audio#stormSong')[0].play();
      $('.nextLevel').hide();
      
      
      
      
      
      // $(document).click(function(e) {
      //   mouseX = e.pageX;
      //   $('.dart').css("left", e.pageX);
      // });
      
      var currentGameArray = [];
      // var playerLives = 0;
      
      
      answerset.forEach(function(questions) {
        currentGameArray.push(questions)
      })
      
      
        var randomProblemSelector = Math.floor((Math.random() * currentGameArray.length));
        var selectedProblem = currentGameArray[randomProblemSelector].problem;
        var theAnswer = currentGameArray[randomProblemSelector].answer;
      
      console.log(currentGameArray);
      
        $.each(currentGameArray, function(index,value){
          $(".answers").append("<div class='house'><div class='icecubeWrapper "+'a'+index+"'><img src='../StudyPup_assets/Puptune_Marsh_Marshmallow.png' class='icecube'><div class='answer'>" + value.answer + "</div></div></div>");
          console.log("index: " + index + " problem: " + value.problem + " answer: " + value.answer );
        });
      
       
        var counter = 30;
       
      
        
        var interval = setInterval(function() {
          counter--;
          // Display 'counter' wherever you want to display it.
          if (counter <= 0 && currentGameArray.length > 0) {
               clearInterval(interval);
                // $('#time').text(counter);
                console.log("you lose");
                $('.lose').show();
                $('audio#loseSound')[0].play();
                $("audio#loseSound").prop("volume", 0.75);
                $(".reset").html(" ");
                $(".start").show();
                $('#timer').hide();
                
              return;
          }else{
            $('#time').text(counter);
            
            console.log("Timer --> " + counter);
          }
      }, 1000);
      
        
      
        // display the selected problem on the screen
        
        var currentEquation = function () {
          var problemHtml = $('<p></p>').html(selectedProblem);
          return $(".problem").append(problemHtml);
            
        }
       
        currentEquation();
        
        
      
        // when answer is clicked on
        $('.icecubeWrapper').on('click',function() {
          var clickedAnswer = $(this).text();
          
          if (clickedAnswer === theAnswer) {
            $("audio#whoosh").prop("volume", 0.19);
            $('audio#whoosh')[0].play();
            $('audio#whoosh')[0].currentTime = 0
            console.log("Correct!");
            $(this).find('.icecube').fadeOut(10);
            $(this).find('.answer').fadeOut(10, function() {
              $(this).parent('.icecubeWrapper').prepend("<img src='' class='net'>");
              console.log(currentGameArray.length);
              var net = $(this).parent().find('.net');
              net.attr("src", "../StudyPup_assets/Puptune_Marsh_Net_Catch.gif");
              $('p').remove();
              
              
                currentGameArray.splice(randomProblemSelector,1);
                console.log(currentGameArray.length);
                winningCheck();
                generateNextTurn();
                console.log($(this).parent());
                setTimeout(function() {
                  net.attr("src", "").remove();
              }, 800)
            });
      
         
      
          } else {
            $('audio#wrongWhoosh')[0].play();
            
            $('audio#wrongWhoosh')[0].currentTime = 0;
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
          
        }
        
      
        function winningCheck() {
        
        if (currentGameArray.length > 0){
      console.log('keep playing');
        } else {
          $('.win').show();
          $(".reset").html(" ");
          $(".start").show();
          $('audio#winSound')[0].play();
          $("audio#winSound").prop("volume", 0.75);
          $('.tryAgain').show();
          $('.nextLevel').show();
          clearInterval(interval);
          $('audio#stormSong')[0].pause()
          $('audio#stormSong')[0].currentTime = 0
          console.log('you win')
          
        };
      }
        
      }); 
      
 }

 render() {
  return (
    <div class="pupGameTwo" style ={ { backgroundImage: "url('../StudyPup_assets/Puptune_Marsh_Background.png')"} }>
    
<body>
<a class="gButton" href={this.props.gButton}>
                <img src='../StudyPup_assets/Studypup_Map_Icon.png' alt=""  class='mapIcon'/>
   </a>
<div class="layer"></div>
  <button class="skip">Skip Video</button>
  <iframe title="rr" width="720" height="480" src="https://www.youtube.com/embed/ub7Ox9SBZZw?mode=opaque&amp;rel=0&amp;autohide=1&amp;showinfo=0&amp;wmode=transparent&amp;modestbranding=1&amp;loop=1&amp;playlist=ub7Ox9SBZZw" allowfullscreen></iframe>

<audio id="stormSong">
    <source src='../StudyPup_assets/Puptune_Marsh_Song.m4a' type="audio/mpeg"/>
  </audio>
  <audio id="whoosh">
    <source src='../StudyPup_assets/Puptune_Marsh_Sound_Effect.m4a' type="audio/mpeg"/>
  </audio>
  <audio id="wrongWhoosh">
    <source src='../StudyPup_assets/Wrong_Ice.m4a' type="audio/mpeg"/>
  </audio>
  <audio id="winSound">
    <source src='../StudyPup_assets/YOU_WIN_SOUND.m4a' type="audio/mpeg"/>
  </audio>
  <audio id="loseSound">
    <source src='../StudyPup_assets/YOU_LOSE_SOUND.m4a' type="audio/mpeg"/>
  </audio>
        <div class="answers reset"></div>
        <button class="start">START</button>
        <img class="win" src='../StudyPup_assets/YOU_WON_Puptune_Game2.png' alt="" />
          <div class="problem reset"></div>
                
                
                
                <img class="lose" src='../StudyPup_assets/YOU_LOSE_Puptune_Game2.png' alt="" />
                <a class="nextLevel" href={this.props.nxtlvl}>Next Level!</a>
          
          <div>
            <span id="timer">00:
              <span id="time">30</span>      
            </span>
          </div>
          
      

          
  
</body>
<link href="https://fonts.googleapis.com/css?family=Titan+One&display=swap" rel="stylesheet"></link>
<link href='https://fonts.googleapis.com/css?family=Orbitron' rel='stylesheet' type='text/css'></link>
</div>
    
);
  
}

}

export default PupGameTwo;