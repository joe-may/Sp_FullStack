
import React, { Component } from 'react';
import './hotGameOne.css';
import $ from "jquery";


class HotGameOne extends Component {
    componentDidMount() {
      const { answerset } = this.props;
      var counter = 40;

      var wrongCounter = 1
      
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
$('.restart3').hide();


//////up counter 

var incrementedValue = 0;
$('.output').html(answerset[0].answer);
//////up counter 
$('.cycleAnswers').click(function() {



  if ($(this).hasClass("countDown")){
    
    if ((parseInt(incrementedValue) - 1) <= 1 ) {
      incrementedValue = answerset.length - 1; 
    } else {
      incrementedValue = incrementedValue - 1 ;
    };
  } else {
    if (answerset.length - 1 <= incrementedValue) {
      incrementedValue = 0; 
    } else {
      incrementedValue++
    };
  }

  // alert(incrementedValue)

  $('.output').html(answerset[parseInt(incrementedValue)].answer);


  
  //alert(incrementedValue);
  
  $('.output').html(answerset[parseInt(incrementedValue)].answer);
  

});


////snowball throw




$('.start').on('click',function() {
  wrongCounter = 1
  wrongCheck();
  counter = 40;
  $(".thex").hide();
  $(".hundo").hide();
$('.start').hide();
$('.win').hide();
$('.lose').hide();
$('.create').show();
$('.nextLevel').hide();
$("audio#icecreamSong").prop("volume", 0.19);
$('audio#icecreamSong')[0].play();
$('#timer').show();


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

$.each(currentGameArray, function(index,value){
  $(".answers").append("<div class='house'><div class='iglooWrapper "+'a'+index+"'><div class='answer'>" + value.answer + "</div></div></div>");
  console.log("index: " + index + " problem: " + value.problem + " answer: " + value.answer );
}); 
 
  
 
////////////timer
  var interval = setInterval(function() {
    counter--;
    // Display 'counter' wherever you want to display it.
    if (counter <= 0 && currentGameArray.length > 0) {
         clearInterval(interval);
          // $('#time').text(counter);
          console.log("you lose");
          $('.lose').show();
          currentGameArray =null;
          theAnswer = null;
          selectedProblem = null;
          randomProblemSelector = null;
          $('.restart3').show();
          $('#timer').hide();

          $(".reset").html(" ");
          $('.start').show();
          $('p').hide();
          $('audio#loseSound')[0].play();
          $("audio#loseSound").prop("volume", 0.75);
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
  $('.iglooWrapper').on('click',function() {
    var clickedAnswer = $(this).text();
    
    console.log(theAnswer);
    console.log(clickedAnswer);
    console.log(selectedProblem);

    
    if (clickedAnswer === theAnswer) {
      console.log("Correct!");

      console.log(currentGameArray.length);
      // $('audio#swoopboop')[0].play();
      // $('audio#swoopboop')[0].currentTime = 0
      $('.greenBox').prepend("<img src='' class='penguinIcecream'>");
      var penguin = $('.penguinIcecream');
      penguin.attr("src", "https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/Hotsva_HotSauce_Nova.gif");
      

      $(this).remove();
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
        }, 5900);

    } else {
      wrongCheck();
      wrongCounter = wrongCounter +1
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
    $('.start').hide();
    $('.tryAgain').show();
    $(".hundo").append("<div class='percent'> " + percentCheck + " correct!! </div>")
    $(".hundo").show();
    
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
    <div class="hotGameOne" style ={ { backgroundImage: "url('https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/Hotsva_HotSauce_Background2.png')"} }>
    <body>
    <a class="gButton" href={this.props.gButton}>
                <img src='https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/Studypup_Map_Icon.png' alt=""  class='mapIcon'/>
                </a>
    <div class="layer"></div>
  <button class="skip">Skip Video</button>
  
  <iframe src="https://player.vimeo.com/video/469133805" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
  {/* <audio id="swoopboop">
    <source src='https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/Hotsva_HotSauce_Sound_Scream.mp3' type="audio/mpeg"/>
  </audio> */}
  <audio id="buttonSound">
    <source src='https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/Button_Click_Up.m4a' type="audio/mpeg"/>
  </audio>
  <audio id="icecreamSong">
    <source src='https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/Hotsva_HotSauce_Song.m4a' type="audio/mpeg"/>
  </audio>
  <audio id="winSound">
    <source src='https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/YOU_WIN_SOUND.m4a' type="audio/mpeg"/>
  </audio>
  <audio id="loseSound">
    <source src='https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/YOU_LOSE_SOUND.m4a' type="audio/mpeg"/>
  </audio>
  <audio id="wrongDing">
    <source src='https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/Wrong_Ding.m4a' type="audio/mpeg"/>
  </audio>
 
  
  <div class="thex">Oh no, you got 3 wrong</div>
  <div class="hundo"></div>
    <img src='https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/Hotsva_HotSauce_Pipes.png' alt="" class='skeletonBackground'/>
      
      <div class="answers reset"></div>
      <button class="start">START</button>
      

     
        <img class="win" src='https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/YOU_WON_Hotsva_Game1.png' alt="" />
        <a class="nextLevel" href={this.props.nxtlvl}>Next Level!</a>
     
        
  <div class='pinkBoxAndGif'>
      <div class='pinkBox'>
        <img src='https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/Hotsva_HotSauce_Box1.png' alt=""  class='bbox'/>
        <div class="problem reset"></div>
        </div>
        <img src='https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/Hotsva_HotSauce_Propellers.gif' alt=""  class='spinner'/>
     </div>
  
     <div class="brownBox">

      <img src='https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/Hotsva_HotSauce_Box2.png' alt="" class='ybox'/>
       <div class="guessCounter">
    


          <img src='https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/Hotsva_HotSauce_Smoke.gif'alt=""  class='smokers'/>
        
      </div>
      
    </div>
  
    <div class='greenBoxAndGif'></div>
    <div class='greenBox'>
      
        <img src='https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/Hotsva_HotSauce_Box3.png' alt="" class='gbox'/>
      
      
  </div>
 
      <img class="lose" src='https://studypupassets.s3-us-west-1.amazonaws.com/StudyPup_assets/YOU_LOSE_Hotsva_Game1.png' alt="" />
     

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

export default HotGameOne;