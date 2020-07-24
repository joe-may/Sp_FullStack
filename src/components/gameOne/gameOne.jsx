
import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

import './gameOne.css';
import $ from "jquery";


class GameOne extends Component {
    componentDidMount() {
     



$('.win').hide();
$('.lose').hide();
$('.nextLevel').hide();


$('.game1').on('click',function(e) {
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
$('audio#iglooSong')[0].play();




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
    $(".answers").append("<div class='house'><div class='iglooWrapper "+'a'+index+"'><img src='../StudyPup_assets/igloo.png' class='igloo'><img src='../StudyPup_assets/Penguin_Walk_Gif_Faster.gif' class='penguin hide'><div class='answer'>" + value.answer + "</div></div></div>");
    console.log("index: " + index + " problem: " + value.problem + " answer: " + value.answer );
  });

 
  var counter = 25;
 

  
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
          $('audio#iglooSong')[0].pause()
          $('audio#iglooSong')[0].currentTime = 0
          
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
  $('.iglooWrapper').on('click',function(e) {
    var clickedAnswer = $(this).text();
    $(this).prepend("<img src='' class='splash'>");
    var splash = $(this).parent().find('.splash');
    splash.attr("src", "../StudyPup_assets/snowball_hit_delay2.gif");
    setTimeout(function() {
      splash.attr("src", "").remove();
  }, 1000)

    if (clickedAnswer === theAnswer) {
      

      console.log("Correct!");
      $(this).find('.answer').fadeOut(1000, function() {
        $(this).parent('.iglooWrapper').prepend("<img src='' class='penguin'>");
        console.log(currentGameArray.length);
        var penguin = $(this).parent().find('.penguin');
        penguin.attr("src", "../StudyPup_assets/Penguin_Walk_Gif_Faster.gif");
        
       
        


          currentGameArray.splice(randomProblemSelector,1);
          console.log(currentGameArray.length);
          winningCheck();
          generateNextTurn();
          console.log($(this).parent());
          setTimeout(function() {
            penguin.attr("src", "").remove();
        }, 1900)
      });

  

    } else {
     
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
    $('.nextLevel').show();
    $(".reset").html(" ");
    $(".start").show();
    $('.tryAgain').show();
    $('p').hide();
    clearInterval(interval);
    $('audio#iglooSong')[0].pause()
    $('audio#iglooSong')[0].currentTime = 0
    console.log('you win')
    // generateHearts();
    
   
    
  };
}
  
}); 


 }

 render() {
  return (
    <div class="game1">
    
<body>

<audio id="iglooSong">
    <source src='../StudyPup_assets/Song_Snow-Con_Level_1.m4a' type="audio/mpeg"/>
  </audio>
  <audio id="snowballThrow">
    <source src='../StudyPup_assets/Snowball_Throw.m4a' type="audio/mpeg"/>
  </audio>
 
         <img class="bg_game1" src='../StudyPup_assets/penguin-level-backdrop.jpeg' alt="" />
        <div class="answers reset"></div>
        <button class="start">START</button>
          <h1 class="win">YOU WON!!</h1>
          <div class="problem reset"></div>
                
                <div class="lose">Try Again!</div>
                
                <a class="nextLevel" href="/snoconb1">Next Level!</a>
          
          <div>
            <span id="timer">
              <span id="time">25</span>      
            </span>
          </div>
      
          <img src='../StudyPup_assets/snowballold.jpg' alt="" class='snowball'/>
          
  
</body>
<link href="https://fonts.googleapis.com/css?family=Titan+One&display=swap" rel="stylesheet"></link>
</div>
    
);
  
}

}

export default GameOne;