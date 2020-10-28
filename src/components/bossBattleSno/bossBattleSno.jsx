
import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

import './bossBattleSno.css';
import $ from "jquery";


class BossBattleSno extends Component {
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



$('.bossBattleSno').on('click',function(e) {
  $('.snowball').show();
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
  }, 100, function() {
  
      $(".snowball").removeAttr('style');
      

  });
});



$('.start').on('click',function() {
$('.start').hide();
$('.win').hide();
$('.lose').hide();
$('.nextLevel').hide();
$('audio#raceMusic')[0].play();
$('.snowball').hide();
$('novaWithHose').show();





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
    $(".answers").append("<div class='house'><div class='snowmanWrapper "+'a'+index+"'><img src='../StudyPup_assets/Frosto_Flying.gif' class='snowman'><div class='answer'>" + value.answer + "</div></div></div>");
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
          $('audio#loseSound')[0].play();
          $("audio#loseSound").prop("volume", 0.75);
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
    $(this).prepend("<img src='' class='splash'>");
    var splash = $(this).parent().find('.splash');
    splash.attr("src", "../StudyPup_assets/Cocoa_Splat_Endless.gif");
    setTimeout(function() {
      splash.attr("src", "").remove();
  }, 1500)

    if (clickedAnswer === theAnswer) {
      $('p').remove();
          currentGameArray.splice(randomProblemSelector,1);
          console.log(currentGameArray.length);
          generateNextTurn();

      console.log("Correct!");
      $(this).fadeOut(1800, function() {
       
        console.log(currentGameArray.length);
        
        
       
        

      
          winningCheck();
          
          console.log($(this).parent());
         
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
    $('audio#winSound')[0].play();
    $("audio#winSound").prop("volume", 0.75);
    $(".start").show();
    $('.tryAgain').show();
    $('p').hide();
    clearInterval(interval);
    $('audio#raceMusic')[0].pause()
    $('audio#raceMusic')[0].currentTime = 0
    console.log('you win')
    // generateHearts();
    
   
    
  };
}
  
}); 


 }

 render() {
  return (
    <div class="bossBattleSno">
    
<body>
<a class="gButton" href={this.props.gButton}>
                <img src='../StudyPup_assets/Studypup_Map_Icon.png' alt=""  class='mapIcon'/>
                </a>
<div class="layer"></div>
  <button class="skip">Skip Video</button>
  <iframe src="https://player.vimeo.com/video/469148229" width="640" height="480" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
<audio id="raceMusic">
    <source src='../StudyPup_assets/Song_Snow-Con_Race.m4a' type="audio/mpeg"/>
  </audio>
  <audio id="snowballThrow">
    <source src='../StudyPup_assets/Snowball_Throw.m4a' type="audio/mpeg"/>
  </audio>
  <audio id="winSound">
    <source src='../StudyPup_assets/YOU_WIN_SOUND.m4a' type="audio/mpeg"/>
  </audio>
  <audio id="loseSound">
    <source src='../StudyPup_assets/YOU_LOSE_SOUND.m4a' type="audio/mpeg"/>
  </audio>
 
         <img class="bg_bb1" src='../StudyPup_assets/Snow_Con_Boss_Background.png' alt="" />
        <div class="answers reset"></div>
        <button class="start">START</button>
        <img class="win" src='../StudyPup_assets/YOU_WON_Snowcon_Game4.png' alt="" />
          <div class="problem reset"></div>
                
          <img class="lose" src='../StudyPup_assets/YOU_LOSE_Snowcon_Game4.png' alt="" />
                
          <a class="nextLevel" href={this.props.nxtlvl}>Next Level!</a>
          
          <div>
            <span id="timer">00:
              <span id="time">25</span>      
            </span>
          </div>
      <div class="cocoNova">
          <img src='../StudyPup_assets/hotCocoSquirt.png' alt="" class='snowball'/>
          <img src='../StudyPup_assets/nova_with_hose.png' alt="" class='novaWithHose'/>
     </div>
  
</body>
<link href="https://fonts.googleapis.com/css?family=Titan+One&display=swap" rel="stylesheet"></link>
<link href='https://fonts.googleapis.com/css?family=Orbitron' rel='stylesheet' type='text/css'></link>
</div>
    
);
  
}

}

export default BossBattleSno;