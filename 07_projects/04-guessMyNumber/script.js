let randoNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');;
const userInput = document.querySelector("#guessField");
const guesslot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    })
}

function validateGuess(guess){
    if (isNaN(guess)) {
        alert('please enter a valid number');
    }else if(guess < 1){
        alert('please enter a number more then 1');
    }else if(guess > 100){
        alert('please enter a number less than 100');
    }else{
        prevGuess.push(guess);
        
        if(numGuess === 10){
            cleanUpGuess(guess);
            displayMessage(`Game Over. Random number was ${randoNumber}` );
            endGame();
        }else{
             cleanUpGuess(guess);
             checkGuess(guess);
        }
        
    }
}

function checkGuess(guess){
    if(guess === randoNumber){
        displayMessage(`You guessed it right`);
        endGame();
    }else if(guess < randoNumber){
        displayMessage(`Number is TOOO Low`)
    }else if(guess > randoNumber){
        displayMessage(`Number is TOOO High`)
    }
}

function cleanUpGuess(guess){
    userInput.value = '';
    guesslot.innerHTML += `${guess} `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h1>${message}</h1>`
}

function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h1 id="newGame">Start new Game</h1>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame(){
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function(e){
        randoNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numGuess = 1;
        guesslot.innerHTML = '';
        remaining.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);

        playGame = true;
    })
    
}