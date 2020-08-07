
import React, { Component } from 'react';
import './gameTwo.css';
import $ from "jquery";


class GameTwo extends Component {
    componentDidMount() {
      $('.win').hide();
      $('.lose').hide();
      $('.nextLevel').hide();

      
      const answerset = [
        { problem: "3 + 2 =", answer: "5"},
        { problem: "6 + 1 =", answer: "7"},
        { problem: "4 + 4 =", answer: "8"},
        { problem: "2 + 9 =", answer: "11"},
        { problem: "5 + 4 =", answer: "9"},
        { problem: "3 + 1 =", answer: "4"},
        { problem: "7 + 3 =", answer: "10"},
        { problem: "6 + 6 =", answer: "12"},
        { problem: "2 + 1 =", answer: "3"},
        { problem: "3 + 3 =", answer: "6"},
      ]
      
      $('.start').on('click',function() {
      $('.start').hide();
      $('.win').hide();
      $('.lose').hide();
      $('audio#raceMusic')[0].play();
      $('.nextLevel').hide();
      $('li').first().remove();
      $('li').first().remove();
      $('li').first().remove();
      $('.kart2').finish().css('left', '0');
      $('.kart1').finish().css('left', '0%');
      $('.fline').finish().css('left', '100%');
      
      
      
      
      
      ///// animate kart2
      
      setTimeout(function() {
          $('.kart2').animate({
              left: "45%"
          }, 20000);
      });
      ///////// finish line
      $( ".fline" ).delay( 15000 ).animate({  
          left: "55%"
      },2200);
      
      /////timer and lose logic
      var counter = 20;
      var interval = setInterval(function() {
          counter--;
          // Display 'counter' wherever you want to display it.
          if (counter <= 0 && currentGameArray.length > 0) {
               clearInterval(interval);
                $('#timer').html("");
                console.log("you lose");
                $('.lose').show();
                $(".reset").html(" ");
                $(".start").show();

                
              return;
          }else{
            // $('#time').text(counter);
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
                generateNextTurn();
                $('audio#boardBoost')[0].play();
                $('audio#boardBoost')[0].currentTime = 0
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
          $('.nextLevel').show();
          $(".reset").html(" ");
          $(".start").show();
          $('.tryAgain').show();
          
  
          
        };
      }
        
      }); 
 }

 render() {
  return (
    <div class="game2">
<body>
 
 <audio id="raceMusic">
    <source src='../StudyPup_assets/Song_Snow-Con_Race.m4a' type="audio/mpeg"/>
  </audio>
  <audio id="boardBoost">
    <source src='../StudyPup_assets/Sound_Snowboard_Boost.m4a' type="audio/mpeg"/>
  </audio>
  

<div class="floor"></div>
  <div>
  <div class="answers reset"></div>
  <button class="start">START</button>
  <div class="footer">
    <div class="win">YOU WON!!</div>
  
        <div class="problem reset"></div>
    </div>
  </div>
  <p><a class="nextLevel" href="/snoconb2">Next Level!</a></p>
  <div>
      <span id="timer">
        <span id="time"></span>     
      </span>
  </div>
    <div class="lose">Try Again!</div>
    <img class="kart1" src="https://i.imgur.com/DdOJQq9.gif"alt=""/>
    <img class="kart2" src="https://i.imgur.com/hJ4doek.gif"alt=""/>
    <img class="fline" src="../StudyPup_assets/https://i.imgur.com/3D1jwiQ.jpg"alt=""/>
    <img src='../StudyPup_assets/Snow_Mountain_Background_Loop_Bigger.gif' alt="" class='movingBackground'/>

    <link href="https://fonts.googleapis.com/css?family=Titan+One&display=swap" rel="stylesheet"></link>
</body>
</div>
);
  
}

}

export default GameTwo;