
import React, { Component } from 'react';
import './wildGameOne.css';
import $ from "jquery";


class WildGameOne extends Component {
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
$('.create').hide();
$('.nextLevel').hide();



//////up counter 
$('.countUp').click(function() {
  $('.output').html(function(i, val) { return val*1+1 });
});
///// down counter
$('.countDown').click(function() {
  $('.output').html(function(i, val) { return val*1-1 });
});


////snowball throw




$('.start').on('click',function() {
$('.start').hide();
$('.win').hide();
$('.lose').hide();
$('.create').show();
$('.nextLevel').hide();
$("audio#icecreamSong").prop("volume", 0.19);
$('audio#icecreamSong')[0].play();


var currentGameArray = [];
// var playerLives = 0;


answerset.forEach(function(questions) {
  currentGameArray.push(questions)
});


  var randomProblemSelector = Math.floor((Math.random() * currentGameArray.length));
  var selectedProblem = currentGameArray[randomProblemSelector].problem;
  var theAnswer = currentGameArray[randomProblemSelector].answer;
    

console.log(currentGameArray);

console.log(selectedProblem);

console.log(randomProblemSelector);


 
  var counter = 50;
 
////////////timer
  var interval = setInterval(function() {
    counter--;
    // Display 'counter' wherever you want to display it.
    if (counter <= 0 && currentGameArray.length > 0) {
         clearInterval(interval);
          // $('#time').text(counter);
          console.log("you lose");
          $('.lose').show();
          currentEquation = null;
          currentGameArray =null;
          theAnswer = null;
          selectedProblem = null;
          randomProblemSelector = null;
         $('.start').show();
         $('audio#loseSound')[0].play();
         $("audio#loseSound").prop("volume", 0.75);
         $('#timer').hide();
          $(".reset").html(" ");
          $('p').hide();
          $('audio#icecreamSong')[0].pause()
          $('audio#icecreamSong')[0].currentTime = 0
          
        return;
    }else{
      $('#time').text(counter);
      
      console.log("Timer --> " + counter);
    }
}, 1000);

  

  // display the selected problem on the screen
  
  var currentEquation = function () {
    var problemHtml = $('<p></p>').html(selectedProblem);
    return $(".problem").html(problemHtml);
   
      
  }
 
  currentEquation();



  
///////////change button img
$('.countUp').click(function(){
  $('.countUp').hide();
  $('audio#buttonSound')[0].play();
  $('audio#buttonSound')[0].currentTime = 0
  setTimeout(function() {
 $('.countUp').show();

}, 100);
});

$('.countDown').click(function(){
  $('.countDown').hide();
  $('audio#buttonSound')[0].play();
  $('audio#buttonSound')[0].currentTime = 0
  setTimeout(function() {
 $('.countDown').show();
}, 100);
});
  


  // when answer is clicked on
  $('.create').on('click',function() {
    var clickedAnswer = $('.output').text();
    
    console.log(theAnswer);
    console.log(clickedAnswer);
    console.log(selectedProblem);

    
    if (clickedAnswer === theAnswer) {
      console.log("Correct!");

      console.log(currentGameArray.length);
      $('audio#swoopboop')[0].play();
      $('audio#swoopboop')[0].currentTime = 0
      $('.greenBox').prepend("<img src='' class='penguinIcecream'>");
      var penguin = $('.penguinIcecream');
      penguin.attr("src", "https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/Tumblewyld_Sass_Bottle_FIll.gif");
      

      
      $('p').remove();
      currentGameArray.splice(randomProblemSelector,1);
     
        


        generateNextTurn();
          console.log(currentGameArray);
          console.log(currentGameArray.length);
          console.log(currentGameArray[randomProblemSelector]);
          
          winningCheck();
          console.log($(this).parent());
          console.log(selectedProblem);
          
  
          setTimeout(function() {
            penguin.attr("src", "").remove();
        }, 4000);

    } else {

     console.log('wrong!!!!');
    };
  });
   
  


  function generateNextTurn() {
    if (currentGameArray.length === 0){
    return;
    }
    randomProblemSelector = Math.floor((Math.random() * currentGameArray.length));
    selectedProblem = currentGameArray[randomProblemSelector].problem;
    theAnswer = currentGameArray[randomProblemSelector].answer;
   

    var problemHtml = $('<p></p>').html(selectedProblem);
    $(".problem").append(problemHtml);
    
  }
  

  function winningCheck() {
  
  if (currentGameArray.length > 0){
    console.log('keep playing');
  } else {
    $('.nextLevel').show();
    clearInterval(interval);
    $('.win').show();
    $('audio#winSound')[0].play();
    $("audio#winSound").prop("volume", 0.75);
    $(".reset").html(" ");
    
    $('.tryAgain').show();
    generateNextTurn();
    $('p').remove();
    currentEquation = null;
    currentGameArray =null;
    theAnswer = null;
    selectedProblem = null;
    randomProblemSelector = null;
    console.log('keep playing');
    console.log(currentGameArray);
    console.log('you win');
    $('audio#icecreamSong')[0].pause()
    $('audio#icecreamSong')[0].currentTime = 0

  };
}
  
}); 



 }

 render() {
  return (
    <div class="wildGameOne">
    <body>
    <a class="gButton" href={this.props.gButton}>
                <img src='https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/Studypup_Map_Icon.png' alt=""  class='mapIcon'/>
                </a>


    <div class="layer"></div>
  <button class="skip">Skip Video</button>
  <iframe src="https://player.vimeo.com/video/469148638" width="640" height="480" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
    <img class="backgroundSno2" src="https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/Tumblewyld_Sass_Background.png"alt=""/>
  <audio id="swoopboop">
    <source src='https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/Tumblewyld_Sass_Sound_Pour.png.mp3' type="audio/mpeg"/>
  </audio>
  <audio id="buttonSound">
    <source src='https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/Button_Click_Up.m4a' type="audio/mpeg"/>
  </audio>
  <audio id="icecreamSong">
    <source src='https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/Tumblewyld_Sass_Song.m4a' type="audio/mpeg"/>
  </audio>
  <audio id="wrongDing">
    <source src='https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/Wrong_Ding.m4a' type="audio/mpeg"/>
  </audio>
  
  <audio id="winSound">
    <source src='https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/YOU_WIN_SOUND.m4a' type="audio/mpeg"/>
  </audio>
  <audio id="loseSound">
    <source src='https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/YOU_LOSE_SOUND.m4a' type="audio/mpeg"/>
  </audio>
 
  
    
    <img src='https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/Tumblewyld_Sass_Pipes.png' alt="" class='skeletonBackground'/>
      
      <div class="answers reset"></div>
      <button class="start">START</button>
      

     
        <img class="win" src='https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/YOU_WON_Tumblewyld_Game1.png' alt="" />
        <a class="nextLevel" href={this.props.nxtlvl}>Next Level!</a>
     
        
  <div class='pinkBoxAndGif'>
      <div class='pinkBox'>
        <img src='https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/Tumblewyld_Sass_Barrel_1.png' alt=""  class='bbox'/>
        <div class="problem reset"></div>
        </div>

     </div>
  
     <div class="brownBox">
      <button class="create">CREATE</button>
      <img src='https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/Tumblewyld_Sass_Barrell_2.png' alt="" class='ybox'/>
       <div class="guessCounter">
    
          <img src='https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/Hotsva_HotSauce_Button_Up_Unclicked.png'alt=""  class='countUp'/>
          <img src='https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/Hotsva_HotSauce_Button_Up_Clicked.png'alt=""  class='countUpClicked'/>
  
          <img src='https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/Hotsva_HotSauce_Button_Down_Unclicked.png'alt=""  class='countDown'/>
          <img src='https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/Hotsva_HotSauce_Button_Down_Clicked.png'alt=""  class='countDownClicked'/>


        
      </div>
        <div class='cocoaAndOutput'>
          <img src='https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/Tumblewyld_Sass_Droplet_Icon.png'alt=""  class='cocoa'/>
          <div class="output">3</div>
       </div>
    </div>
  
    <div class='greenBoxAndGif'></div>
    <div class='greenBox'>
      
        <img src='https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/Tumblewyld_Sass_Barrell_3.png' alt="" class='gbox'/>
      
      
  </div>
 
      <img class="lose" src='https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/YOU_LOSE_Tumblewyld_Game1.png' alt="" />
     

      <div>
        <span id="timer">00:
          <span id="time">50</span>      
        </span>
      </div>
      <link href="https://fonts.googleapis.com/css?family=Titan+One&display=swap" rel="stylesheet"></link>
      <link href='https://fonts.googleapis.com/css?family=Orbitron' rel='stylesheet' type='text/css'></link>
  </body>
  </div>
);
  
}

}

export default WildGameOne;