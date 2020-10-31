
import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

import './pupGameFour.css';
import $ from "jquery";


class PupGameFour extends Component {
    componentDidMount() {
     
      const { answerset } = this.props;

      $('.start').hide();
      $('.nextLevel').on('click',function() { 
        $('.layer').show();
        $('.finalVid').show();
        $('.skip').remove();
        $('.win').hide();
        $('.nextLevel').hide();

      
       
      
      });

      $('.skip').on('click',function() { 
        $('.layer').hide();
        $('.vid1').remove();
        $('.skip').remove();
        $('.start').show();
      
      });

$('.finalVid').hide();
$('.win').hide();
$('.lose').hide();
$('.nextLevel').hide();



// $('.b').on('click',function(e) {
//   $('.snowball').show();
//   console.log('FIRRRRRREEE');
//   var parentOffset = $(this).parent().offset();
//    var relX = e.pageX - parentOffset.left;
//    var relY = e.pageY - parentOffset.top;
//    $('audio#snowballThrow')[0].play();
//    $('audio#snowballThrow')[0].currentTime = 0
//   $(".snowball").animate({
//       width: '10px',
//       left: relX,
//       top: relY
//   }, 100, function() {
  
//       $(".snowball").removeAttr('style');
      

//   });
// });


$('.start').on('click',function() {
$('.start').hide();
$('.win').hide();
$('.lose').hide();
$('.nextLevel').hide();
$("audio#SlingSong").prop("volume", 0.29);
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
    $(".answers").append("<div class='house'><div class='snowmanWrapper "+'a'+index+"'><img src='https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/Puptune_Boss_Robo_Tootles.gif' class='snowman'><div class='answer'>" + value.answer + "</div></div></div>");
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
          $('audio#loseSound')[0].play();
          $("audio#loseSound").prop("volume", 0.75);
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


    if (clickedAnswer === theAnswer) {
      $(this).find('.snowman').remove();
      $(this).find('.answer').remove();
      $(this).prepend("<img src='' class='splash'>");
      var splash = $(this).parent().find('.splash');
      splash.attr("src", "https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/Puptune_Boss_Robo_Tootles_Explode.gif");
      setTimeout(function() {
        splash.attr("src", "").remove();
    }, 1250)
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
    $('audio#winSound')[0].play();
    $("audio#winSound").prop("volume", 0.88);
    $('.nextLevel').show();
    $(".reset").html(" ");
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
    <div class="pupGameFour">
    
<body>
<a class="gButton" href={this.props.gButton}>
                <img src='https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/Studypup_Map_Icon.png' alt=""  class='mapIcon'/>
   </a>

<div class="layer"></div>
  <button class="skip">Skip Video</button>
  <iframe class="vid1" src="https://player.vimeo.com/video/474078529" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
  <iframe  class="finalVid" src="https://player.vimeo.com/video/474081107" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
<audio id="raceMusic">
    <source src='https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/Puptune_Boss_Song.m4a' type="audio/mpeg"/>
  </audio>
  <audio id="snowballThrow">
    <source src='https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/Puptune_Boss_Sound_Effect.m4a' type="audio/mpeg"/>
  </audio>
  <audio id="winSound">
    <source src='https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/YOU_WIN_SOUND.m4a' type="audio/mpeg"/>
  </audio>
  <audio id="loseSound">
    <source src='https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/YOU_LOSE_SOUND.m4a' type="audio/mpeg"/>
  </audio>
 
         <img class="bg_bb1" src='https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/Puptune_Boss_Background.png' alt="" />
        <div class="answers reset"></div>
        <button class="start">START</button>
        <img class="win" src='https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/YOU_WON_Puptune_Game4.png' alt="" />
          <div class="problem reset"></div>
                
          <img class="lose" src='https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/YOU_LOSE_Puptune_Game4.png' alt="" />
                
          <div class="nextLevel">Save The World!!</div>
          
          <div>
            <span id="timer">00:
              <span id="time">30</span>      
            </span>
          </div>
      <div class="cocoNova">
          <img src='https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/hotCocoSquirt.png' alt="" class='snowball'/>
          <img src='https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/Puptune_Boss_Nova_w_Trophy.png' alt="" class='novaWithHose'/>
     </div>
     <img class="mountains" src='https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/Puptune_Boss_Foreground.png' alt="" />
     <img src='https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/Puptune_Boss_Tootles.gif' alt="" class='tootles'/>
</body>
<link href="https://fonts.googleapis.com/css?family=Titan+One&display=swap" rel="stylesheet"></link>
<link href='https://fonts.googleapis.com/css?family=Orbitron' rel='stylesheet' type='text/css'></link>
</div>
    
);
  
}

}

export default PupGameFour;