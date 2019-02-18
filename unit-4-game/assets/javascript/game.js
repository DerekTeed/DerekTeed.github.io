
var wins = 0;
var losses = 0;
var userGuessingNumbers = 0;
var numberToGuess;
//1 of 2 options for random numbers
var counter = 0





//Resetting the game after each win or loss.
var resetGame = function () {
  counter = 0;
  //Reset numbers assigned to crystals
  setCrystalValues();
  //Reset the target number
  targetNumber();
}

//ACreating function to generate a random number
function generateRandomNumber(min, max) {
  var randomNumber;

  randomNumber = Math.floor(Math.random() * ((max - min) + 1)) + min;;
  console.log(randomNumber)
  return randomNumber;

}

var targetNumber = function () {
  numberToGuess = generateRandomNumber(19, 120);
  $("#getThisNumberToWin").html("Your Score: " + numberToGuess);
  
  }


var setCrystalValues = function () {
  $("#crystal1").attr("dataCrystal", generateRandomNumber(1, 13));
  $("#crystal2").attr("dataCrystal", generateRandomNumber(1, 13));
  $("#crystal3").attr("dataCrystal", generateRandomNumber(1, 13));
  $("#crystal4").attr("dataCrystal", generateRandomNumber(1, 13));
  }

$(document).ready(function () {
//Reset the game each time at the start. Still don't fully understand why this is needed.
  resetGame();
  

//Assign all 4 different images to each div
  $("#crystal1").attr("src", "assets/images/Crystal1.jpg");
  $("#crystal2").attr("src", "assets/images/crystal2.jpg");
  $("#crystal3").attr("src", "assets/images/crystal3.jpg");
  $("#crystal4").attr("src", "assets/images/crystal4.jpg");


  

 


//Assign Current Number: 0 to appear on webpage
  $("#currentNumber").html("Current Number: " + "0");

  

//Create an on click functionon all 4 crystal images
  $(".crystal").click(function () {
//Create variable that assigns the random number to each crystal
    var crystalValue = ($(this).attr("dataCrystal"));
    console.log(crystalValue);
//Makes the crystal value into an integer
    crystalValue = parseInt(crystalValue);
//Makes so that the crystal value will be cumulative on each click
    counter = counter + crystalValue;
    
//Start If Else statement to determine winning and losing.
    if (counter === numberToGuess) {
//Wins are incremented by 1, or added by one.      
      wins++;
//Assign the adding on 1 winning point to #wins div.
      $("#wins").html("Wins: " + wins);
//Resets the game to new crystal values and new current number and new score.
      resetGame();
      console.log(counter);
    }
    else if (counter > numberToGuess) {
//Increment losses by adding 1     
      losses++;
//Assign losses to ID losses
      $("#losses").html("Losses: " + losses);
//Resets the game to new crystal values and new current number and new score.
      resetGame();
      console.log(counter);
    }
//For some reason I have to assign current number counter to the bottom.    
    $("#currentNumber").html("Current Number: " + counter);
   

  })
})

 

