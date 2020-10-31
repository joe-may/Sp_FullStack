
import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import ReactPlayer from "react-player"
import './gameOne.css';

import $ from "jquery";


class GameOne extends Component {
    componentDidMount() {
     
      const { answerset } = this.props;


      
      $("audio#snowballThrowd").prop("volume", 0.7);
      $('.novaIntro').hide();
      $('.snowball').hide();
      $('.start').hide();
      $('.treeOne').hide();
      $('.treeTwo').hide();
      $('.treeThree').hide();
      $('.treeFour').hide();
      $('.treeFive').hide();
      $('.treeSix').hide();
      $('.treeSeven').hide(); 
      $('.treeEight').hide();
      $('.treeNine').hide();
      $('.treeTen').hide();
      $('.skip').on('click',function() { 
        $('.layer').hide();
        $('iframe').remove();
        $('.skip').remove();
        $('.treeOne').show();
        $('.start').show();
        $('.treeOne').show();
        $('.treeTwo').show();
        $('.treeThree').show();
        $('.treeFour').show();
        $('.treeFive').show();
        $('.treeSix').show();
        $('.treeSeven').show(); 
        $('.treeEight').show();
        $('.treeNine').show();
        $('.treeTen').show();
        $('.novaIntro').show();
        setTimeout(function() {
          $('.novaIntro').animate({
            left: "85%"
          }, 2000);
      });
      });

      
$('.win').hide();
$('.lose').hide();
$('.nextLevel').hide();
$('.novaThrow').show();



$('.game1').on('click',function(e) {
  console.log('FIRRRRRREEE');
  var parentOffset = $(this).parent().offset();
   var relX = e.pageX - parentOffset.left;
   var relY = e.pageY - parentOffset.top;
   $('audio#snowballThrowd')[0].play();
   $('audio#snowballThrowd')[0].currentTime = 0
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
$("audio#iglooSong").prop("volume", 0.19);
$('audio#iglooSong')[0].play();
$("audio#snowballThrowd").prop("volume", 0.7);



$('iframe').hide();
$('.novaThrow').show();
$('#timer').show();
$('p').hide();
$('.layer').hide();
$('p').show();
$('.novaIntro').hide();







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
    $(".answers").append("<div class='house'><div class='iglooWrapper "+'a'+index+"'><img src='https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/igloo.png' class='igloo'><img src='https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/Penguin_Walk_Gif_Faster.gif' class='penguin hide'><div class='answer'>" + value.answer + "</div></div></div>");
    console.log("index: " + index + " problem: " + value.problem + " answer: " + value.answer );
  });

 
  var counter = 40;
 

  
  var interval = setInterval(function() {
    counter--;
    // Display 'counter' wherever you want to display it.
    if (counter <= 0 && currentGameArray.length > 0 ) {
         clearInterval(interval);
          // $('#time').text(counter);
          console.log("you lose");
          $('.lose').show();
          $(".reset").html(" ");
          $('#timer').hide();
          $(".start").show();
           
          $('.treeOne').hide();
          $('.treeTwo').hide();
          $('.treeThree').hide();
          $('.treeFour').hide();
          $('.treeFive').hide();
          $('.treeSix').hide();
          $('.treeSeven').hide(); 
          $('.treeEight').hide();
          $('.treeNine').hide();
          $('.treeTen').hide();
          $('p').remove();
          $('p').hide();
          $('audio#iglooSong')[0].pause()
          $('audio#iglooSong')[0].currentTime = 0
          $('audio#loseSound')[0].play();
          $("audio#loseSound").prop("volume", 0.);
          
          
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
    splash.attr("src", "https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/snowball_hit_delay2.gif");
    setTimeout(function() {
      splash.attr("src", "").remove();
  }, 1000)

    if (clickedAnswer === theAnswer) {
      
      $('p').remove();
      currentGameArray.splice(randomProblemSelector,1);
      console.log(currentGameArray.length);
      winningCheck();
      generateNextTurn();
      console.log("Correct!");
      $(this).find('.answer').fadeOut(800, function() {
        $(this).parent('.iglooWrapper').prepend("<img src='' class='penguin'>");
        console.log(currentGameArray.length);
        var penguin = $(this).parent().find('.penguin');
        penguin.attr("src", "https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/Penguin_Walk_Gif_Faster.gif");
       
              
        
       
        


          // currentGameArray.splice(randomProblemSelector,1);
          // console.log(currentGameArray.length);
          // winningCheck();
          // generateNextTurn();
          console.log($(this).parent());
          setTimeout(function() {
            penguin.attr("src", "").remove();
        }, 1700)
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
    $('audio#winSound')[0].play();
    $("audio#winSound").prop("volume", 0.6);
    $('.win').show();
    $('.nextLevel').show();
    $(".reset").html(" ");
    $(".start").show();
    $('.tryAgain').show();
    $('p').hide();
   
    $('.treeOne').hide();
    $('.treeTwo').hide();
    $('.treeThree').hide();
    $('.treeFour').hide();
    $('.treeFive').hide();
    $('.treeSix').hide();
    $('.treeSeven').hide(); 
    $('.treeEight').hide();
    $('.treeNine').hide();
    $('.treeTen').hide();
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
    <div class="layer">
    </div>
  
<body>

<button class="skip">Skip Video</button>
<iframe src="https://player.vimeo.com/video/469147642" width="640" height="480" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
<audio id="iglooSong">
    <source src='https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/Song_Snow-Con_Level_1.m4a' type="audio/mpeg"/>
  </audio>
  <audio id="winSound">
    <source src='https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/YOU_WIN_SOUND.m4a' type="audio/mpeg"/>
  </audio>
  <audio id="loseSound">
    <source src='https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/YOU_LOSE_SOUND.m4a' type="audio/mpeg"/>
  </audio>
  <audio id="snowballThrowd">
    <source src='https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/Nova_Throws_Snow.m4a' type="audio/mpeg"/>
  </audio>
  
         <img class="bg_game1" src='https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/penguin-level-backdrop.jpeg' alt="" />
        <div class="answers reset"></div>
        <button class="start">START</button>
          
          <img class="win" src='https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/YOU_WON_Snowcon_Game1.png' alt="" />

          <div class="problem reset"></div>
                
                
                <img class="lose" src='https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/YOU_LOSE_Snowcon_Game1.png' alt="" />
                
                <a class="nextLevel" href={this.props.nxtlvl}>Next Level!</a>
                <a class="gButton" href={this.props.gButton}>
                <img src='https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/Studypup_Map_Icon.png' alt=""  class='mapIcon'/>
                </a>

          
          <div>
            <span id="timer">00:
              <span id="time"></span>      
            </span>
          </div>
    
          <img src='https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/Snowball-Transparent-Background.png' alt="" class='snowball'/>
          <img src='https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/Nova_standing.png' alt="" class='novaThrow'/>
          {/* <img src='https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/Nova_standing.png' alt="" class='novaIntro'/> */}
          
          

          
          <img src='https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/snow_con_tree.png' alt="" class='treeOne'/>
          <img src='https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/snow_con_tree.png' alt="" class='treeTwo'/>
          <img src='https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/snow_con_tree.png' alt="" class='treeThree'/>
          <img src='https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/snow_con_tree.png' alt="" class='treeFour'/>
          <img src='https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/snow_con_tree.png' alt="" class='treeFive'/>
          <img src='https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/snow_con_tree.png' alt="" class='treeSix'/>
          <img src='https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/snow_con_tree.png' alt="" class='treeSeven'/>
          <img src='https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/snow_con_tree.png' alt="" class='treeEight'/>
          <img src='https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/snow_con_tree.png' alt="" class='treeNine'/>
          <img src='https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/snow_con_tree.png' alt="" class='treeTen'/>
          
          

        
  
</body>
<link href="https://fonts.googleapis.com/css?family=Titan+One&display=swap" rel="stylesheet"></link>
<link href='https://fonts.googleapis.com/css?family=Orbitron' rel='stylesheet' type='text/css'></link>
</div>
    
);
  
}

}

export default GameOne;