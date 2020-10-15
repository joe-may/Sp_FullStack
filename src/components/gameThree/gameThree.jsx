
import React, { Component } from 'react';
import './gameThree.css';
import $ from "jquery";


class GameThree extends Component {
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
          currentGameArray =null;
          theAnswer = null;
          selectedProblem = null;
          randomProblemSelector = null;
          $('.lose').show();
          $('.start').show();
          $(".reset").html(" ");
          $('p').hide();
          
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
      penguin.attr("src", "../StudyPup_assets/cocoa_Penguin_jump.gif");
      

      
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
    
    $('.tryAgain').show();
    generateNextTurn();
    $('p').remove();
    $('.layer').show();
    currentEquation = null;
    currentGameArray =null;
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
    <div class="game3" style ={ { backgroundImage: "url('../StudyPup_assets/Snow_Con_Cocoa_Background.png')"} }>
    <body>
    <a class="gButton" href={this.props.gButton}>
                <img src='../StudyPup_assets/Studypup_Map_Icon.png' alt=""  class='mapIcon'/>
                </a>
    <div class="layer"></div>
  <button class="skip">Skip Video</button>
  <iframe title="rr" width="720" height="480" src="https://www.youtube.com/embed/i4rz1p3Q32I?mode=opaque&amp;rel=0&amp;autohide=1&amp;showinfo=0&amp;wmode=transparent&amp;modestbranding=1&amp;loop=1&amp;playlist=q8xvUq0UWFU" allowfullscreen></iframe>
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
 
  
    
    <img src='../StudyPup_assets/Snow_Con_Cocoa_Pipes.png' alt="" class='skeletonBackground'/>
      
      <div class="answers reset"></div>
      <button class="start">START</button>
      <a class="restart3" href="/sno3">restart!</a>

     
        <img class="win" src='../StudyPup_assets/YOU_WON_Snowcon_Game2.png' alt="" />
        <a class="nextLevel" href={this.props.nxtlvl}>Next Level!</a>
     
        
  <div class='pinkBoxAndGif'>
      <div class='pinkBox'>
        <img src='../StudyPup_assets/Snow_Con_Cocoa_Box1.png' alt=""  class='bbox'/>
        <div class="problem reset"></div>
        </div>
        <img src='../StudyPup_assets/Snow_Con_Cocoa_Propeller.gif' alt=""  class='spinner'/>
     </div>
  
     <div class="brownBox">
      <button class="create">CREATE</button>
      <img src='../StudyPup_assets/Snow_Con_Cocoa_Box2.png' alt="" class='ybox'/>
       <div class="guessCounter">
    
          <img src='../StudyPup_assets/Snow_Con_Cocoa_Button_Up_Unclicked.png'alt=""  class='countUp'/>
          <img src='../StudyPup_assets/Snow_Con_Cocoa_Button_Up1_Clicked.png'alt=""  class='countUpClicked'/>
  
          <img src='../StudyPup_assets/Snow_Con_Cocoa_Button_Down1_Unclicked.png'alt=""  class='countDown'/>
          <img src='../StudyPup_assets/Snow_Con_Cocoa_Button_Down_Clicked.png'alt=""  class='countDownClicked'/>

          <img src='../StudyPup_assets/Snow_Con_Cocoa_ChocolateBar.gif'alt=""  class='choco'/>
        
      </div>
        <div class='cocoaAndOutput'>
          <img src='../StudyPup_assets/cocoa.png'alt=""  class='cocoa'/>
          <div class="output">3</div>
       </div>
    </div>
  
    <div class='greenBoxAndGif'></div>
    <div class='greenBox'>
      
        <img src='../StudyPup_assets/Snow_Con_Cocoa_Box3.png' alt="" class='gbox'/>
        <img src='../StudyPup_assets/Snow_Con_Cocoa_Steam.gif'alt=""  class='smoke'/>
      
  </div>
 
      <img class="lose" src='../StudyPup_assets/YOU_LOSE_Snowcon_Game2.png' alt="" />
     

      <div>
        <span id="timer">00:
          <span id="time">25</span>      
        </span>
      </div>
      <link href="https://fonts.googleapis.com/css?family=Titan+One&display=swap" rel="stylesheet"></link>
      <link href='https://fonts.googleapis.com/css?family=Orbitron' rel='stylesheet' type='text/css'></link>
  </body>
  </div>
);
  
}

}

export default GameThree;