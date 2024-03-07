const guessInput = document.querySelector('.guess');
const checkButton = document.querySelector('.check');
const message = document.querySelector('.message');
const scoreLabel = document.querySelector('.score');
const highscoreLabel = document.querySelector('.highscore');
const numberDisplay = document.querySelector('.number');
const againButton = document.querySelector('.again');

let secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
let previousGuess = null; 

/********************************************* Fonctions ****************************************************/

function displayMessage(msg) {
  message.textContent = msg;
}

function updateScore(newScore) {
  score = newScore;
  scoreLabel.textContent = score;
}

function displayNumber(number) {
  numberDisplay.textContent = number;
}


// Bouton check
checkButton.addEventListener('click', function() {
  const guess = Number(guessInput.value);
  // Si pas de numéro / numéro trop grand, pas de perte de point.
  if (guess < 1 || guess > 20 || isNaN(guess)) {
    displayMessage('⛔️ Aucun numéro!');
  } else if (guess === secretNumber) { 
    displayMessage('🎉 Bravo! Vous avez deviné le numéro!');
    displayNumber(secretNumber);
    
    document.body.style.backgroundColor = '#60b347';
    numberDisplay.style.width = '30rem';

    // MAJ du Highscore
    if (score > highscore) {
      highscore = score;
      highscoreLabel.textContent = highscore;
    }
  
    // Impossible de double check le même nombre deux fois d'affilé
  } else if (guess !== secretNumber) { 
    if (guess == previousGuess) { 
      displayMessage('Vous avez déjà deviné ce numéro!'); 
    // Guess   
    } else {
      if (score > 1) {
        displayMessage(guess > secretNumber ? '📈 Trop haut!' : '📉 Trop bas!');
        updateScore(score - 1);
      // Score = 0 : Perdu
      } else {
        displayMessage('💥 Vous avez perdu le jeu!');
        updateScore(0);
      }
      previousGuess = guess; 
    }
  }
});


// Bouton Again
againButton.addEventListener('click', function() {
  score = 20;
  secretNumber = Math.floor(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  updateScore(score);
  displayNumber('?');
  guessInput.value = '';
  document.body.style.backgroundColor = '#222';
  numberDisplay.style.width = '15rem';
  previousGuess = null;
});


