
import React, { Component } from 'react';
import './gameThree.css';
import $ from "jquery";


class GameThree extends Component {
    componentDidMount() {
     
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


var answerset = [
  { problem: "3 + 2 =", answer: "5"},
  { problem: "6 + 1 =", answer: "7"},
  { problem: "4 + 4 =", answer: "8"},
  // { problem: "1 + 2 =", answer: "3"},
  // { problem: "3 + 1 =", answer: "4"},
  // { problem: "7 + 3 =", answer: "10"},
  // { problem: "6 + 3 =", answer: "9"},
  // { problem: "2 + 4 =", answer: "6"},
  
  
]

$('.start').on('click',function() {
$('.start').hide();
$('.win').hide();
$('.lose').hide();
$('.create').show();
$('.nextLevel').hide();
$('audio#icecreamSong')[0].play();





// $(document).click(function(e) {
//   mouseX = e.pageX;
//   $('.dart').css("left", e.pageX);
// });

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

// $('.scoop').attr("src", "../StudyPup_assets/scope-"+selectedProblem+".gif");
// $('.cone').attr("src", "../StudyPup_assets/cone-"+selectedProblem+".gif");

  // $.each(currentGameArray, function(index,value){
  //   $(".answers").append("<div class='house'><div class='iglooWrapper "+'a'+index+"'><img src='https://i.imgur.com/DsWjPxC.png' class='scoop'><img src='../StudyPup_assets/penguin_transparent.gif' class='penguin hide'><div class='answer'>" + value.answer + "</div></div></div>");
  //   console.log("index: " + index + " problem: " + value.problem + " answer: " + value.answer );
  // });

 
  var counter = 1000;
 
////////////timer
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
      penguin.attr("src", "../StudyPup_assets/Penguin_Gets_Ice_Cream_.gif");


      
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
        }, 2500);

    } else {
      $('audio#wrongDing')[0].play();
      $('audio#wrongDing')[0].currentTime = 0
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
    $('p').hide();
    currentEquation = null;
    theAnswer = null;
    selectedProblem = null;
    randomProblemSelector = null;
    
    console.log('keep playing');

    console.log(currentGameArray);
    console.log('you win');

  };
}
  
}); 


// var generateHearts = function () {
// var heartsLoad = $('<li></li>').html('<img class=heart src="https://i.imgur.com/MQ88P97.png" />');
// $("ul").append(heartsLoad);
// console.log("generating!");
// }
 }

 render() {
  return (
    <div class="game3" style ={ { backgroundImage: "url('../StudyPup_assets/Ice_Cream_Game_Background.png')"} }>
    <body>
  <audio id="swoopboop">
    <source src='../StudyPup_assets/Penguin_Gets_Ice_Cream.m4a' type="audio/mpeg"/>
  </audio>
  <audio id="buttonSound">
    <source src='../StudyPup_assets/Button_Click_Up.m4a' type="audio/mpeg"/>
  </audio>
  <audio id="icecreamSong">
    <source src='../StudyPup_assets/Song_Snow-Con_IceCream_Level.m4a' type="audio/mpeg"/>
  </audio>
  <audio id="wrongDing">
    <source src='../StudyPup_assets/Wrong_Ding.m4a' type="audio/mpeg"/>
  </audio>
 
  
    
    <img src='../StudyPup_assets/just_pipes.png' alt="" class='skeletonBackground'/>
      
      <div class="answers reset"></div>
      <button class="start">START</button>
        <h1 class="win">YOU WON!!</h1>
  
      <div class='blueBox'>
        <img src='../StudyPup_assets/Box_Blue.png' alt=""  class='bbox'/>
        <div class="problem reset"></div>
     </div>
  
     <div class="yellowBox">
      <button class="create">CREATE</button>
      <img src='../StudyPup_assets/Box_Yellow.png' alt="" class='ybox'/>
       <div class="guessCounter">
         
          <img src='../StudyPup_assets/Up_Button_Unclicked.png'alt=""  class='countUp'/>
          <img src='../StudyPup_assets/Up_Button_Clicked.png'alt=""  class='countUpClicked'/>
  
          <img src='../StudyPup_assets/Down_Button_Unclicked.png'alt=""  class='countDown'/>
          <img src='../StudyPup_assets/Down_Button_Clicked.png'alt=""  class='countDownClicked'/>
        
      </div>
        <div class='scoopAndOutput'>
          <img src='../StudyPup_assets/Ice_Cream_Scoop_7.png'alt=""  class='scoop'/>
          <div class="output">3</div>
       </div>
    </div>
  
    <div class='greenBox'>
      
        <img src='../StudyPup_assets/Box_Green_with_Door.png' alt="" class='gbox'/>
      
  </div>
  
            <div class="lose">Try Again!</div>

            <a class="nextLevel" href="/snoconb2">Next Level!</a>
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

export default GameThree;