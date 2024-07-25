let popularWords;
let allWords;

function loadGame() {
    Promise.all([
        fetch('./popular.txt')
            .then(response => response.text())
            .then(text => {
                popularWords = text.split("\r\n");
                popularWords.pop(); // Remove the '' at the end
            })
            .catch(error => {
                console.error('Error fetching words: ', error);
            }),
        fetch("./enable1.txt")
            .then(response => response.text())
            .then(text => {
                allWords = text.split("\r\n");
                allWords.pop(); // Remove the '' at the end
            })
            .catch(error => {
                console.error('Error fetching words: ', error);
            })]).finally(wordsLoaded);
}

let popularWordsSorted = {};

function wordsLoaded() {
    console.log(`Loaded ${popularWords.length} popular words and ${allWords.length} dictionary words!`);
    for (let i = 0; i < popularWords.length; i++) {
        let word = popularWords[i];
        let len = word.length;
        if (popularWordsSorted[len] === undefined) {
            popularWordsSorted[len] = [];
        }
        popularWordsSorted[len].push(word);
    }
    startGame();
}

let secret;
let numLetters = 5;
function startGame() {
    // Get the array that contains words with numLetters
    let popularWordsLength = popularWordsSorted[numLetters];

    // Choose a random word from the array
    let randomIndex = randInt(0, popularWordsLength.length);
    secret = popularWordsLength[randomIndex];
}

function makeGuess() {

}

// TODO: write function isWord(word)

/**
* Generate a random integer within min and max
* @param {number} min 
* @param {number} max 
* @returns a random integer between min and max, inclusive
*/
function randInt(min, max) {
    let rand = Math.random();
    rand = rand * (max - min + 1);
    rand = rand + min;
    rand = Math.floor(rand);
    return rand;
}