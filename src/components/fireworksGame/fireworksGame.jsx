
import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

import './fireworksGame.css';
import $ from "jquery";


class FireworksGame extends Component {
    componentDidMount() {
     
      var { answerset } = this.props;
      var { answerset2 } = this.props;

     
      var changeAnswerset = function () {
        if (levelCont === 2) {
          answerset = answerset2
      }};
      

var levelCont =  1  
$('.win').hide();
$('.lose').hide();
$('.nextLevel').hide();






$('.start').on('click',function() {
  changeAnswerset();
$('.start').hide();
$('.win').hide();
$('.lose').hide();
$('.nextLevel').hide();
$("audio#raceMusic").prop("volume", 0.29);
$('audio#raceMusic')[0].play();
$('.snowball').hide();





$(document).mousemove(function(e) {
  
  $('.novaWithHose').css("left", e.pageX);
  $('.snowball').hide();
  $('.snowball').css("left", e.pageX);

});

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
    $(".answers").append("<div class='house'><div class='snowmanWrapper "+'a'+index+"'><img src='https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/efad.gif' class='snowman'><div class='answer'>" + value.answer + "</div></div></div>");
    console.log("index: " + index + " problem: " + value.problem + " answer: " + value.answer );
    
  });

 ///////////////////////////////timer
  var counter = 30;
 
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
          $('p').hide();
          $('audio#raceMusic')[0].pause()
          $('audio#raceMusic')[0].currentTime = 0
          
        return;
    }else{
      $('#time').text(counter);
      
      console.log("Timer --> " + counter);
    }
}, 1000);

 ////////////////////////////////// 

 ///////////////random movement


////////////////change answerset



    
 
 
  



 /////////////////////////////////

  // display the selected problem on the screen
  
  var currentEquation = function () {
    var problemHtml = $('<p></p>').html(selectedProblem);
    return $(".problem").append(problemHtml);
      
  }
 
  currentEquation();


  // when answer is clicked on
  $('.snowmanWrapper').on('click',function(e) {
    var clickedAnswer = $(this).text();


    if (clickedAnswer === theAnswer) {
  
      $(this).find('.snowman').remove();
      
      $(this).find('.answer').remove();
      $(this).prepend("<img src='' class='splash'>");
      var splash = $(this).parent().find('.splash');
      splash.attr("src", "https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/firework_exploding.gif");
      setTimeout(function() {
        splash.attr("src", "").remove();
    }, 1050)
    $('audio#snowballThrow').prop("volume", 0.99);
   $('audio#snowballThrow')[0].play();

   $('audio#snowballThrow')[0].currentTime = 0
      console.log("Correct!");
      

   
       
        console.log(currentGameArray.length);
        
        
       
        

        $('p').remove();
          currentGameArray.splice(randomProblemSelector,1);
          console.log(currentGameArray.length);
          winningCheck();
          generateNextTurn();
          console.log($(this).parent());
         
   

  

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
    $('audio#raceMusic')[0].pause()
    $('audio#raceMusic')[0].currentTime = 0
    
    levelCont = levelCont + 1
    console.log(levelCont);

    console.log('you win')
    // generateHearts();
    
   
    
  };
}
  
}); 






 }

 render() {
  return (
    <div class="fireworksGame">
    
<body>
<a class="gButton" href={this.props.gButton}>
                <img src='https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/791-removebg-preview.png' alt=""  class='mapIcon'/>
   </a>



<audio id="raceMusic">
    <source src='https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/firework_song.mp3' type="audio/mpeg"/>
  </audio>
  <audio id="snowballThrow">
    <source src='https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/firework_sound_effect.mp3' type="audio/mpeg"/>
  </audio>
 
         <img class="bg_bb1" src='https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/firework-background.png' alt="" />
        <div class="answers reset"></div>
        <button class="start">START</button>
        <img class="win" src='https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/firework_you_won_NEW.png' alt="" />
          <div class="problem reset"></div>
                
          <img class="lose" src='https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/firework_you_lose_NEW.png' alt="" />
                
          
          
          <div>
            <span id="timer">00:
              <span id="time"></span>      
            </span>
          </div>
    
     <img class="mountains" src='https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/Puptune_Boss_Foreground.png' alt="" />
    
</body>
<link href="https://fonts.googleapis.com/css?family=Titan+One&display=swap" rel="stylesheet"></link>
<link href='https://fonts.googleapis.com/css?family=Orbitron' rel='stylesheet' type='text/css'></link>
</div>
    
);
  
}

}

export default FireworksGame;