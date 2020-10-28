
import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

import './cozGameThree.css';
import $ from "jquery";


class CozGameThree extends Component {
    componentDidMount() {

      const { answerset } = this.props;
     
      $('.start').hide();

      $('.skip').on('click',function() { 
        $('.layer').hide();
        $('iframe').remove();
        $('.skip').remove();
        $('.start').show();
        $('.novaWithSling').show();
      
      });


$('.win').hide();
$('.lose').hide();
$('.nextLevel').hide();
$('.novaWithSling').hide();
$('.snowball').hide();

$('.cozGameThree').on('click',function(e) {
  console.log('FIRRRRRREEE');
  var parentOffset = $(this).parent().offset();
   var relX = e.pageX - parentOffset.left;
   var relY = e.pageY - parentOffset.top;
  //  $('audio#snowballThrow')[0].play();
  //  $('audio#snowballThrow')[0].currentTime = 0
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
$('.nextLevel').hide();
$("audio#SlingSong").prop("volume", 0.19);
$('audio#SlingSong')[0].play();
$('.novaWithSling').show();
$('.snowball').show();


// $(document).mousemove(function(e) {
  
//   $('.novaWithSling').css("left", e.pageX);
 

// });


var currentGameArray = [];



answerset.forEach(function(questions) {
  currentGameArray.push(questions)
})


  var randomProblemSelector = Math.floor((Math.random() * currentGameArray.length));
  var selectedProblem = currentGameArray[randomProblemSelector].problem;
  var theAnswer = currentGameArray[randomProblemSelector].answer;

console.log(currentGameArray);

  $.each(currentGameArray, function(index,value){
    $(".answers").append("<div class='house'><div class='iglooWrapper "+'a'+index+"'><img src='../StudyPup_assets/Cozmo_Pizza_House2.png' class='igloo'><img src='../StudyPup_assets/Tumblewyld_Shooting_Bottle_Fall.gif' class='penguin hide'><div class='answer'>" + value.answer + "</div></div></div>");
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
          $("audio#loseSound").prop("volume", 0.18);
          $(".reset").html(" ");
          $(".start").show();
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
     
      $(this).find('.answer').fadeOut(1, function() {
        $(this).parent('.iglooWrapper').prepend("<img src='' class='penguin'>");
        console.log(currentGameArray.length);
        var penguin = $(this).parent().find('.penguin');
        penguin.attr("src", "../StudyPup_assets/Cozmo_Pizza_Bug_Jump.gif");
        
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
        }, 1200)
         
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
    $('.lose').hide();
    $('.win').show();
    $('audio#winSound')[0].play();
    $("audio#winSound").prop("volume", 0.18);
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
    // generateHearts();
    
   
    
  };
}
  
}); 


 }

 render() {
  return (
    <div class="cozGameThree">
    
<body>
<a class="gButton" href={this.props.gButton}>
                <img src='../StudyPup_assets/Studypup_Map_Icon.png' alt=""  class='mapIcon'/>
  </a>
<div class="layer"></div>
  <button class="skip">Skip Video</button>
  <iframe src="https://player.vimeo.com/video/469319770" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
<audio id="SlingSong">
    <source src='../StudyPup_assets/Cozmo_Pizza_Song.m4a' type="audio/mpeg"/>
  </audio>
  <audio id="torchLight">
    <source src='../StudyPup_assets/Cozmo_Pizza_Sound_Effect.m4a' type="audio/mpeg"/>
  </audio>
  <audio id="winSound">
    <source src='../StudyPup_assets/YOU_WIN_SOUND.m4a' type="audio/mpeg"/>
  </audio>
  <audio id="loseSound">
    <source src='../StudyPup_assets/YOU_LOSE_SOUND.m4a' type="audio/mpeg"/>
  </audio>
 
         <img class="bg_cozGameThree" src='../StudyPup_assets/Cozmo_Pizza_Background.png' alt="" />
        <div class="answers reset"></div>
        <button class="start">START</button>
          
          <img class="win" src='../StudyPup_assets/YOU_WON_Cozmo_Game1.png' alt="" />

          <div class="problem reset"></div>
                
                
                <img class="lose" src='../StudyPup_assets/YOU_LOSE_Cozmo_Game4.png' alt="" />

                <img src='../StudyPup_assets/Cozmo_Pizza_Nova.png' alt="" class='novaWithSling'/>
                
                <a class="nextLevel" href={this.props.nxtlvl}>Next Level!</a>
                <img src='../StudyPup_assets/pizza.png' alt="" class='snowball'/>
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

export default CozGameThree ;