
import React, { Component } from 'react';
import './duckRace.css';
import $ from "jquery";


class DuckRace extends Component {
    componentDidMount() {

      const { answerset } = this.props;


   
 
     
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
$('.kart2').finish().css('left', '0');
$('.kart3').finish().css('left', '0');
$('.kart4').finish().css('left', '0');
$('.kart1').finish().css('left', '0%');



//////animate karts
setTimeout(function() {
  $('.kart2').animate({
        left: "45%"
    }, 40000);
  
});
setTimeout(function() {
  $('.kart3').animate({
        left: "45%"
    }, 55000);
  
});
setTimeout(function() {
  $('.kart4').animate({
        left: "45%"
    }, 45000);
  
});


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


 
  var counter = 30;
 
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
  
var boost = 5

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
    
      $('.kart1').animate({
        'left': boost + "%"
    }, 1000);
      

      
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
            $('.gbox').hide();
        }, 10);
        setTimeout(function() {
          $('.gbox').show();
      }, 2000);
  
       

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
    boost = boost + 5;
    
  }
  

  function winningCheck() {
  
  if (currentGameArray.length > 0){
    console.log('keep playing');
  } else {
   
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
    <div class="duckRace" style ={ { backgroundImage: "url('../StudyPup_assets/vector-cartoon-blue-ocean-waves-cartoon-blue-ocean-waves-154050621.jpg')"} }>
    <body>
    <a class="gButton" href={this.props.gButton}>
                <img src='../StudyPup_assets/Studypup_Map_Icon.png' alt=""  class='mapIcon'/>
   </a>

  
  <audio id="swoopboop">
    <source src='../StudyPup_assets/Cozmo_Elevator_Sound_Effect.mp3' type="audio/mpeg"/>
  </audio>
  <audio id="buttonSound">
    <source src='../StudyPup_assets/Button_Click_Up.m4a' type="audio/mpeg"/>
  </audio>
  <audio id="icecreamSong">
    <source src='../StudyPup_assets/Cozmo_Elevator_Song.m4a' type="audio/mpeg"/>
  </audio>
  <audio id="wrongDing">
    <source src='../StudyPup_assets/Wrong_Ding.m4a' type="audio/mpeg"/>
  </audio>
 
  
    
   
      
      <div class="answers reset"></div>
      <button class="start">START</button>
      <a class="restart3" href="/coz1">restart!</a>

     
        <img class="win" src='../StudyPup_assets/YOU_WON_Cozmo_Game3.png' alt="" />
        <a class="nextLevel" href={this.props.nxtlvl}>Next Level!</a>
     
        

        <div class="problem reset"></div>
     
  
     <div class="brownBox">
      <button class="create">GO!</button>
      <img src='../StudyPup_assets/Cozmo_Elevator_Box.png' alt="" class='ybox'/>
       <div class="guessCounter">
    
          <img src='../StudyPup_assets/Cozmo_Elevator_Button_Up_Unclicked.png'alt=""  class='countUp'/>
          <img src='../StudyPup_assets/Cozmo_Elevator_Button_Up_Clicked.png'alt=""  class='countUpClicked'/>
  
          <img src='../StudyPup_assets/Cozmo_Elevator_Button_Down_Unclicked.png'alt=""  class='countDown'/>
          <img src='../StudyPup_assets/Cozmo_Elevator_Button_Down_Clicked.png'alt=""  class='countDownClicked'/>


       
      </div>
        <div class='cocoaAndOutput'>

          <div class="output">3</div>
       </div>
    </div>
  

      
        
      
      

 
      <img class="lose" src='../StudyPup_assets/YOU_LOSE_Cozmo_Game3.png' alt="" />
      <img class="kart1" src="../StudyPup_assets/5c3a4514105804a817f548915be28107-removebg-preview.png"alt=""/>
    <img class="kart2" src="../StudyPup_assets/5c3a4514105804a817f548915be28107-removebg-preview.png"alt=""/>
    <img class="kart3" src="../StudyPup_assets/5c3a4514105804a817f548915be28107-removebg-preview.png"alt=""/>
    <img class="kart4" src="../StudyPup_assets/5c3a4514105804a817f548915be28107-removebg-preview.png"alt=""/>
     

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

export default DuckRace;