
import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

import './wildGameFour.css';
import $ from "jquery";


class WildGameFour extends Component {
    componentDidMount() {
     
      const { answerset } = this.props;



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
$('audio#moltaMusic')[0].play();
$('.snowball').hide();







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
    $(".answers").append("<div class='house'><div class='snowmanWrapper "+'a'+index+"'><img src='../StudyPup_assets/Tumblewyld_Boss_Gem3.png' class='flame'><div class='answer'>" + value.answer + "</div></div></div>");
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
    splash.attr("src", "../StudyPup_assets/Tumblewyld_Boss_Pickaxe.gif");
    setTimeout(function() {
      splash.attr("src", "").remove();
  }, 800)
    var clickedAnswer = $(this).text();
   


    if (clickedAnswer === theAnswer) {
      

      console.log("Correct!");
      $('audio#sizzle')[0].play();
      $('audio#sizzle')[0].currentTime = 0
      $(this).fadeOut(50, function() {
       
        console.log(currentGameArray.length);
        
        
       
        

        $('p').remove();
          currentGameArray.splice(randomProblemSelector,1);
          console.log(currentGameArray.length);
          winningCheck();
          generateNextTurn();
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
    <div class="wildGameFour">
    
<body>


<audio id="moltaMusic">
    <source src='../StudyPup_assets/Tumblewyld_Boss_Song.m4a' type="audio/mpeg"/>
  </audio>
  <audio id="sizzle">
    <source src='../StudyPup_assets/Tumblewyld_Boss_Sound_Pickaxe_Hit.m4a' type="audio/mpeg"/>
  </audio>

         <img class="bg_bb1" src='../StudyPup_assets/Tumblewyld_Boss_Background.png' alt="" />
         <img class="dusty" src='../StudyPup_assets/Tumblewyld_Boss_Dusty.gif' alt="" />

        <div class="answers reset"></div>
        <button class="start">START</button>
        <img class="win" src='../StudyPup_assets/YOU_WON_Tumblewyld_Game4.png' alt="" />
          <div class="problem reset"></div>
                
          <img class="lose" src='../StudyPup_assets/YOU_LOSE_Tumblewyld_Game4.png' alt="" />
                
          <a class="nextLevel" href={this.props.nxtlvl}>Next Level!</a>
          
          <div>
            <span id="timer">
              <span id="time">25</span>      
            </span>
          </div>

          
          <img class="caveStuff" src='../StudyPup_assets/Tumblewyld_Boss_Foreground.png' alt="" />

      <div class="cocoNova">
          <img src='../StudyPup_assets/Hotsva_Boss_Battle_Water_Squirt.png' alt="" class='snowball'/>
          
     </div>
  
</body>
<link href="https://fonts.googleapis.com/css?family=Titan+One&display=swap" rel="stylesheet"></link>
</div>
    
);
  
}

}

export default WildGameFour;