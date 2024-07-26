let popularWords;
let allWords;

function loadGame() {
    Promise.all([
        fetch('./popular.txt')
            .then(response => response.text())
            .then(text => {
                popularWords = text.replaceAll("\r", "").split("\n");
                popularWords.pop(); // Remove the '' at the end
            })
            .catch(error => {
                console.error('Error fetching words: ', error);
            }),
        fetch("./enable1.txt")
            .then(response => response.text())
            .then(text => {
                allWords = text.replaceAll("\r", "").split("\n");
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

    // TODO: reset other game elements (attempts, history, etc.)
}

const guessWord = document.getElementById("guess-word");
const guessHistory = document.getElementById("guess-history");
function makeGuess() {
    let guess = guessWord.value.toLowerCase();
    
    if (guess.length != numLetters) {
        return;
    }
    if (allWords.includes(guess) === false) {
        guessWord.value = ""; // Clear the box
        return;
    }
    console.log(`Guess: "${guess}"`);
    // The guess is a real word with the right # of letters
    for (let i = 0; i < numLetters; i++) {
        let letter = guess[i].toUpperCase();
        if (guess[i] === secret[i]) {
            guessHistory.innerHTML += `<div class="letter correct">${letter}</div>`;
        } else {
            guessHistory.innerHTML += `<div class="letter">${letter}</div>`;
        }
    }
    guessHistory.innerHTML += `<br>`;
    guessWord.value = ""; // Clear the box
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