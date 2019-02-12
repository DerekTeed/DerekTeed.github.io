
//GLobal Variables
// create an arrray of words
var word = ["wombat", "giraffe", "platypus"];
// choose numer 1-3 randomly

var words = Math.floor(Math.random() * word.length);
// choose the actual word being used
var chosenWord = word[words];
//delcare letters
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "_"];
var wrongLetters = [];
var correctPressedLetters = [];

//end Global Variables

console.log("This is my word: " + chosenWord);




//Start blankSpaceGenerator function 
var blankSpaceGenerator = function (wordToBlankOut) {

    var blankSpaces = [];

    var numBlankSpaces = wordToBlankOut.length;  //unnecessary demonstration. Shows that wordToBlankOut can be used as a length

    console.log("Its length is :" + numBlankSpaces);


    for (let i = 0; i < numBlankSpaces; i++) {
        //creates the _______ blank letters    
        blankSpaces.push("_");
        document.getElementById("blankSpaceGenerator").innerHTML = blankSpaces.push("_");
    }

    //Fct returns an array with each element as an underscore and its len is lenth of inputted word
    return blankSpaces;
} //End blankSpace generator function

//** start blankSpaceGenerator() fct call
document.getElementById("blankSpaceGenerator").innerHTML = blankSpaceGenerator();
blankSpaceGenerator(chosenWord);
//end blankSpaceGenerator() fct call

//experimenting, still trying to get "_" to show up
function startUp() {
    for (var i = 0; i < numBlankSpaces.length; i++) {
      answerArray[i] = "_";
    }
//ending experiment


var correctPressedLetters = [];

var remainingGuesses = 10;

//Is the guess the action of hitting the button or a letter going in??
document.onkeyup = function (event) { //How do I make it when I click a specific Letter that it pulls from my chosenWords and populates???
    for (i = 0; i < chosenWord.length; i++) {
        if (event.key === chosenWord[i]) {
            correctPressedLetters.push(event.key);
            
            console.log(correctPressedLetters);

        }
        else {
            (event.key === wrongLetters[i])
            wrongLetters.push(event.key);
            
            
            console.log(wrongLetters);
        }
       //Trying to get countdown of remaining guesses
        remainingGuesses--;
    document.getElementById("guesses").innerHTML = remainingGuesses;
    }
}
console.log(remainingGuesses);











