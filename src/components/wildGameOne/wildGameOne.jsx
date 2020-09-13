
import React, { Component } from 'react';
import './wildGameOne.css';
import $ from "jquery";


class WildGameOne extends Component {
    componentDidMount() {
     
$('.win').hide();
$('.lose').hide();
$('.create').hide();
$('.nextLevel').hide();
$('.restart3').hide();


//////up counter 
$('.countUp').click(function() {
  $('.output').html(function(i, val) { return val*1+1 });
});
///// down counter
$('.countDown').click(function() {
  $('.output').html(function(i, val) { return val*1-1 });
});


////snowball throw


var answerset = [
  { problem: "3 + 2 =", answer: "5"},
  { problem: "6 + 1 =", answer: "7"},
  { problem: "4 + 4 =", answer: "8"},
  // { problem: "1 + 2 =", answer: "3"},
  // { problem: "3 + 1 =", answer: "4"},
  // { problem: "7 + 3 =", answer: "10"},

]

$('.start').on('click',function() {
$('.start').hide();
$('.win').hide();
$('.lose').hide();
$('.create').show();
$('.nextLevel').hide();
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


 
  var counter = 25  ;
 
////////////timer
  var interval = setInterval(function() {
    counter--;
    // Display 'counter' wherever you want to display it.
    if (counter <= 0 && currentGameArray.length > 0) {
         clearInterval(interval);
          // $('#time').text(counter);
          console.log("you lose");
          $('.lose').show();
          $('.restart3').show();
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
      penguin.attr("src", "../StudyPup_assets/Tumblewyld_Sass_Bottle_FIll.gif");
      

      
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
    $(".reset").html(" ");
    $(".start").show();
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
    <div class="wildGameOne" style ={ { backgroundImage: "url('../StudyPup_assets/Tumblewyld_Sass_Background.png')"} }>
    <body>
  <audio id="swoopboop">
    <source src='../StudyPup_assets/Tumblewyld_Sass_Sound_Pour.png.mp3' type="audio/mpeg"/>
  </audio>
  <audio id="buttonSound">
    <source src='../StudyPup_assets/Button_Click_Up.m4a' type="audio/mpeg"/>
  </audio>
  <audio id="icecreamSong">
    <source src='../StudyPup_assets/Tumblewyld_Sass_Song.m4a' type="audio/mpeg"/>
  </audio>
  <audio id="wrongDing">
    <source src='../StudyPup_assets/Wrong_Ding.m4a' type="audio/mpeg"/>
  </audio>
 
  
    
    <img src='../StudyPup_assets/Tumblewyld_Sass_Pipes.png' alt="" class='skeletonBackground'/>
      
      <div class="answers reset"></div>
      <button class="start">START</button>
      <a class="restart3" href="/wild1">restart!</a>

     
        <img class="win" src='../StudyPup_assets/YOU_WON_Tumblewyld_Game1.png' alt="" />
        <a class="nextLevel" href="/snoconb2">Next Level!</a>
     
        
  <div class='pinkBoxAndGif'>
      <div class='pinkBox'>
        <img src='../StudyPup_assets/Tumblewyld_Sass_Barrel_1.png' alt=""  class='bbox'/>
        <div class="problem reset"></div>
        </div>

     </div>
  
     <div class="brownBox">
      <button class="create">CREATE</button>
      <img src='../StudyPup_assets/Tumblewyld_Sass_Barrell_2.png' alt="" class='ybox'/>
       <div class="guessCounter">
    
          <img src='../StudyPup_assets/Hotsva_HotSauce_Button_Up_Unclicked.png'alt=""  class='countUp'/>
          <img src='../StudyPup_assets/Hotsva_HotSauce_Button_Up_Clicked.png'alt=""  class='countUpClicked'/>
  
          <img src='../StudyPup_assets/Hotsva_HotSauce_Button_Down_Unclicked.png'alt=""  class='countDown'/>
          <img src='../StudyPup_assets/Hotsva_HotSauce_Button_Down_Clicked.png'alt=""  class='countDownClicked'/>


        
      </div>
        <div class='cocoaAndOutput'>
          <img src='../StudyPup_assets/Tumblewyld_Sass_Droplet_Icon.png'alt=""  class='cocoa'/>
          <div class="output">3</div>
       </div>
    </div>
  
    <div class='greenBoxAndGif'></div>
    <div class='greenBox'>
      
        <img src='../StudyPup_assets/Tumblewyld_Sass_Barrell_3.png' alt="" class='gbox'/>
      
      
  </div>
 
      <img class="lose" src='../StudyPup_assets/YOU_LOSE_Tumblewyld_Game1.png' alt="" />
     

      <div>
        <span id="timer">
          <span id="time">25</span>      
        </span>
      </div>
      <link href="https://fonts.googleapis.com/css?family=Titan+One&display=swap" rel="stylesheet"></link>
  </body>
  </div>
);
  
}

}

export default WildGameOne;