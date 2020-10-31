
import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

import './hotGameFour.css';
import $ from "jquery";


class HotGameFour extends Component {
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



$('.hotGameFour').on('click',function(e) {
  $('.snowball').show();
  console.log('FIRRRRRREEE');
  var parentOffset = $(this).parent().offset();
   var relX = e.pageX - parentOffset.left;
   var relY = e.pageY - parentOffset.top;
   $('audio#sizzle')[0].play();
   $('audio#sizzle')[0].currentTime = 0
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
$("audio#moltaMusic").prop("volume", 0.19);
$('audio#moltaMusic')[0].play();
$('.snowball').hide();
$('#timer').show();





$(document).mousemove(function(e) {
  
  $('.novaWithHoseMolta').css("left", e.pageX);
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
    $(".answers").append("<div class='house'><div class='snowmanWrapper "+'a'+index+"'><img src='https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/Hotsva_Boss_Battle_Flame.gif' class='flame'><div class='answer'>" + value.answer + "</div></div></div>");
    console.log("index: " + index + " problem: " + value.problem + " answer: " + value.answer );
    
  });

 ///////////////////////////////timer
  var counter = 33;
 
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
          $('audio#loseSound')[0].play();
          $("audio#loseSound").prop("volume", 0.75);
          $('#timer').hide();
          $('p').hide();
          $('audio#moltaMusic')[0].pause()
          $('audio#moltaMusic')[0].currentTime = 0
          
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
    $(this).prepend("<img src='' class='waterSplash'>");
    var splash = $(this).parent().find('.waterSplash');
    splash.attr("src", "https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/Hotsva_Boss_Battle_Water_Splat.gif");
    setTimeout(function() {
      splash.attr("src", "").remove();
  }, 1300)
    var clickedAnswer = $(this).text();
   


    if (clickedAnswer === theAnswer) {
      currentGameArray.splice(randomProblemSelector,1);
      $('p').remove();
      winningCheck();
      generateNextTurn();
      console.log("Correct!");
      $('audio#sizzle')[0].play();
      $('audio#sizzle')[0].currentTime = 0
      $(this).fadeOut(1200, function() {
       
        console.log(currentGameArray.length);
        
        
       
        

        
         
          console.log(currentGameArray.length);
         
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
    $('audio#winSound')[0].play();
    $("audio#winSound").prop("volume", 0.75);
    $('.nextLevel').show();
    $(".reset").html(" ");
    $(".start").show();
    $('.tryAgain').show();
    $('p').hide();
    clearInterval(interval);
    $('audio#moltaMusic')[0].pause()
    $('audio#moltaMusic')[0].currentTime = 0
    console.log('you win')
    // generateHearts();
    
   
    
  };
}
  
}); 


 }

 render() {
  return (
    <div class="hotGameFour">
    
<body>
<a class="gButton" href={this.props.gButton}>
                <img src='https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/Studypup_Map_Icon.png' alt=""  class='mapIcon'/>
                </a>

<div class="layer"></div>
  <button class="skip">Skip Video</button>
  <iframe src="https://player.vimeo.com/video/469146958" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
<audio id="moltaMusic">
    <source src='https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/Hotsva_Boss_Battle_Song.m4a' type="audio/mpeg"/>
  </audio>
  <audio id="sizzle">
    <source src='https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/Hotsva_Boss_Battle_Sound_Sizzle.m4a' type="audio/mpeg"/>
  </audio>
  <audio id="winSound">
    <source src='https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/YOU_WIN_SOUND.m4a' type="audio/mpeg"/>
  </audio>
  <audio id="loseSound">
    <source src='https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/YOU_LOSE_SOUND.m4a' type="audio/mpeg"/>
  </audio>
 
         <img class="bg_bb1" src='https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/Hotsva_Boss_Battle_Background.png' alt="" />
        <div class="answers reset"></div>
        <button class="start">START</button>
        <img class="win" src='https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/YOU_WON_Hotsva_Game4.png' alt="" />
          <div class="problem reset"></div>
                
          <img class="lose" src='https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/YOU_LOSE_Hotsva_Game4.png' alt="" />
                
          <a class="nextLevel" href={this.props.nxtlvl}>Next Level!</a>
          
          <div>
            <span id="timer">00:
              <span id="time">30</span>      
            </span>
          </div>

          
          <img class="molta" src='https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/Hotsva_Boss_Battle_Molta.gif' alt="" />

      <div class="cocoNova">
          <img src='https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/Hotsva_Boss_Battle_Water_Squirt.png' alt="" class='snowball'/>
          <img src='https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/Hotsva_Boss_Battle_Nova_Hose.png' alt="" class='novaWithHoseMolta'/>
     </div>
  
</body>
<link href="https://fonts.googleapis.com/css?family=Titan+One&display=swap" rel="stylesheet"></link>
<link href='https://fonts.googleapis.com/css?family=Orbitron' rel='stylesheet' type='text/css'></link>
</div>
    
);
  
}

}

export default HotGameFour;