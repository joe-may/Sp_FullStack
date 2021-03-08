
import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

import './wildGameTwo.css';
import $ from "jquery";


class WildGameTwo extends Component {
    componentDidMount() {
     
      const { answerset } = this.props;
      var counter = 40;

      var wrongCounter = 0
      
      $(".thex").hide();
      $(".hundo").hide();
      
      var percentCheck = "100%"
      
      
      function wrongCheck() {
        console.log(wrongCounter);
      
      if (wrongCounter === 3) {
        console.log("LIEHFQGILWEHFIWEHFLI");
        counter = 0
      
        setTimeout(function() {
          $(".thex").show();
          }, 1000);
      } else if (wrongCounter === 2) {
        percentCheck = "75%"
      
      } else if (wrongCounter === 1) {
        percentCheck = "87%"
      
      }
      };
      
      

      $('.start').hide();
      $('.novaWithSling').hide();

      $('.skip').on('click',function() { 
        $('.layer').hide();
        $('iframe').remove();
        $('.skip').remove();
        $('.start').show();
      
      });

$('.win').hide();
$('.lose').hide();
$('.nextLevel').hide();






$('.start').on('click',function() {
  wrongCheck();
  wrongCounter = 1
  counter = 40;
  $(".thex").hide();
  $(".hundo").hide();
$('.start').hide();
$('.win').hide();
$('.lose').hide();
$('.nextLevel').hide();
$("audio#SlingSong").prop("volume", 0.19);
$('audio#SlingSong')[0].play();
$('.novaWithSling').show();


$(document).mousemove(function(e) {
  
  $('.novaWithSling').css("left", e.pageX);
 

});


var currentGameArray = [];



answerset.forEach(function(questions) {
  currentGameArray.push(questions)
})


  var randomProblemSelector = Math.floor((Math.random() * currentGameArray.length));
  var selectedProblem = currentGameArray[randomProblemSelector].problem;
  var theAnswer = currentGameArray[randomProblemSelector].answer;

console.log(currentGameArray);

  $.each(currentGameArray, function(index,value){
    $(".answers").append("<div class='house'><div class='iglooWrapper "+'a'+index+"'><img src='https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/Tumblewyld_Shooting_Bottle.png' class='igloo'><img src='https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/Tumblewyld_Shooting_Bottle_Fall.gif' class='penguin hide'><div class='answer'>" + value.answer + "</div></div></div>");
    console.log("index: " + index + " problem: " + value.problem + " answer: " + value.answer );
  }); 
 

 

  
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
          $('p').hide();
          $('audio#SlingSong')[0].pause()
          $('audio#SlingSong')[0].currentTime = 0
          
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
   

    if (clickedAnswer === theAnswer) {
      

      console.log("Correct!");
      $(this).find('.igloo').remove();
      $(this).find('.answer').fadeOut(1, function() {
        $(this).parent('.iglooWrapper').prepend("<img src='' class='penguin'>");
        console.log(currentGameArray.length);
        var penguin = $(this).parent().find('.penguin');
        penguin.attr("src", "https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/Tumblewyld_Shooting_Bottle_Fall.gif");
        
        $('audio#torchLight')[0].play();
        $('audio#torchLight')[0].currentTime = 0
        $('p').remove();

              
        
       
        


          currentGameArray.splice(randomProblemSelector,1);
          console.log(currentGameArray.length);
          winningCheck();
          generateNextTurn();
          console.log($(this).parent());
          setTimeout(function() {
            penguin.attr("src", "").remove();
        }, 200)
         
      });

  

    } else {
      wrongCheck();
      wrongCounter = wrongCounter +1
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
    $('.lose').hide();
    $('.win').show();
    $('audio#winSound')[0].play();
    $("audio#winSound").prop("volume", 0.75);
    $('.start').hide();
    $('.nextLevel').show();
    $(".reset").html(" ");
    $(".start").show();
    $('.tryAgain').show();
    $('p').hide();
    clearInterval(interval);
    $('audio#SlingSong')[0].pause()
    $('audio#SlingSong')[0].currentTime = 0
    console.log('you win')
    $(".hundo").append("<div class='percent'> " + percentCheck + " correct!! </div>")
    $(".hundo").show();
    // generateHearts();
    
   
    
  };
}
  
}); 


 }

 render() {
  return (
    <div class="wildGameTwo">
    
<body>

<a class="gButton" href={this.props.gButton}>
                <img src='https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/Studypup_Map_Icon.png' alt=""  class='mapIcon'/>
                </a>

<div class="layer"></div>
  <button class="skip">Skip Video</button>
  <iframe src="https://player.vimeo.com/video/469148997" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
<audio id="SlingSong">
    <source src='https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/Tumblewyld_Shooting_Song_NEW.m4a' type="audio/mpeg"/>
  </audio>
  <audio id="torchLight">
    <source src='https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/Tumblewyld_Shooting_Sound_Effect_NEW.m4a' type="audio/mpeg"/>
  </audio>
  <audio id="winSound">
    <source src='https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/YOU_WIN_SOUND.m4a' type="audio/mpeg"/>
  </audio>
  <audio id="loseSound">
    <source src='https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/YOU_LOSE_SOUND.m4a' type="audio/mpeg"/>
  </audio>
  <div class="thex">Oh no, you got 3 wrong</div>
  <div class="hundo"></div>
 
         <img class="bg_wildGameTwo" src='https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/Tumblewyld_Shooting_Background_NEW.png' alt="" />
        <div class="answers reset"></div>
        <button class="start">START</button>
          
          <img class="win" src='https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/YOU_WON_Tumblewyld_Game2.png' alt="" />

          <div class="problem reset"></div>
                
                
                <img class="lose" src='https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/YOU_LOSE_Tumblewyld_Game2.png' alt="" />

                <img src='https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/Tumblewyld_Shooting_Nova_Slingshot.png' alt="" class='novaWithSling'/>
                
                <a class="nextLevel" href={this.props.nxtlvl}>Next Level!</a>
          
          <div>
            <span id="timer">00:
              <span id="time">30</span>      
            </span>
          </div>

          <div class="thex">Oh no, you got 3 wrong</div>
          <div class="hundo"></div>
        
      

   
          


          
          

          
  
</body>
<link href="https://fonts.googleapis.com/css?family=Titan+One&display=swap" rel="stylesheet"></link>
<link href='https://fonts.googleapis.com/css?family=Orbitron' rel='stylesheet' type='text/css'></link>
</div>
    
);
  
}

}

export default WildGameTwo ;