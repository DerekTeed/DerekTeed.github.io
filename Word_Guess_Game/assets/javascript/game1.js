

//declare letters
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


//declare glbobal variables
var score = 0;
var wrongLetters = [];
var remainingGuesses = 10;
var numWins = 0;
var guessLetter = [];
var chosenLetters = [];
//end Global Variables

// Calling function to start the game...

/*function startGame() {
    var choosingLetter = Math.floor(Math.random() * letters.length);
    // choose the actual word being used
    var chosenLetter = letters[choosingLetter];
    for (i = 0; i < letters.length; i++) {

        if (event.key === chosenLetter[i]) {

            updateScore();
            //Wins +1, on webpage
            score++;
        }
        else {
            (event.key === wrongLetters[i])
            wrongLetters.push(event.key);
            remainingGuesses--;
            document.getElementById("guessesRemaining").textContent = RemainingGuesses;
            console.log(wrongLetters);
            console.log(remainingGuesses);
        }


    }
    
    }
*/

//Start event key
document.onkeyup = function (event) { //How do I make it when I click a specific Letter that it pulls from my chosenWords and populates???
chosenLetter = event.key;
//checking if the letter exists inside letters

if(letters.indexOf(chosenLetters) > -1){
    console.log(chosenLetters);
    for (i = 0; i < letters.length; i++) {
        if(chosenLetters) {

    wrongLetters.push(chosenLetters);
    console.log(wrongLetters);
}
}}}
//End Event Key

//updateScore();

//function updateScore() {
//    document.getElementById("#win1").content = "Wins: " + score;
//}

//End function


//document.querySelector("#win1").innerHTML = "numWins";
//test with console. Does not work.
console.log(document.querySelector("#win1"));