// ajouter possibilité de choisir le nb min & max -) influence la nb min max dans le html
// faire un if else pour modifier le score qu'on perd par mauvais choix
// retirer virgules etc

const guessInput = document.querySelector('.guess');
const checkButton = document.querySelector('.check');
const message = document.querySelector('.message');
const scoreLabel = document.querySelector('.score');
const highscoreLabel = document.querySelector('.highscore');
const numberDisplay = document.querySelector('.number');
const againButton = document.querySelector('.again');

let secretNumber = Math.floor(Math.random() * 21) + 1;
let score = 20;
let highscore = 0;
let previousGuess = null; // Variable pour stocker le nombre deviné précédemment

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

checkButton.addEventListener('click', function() {
  const guess = Number(guessInput.value);

  if (guess < 1 || guess > 20 || isNaN(guess)) {
    displayMessage('⛔️ Aucun numéro!');
  } else if (guess === secretNumber) { 
    displayMessage('🎉 Bravo! Vous avez deviné le numéro!');
    displayNumber(secretNumber);
    
    document.body.style.backgroundColor = '#60b347';
    numberDisplay.style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      highscoreLabel.textContent = highscore;
    }
  } else if (guess !== secretNumber) { 
    if (guess == previousGuess) { // Vérifie si le nombre deviné est le même que le précédent
      displayMessage('Vous avez déjà deviné ce numéro!'); // Affichez un message d'erreur
    } else {
      if (score > 1) {
        displayMessage(guess > secretNumber ? '📈 Trop haut!' : '📉 Trop bas!');
        updateScore(score - 1);
      } else {
        displayMessage('💥 Vous avez perdu le jeu!');
        updateScore(0);
      }
      previousGuess = guess; // Met à jour le nombre précédent deviné
    }
  }
});

againButton.addEventListener('click', function() {
  score = 20;
  secretNumber = Math.floor(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  updateScore(score);
  displayNumber('?');
  guessInput.value = '';
  document.body.style.backgroundColor = '#222';
  numberDisplay.style.width = '15rem';
});

