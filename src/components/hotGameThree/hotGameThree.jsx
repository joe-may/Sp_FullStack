
import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

import './hotGameThree.css';
import $ from "jquery";


class HotGameThree extends Component {
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
$('.nextLevel').hide();






$('.start').on('click',function() {
$('.start').hide();
$('.win').hide();
$('.lose').hide();
$('.nextLevel').hide();
$('audio#torchSong')[0].play();





var currentGameArray = [];



answerset.forEach(function(questions) {
  currentGameArray.push(questions)
})


  var randomProblemSelector = Math.floor((Math.random() * currentGameArray.length));
  var selectedProblem = currentGameArray[randomProblemSelector].problem;
  var theAnswer = currentGameArray[randomProblemSelector].answer;

console.log(currentGameArray);

  $.each(currentGameArray, function(index,value){
    $(".answers").append("<div class='house'><div class='iglooWrapper "+'a'+index+"'><img src='../StudyPup_assets/Hotsva_Boss_Battle_Single_Torch.png' class='igloo'><img src='../StudyPup_assets/Hotsva_Cave_Torch_Lit_Left.gif' class='penguin hide'><div class='answer'>" + value.answer + "</div></div></div>");
    console.log("index: " + index + " problem: " + value.problem + " answer: " + value.answer );
  });

 
  var counter = 3000;
 

  
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
          $('audio#torchSong')[0].pause()
          $('audio#torchSong')[0].currentTime = 0
          
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
      $(this).find('.igloo').remove();
      $(this).find('.answer').fadeOut(1, function() {
        $(this).parent('.iglooWrapper').prepend("<img src='' class='penguin'>");
        console.log(currentGameArray.length);
        var penguin = $(this).parent().find('.penguin');
        penguin.attr("src", "../StudyPup_assets/Hotsva_Cave_Torch_Lit_Left.gif");
        $('audio#torchLight')[0].play();
        $('audio#torchLight')[0].currentTime = 0
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
    $('.lose').hide();
    $('.win').show();
    $('.start').hide();
    $('.nextLevel').show();
    $(".reset").html(" ");
    $(".start").show();
    $('.tryAgain').show();
    $('p').hide();
    clearInterval(interval);
    $('audio#torchSong')[0].pause()
    $('audio#torchSong')[0].currentTime = 0
    console.log('you win')
    // generateHearts();
    
   
    
  };
}
  
}); 


 }

 render() {
  return (
    <div class="hotGameThree">
    
<body>
<a class="gButton" href={this.props.gButton}>
                <img src='../StudyPup_assets/Studypup_Map_Icon.png' alt=""  class='mapIcon'/>
                </a>
<div class="layer"></div>
  <button class="skip">Skip Video</button>
  <iframe title="rr" width="720" height="480" src="https://www.youtube.com/embed/yOcR2g4nVEc?mode=opaque&amp;rel=0&amp;autohide=1&amp;showinfo=0&amp;wmode=transparent&amp;modestbranding=1&amp;loop=1&amp;playlist=yOcR2g4nVEc" allowfullscreen></iframe>


<audio id="torchSong">
    <source src='../StudyPup_assets/Hotsva_Cave_Torch_Song.m4a' type="audio/mpeg"/>
  </audio>
  <audio id="torchLight">
    <source src='../StudyPup_assets/Hotsva_Cave_Torch_Sound.m4a' type="audio/mpeg"/>
  </audio>
 
         <img class="bg_hotGameThree" src='../StudyPup_assets/Hotsva_Cave_Torch_Background_NEW.png' alt="" />
        <div class="answers reset"></div>
        <button class="start">START</button>
          
          <img class="win" src='../StudyPup_assets/YOU_WON_Hotsva_Game3.png' alt="" />

          <div class="problem reset"></div>
                
                
                <img class="lose" src='../StudyPup_assets/YOU_LOSE_Hotsva_Game3.png' alt="" />
                
                <a class="nextLevel" href={this.props.nxtlvl}>Next Level!</a>
          
          <div>
            <span id="timer">
              <span id="time">10</span>      
            </span>
          </div>
      

   
          


          
          

          
  
</body>
<link href="https://fonts.googleapis.com/css?family=Titan+One&display=swap" rel="stylesheet"></link>
</div>
    
);
  
}

}

export default HotGameThree;