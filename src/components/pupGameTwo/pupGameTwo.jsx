
import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

import './pupGameTwo.css';
import $ from "jquery";


class PupGameTwo extends Component {
    componentDidMount() {
     


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
      
      const answerset = [
        { problem: "3 + 2 =", answer: "5"},
        { problem: "6 + 1 =", answer: "7"},
        { problem: "4 + 4 =", answer: "8"},
        { problem: "1 + 2 =", answer: "3"},
        { problem: "3 + 1 =", answer: "4"},
        { problem: "7 + 3 =", answer: "10"},
        { problem: "6 + 3 =", answer: "9"},
        { problem: "2 + 4 =", answer: "6"},
        
      ]
      
      $('.start').on('click',function() {
      $('.start').hide();
      $('.win').hide();
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
      
       
        var counter = 40;
       
      
        
        var interval = setInterval(function() {
          counter--;
          // Display 'counter' wherever you want to display it.
          if (counter <= 0 && currentGameArray.length > 0) {
               clearInterval(interval);
                // $('#time').text(counter);
                console.log("you lose");
                $('.lose').show();
                $(".reset").html(" ");
                $(".start").show();
                
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
<audio id="stormSong">
    <source src='../StudyPup_assets/Puptune_Marsh_Song.m4a' type="audio/mpeg"/>
  </audio>
  <audio id="whoosh">
    <source src='../StudyPup_assets/Puptune_Marsh_Sound_Effect.m4a' type="audio/mpeg"/>
  </audio>
  <audio id="wrongWhoosh">
    <source src='../StudyPup_assets/Wrong_Ice.m4a' type="audio/mpeg"/>
  </audio>
        <div class="answers reset"></div>
        <button class="start">START</button>
          <h1 class="win">YOU WON!!</h1>
          <div class="problem reset"></div>
                
                <div class="lose">Try Again!</div>
                
                <a class="nextLevel" href="/snoconb3">Next Level!</a>
          
          <div>
            <span id="timer">
              <span id="time">40</span>      
            </span>
          </div>
          
      

          
  
</body>
<link href="https://fonts.googleapis.com/css?family=Titan+One&display=swap" rel="stylesheet"></link>
</div>
    
);
  
}

}

export default PupGameTwo;