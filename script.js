class JS_GuessMyNumber {
  constructor() {
    this.secretNumber = Math.floor(Math.random() * 20) + 1;
    this.score = 20;
    this.highscore = 0;
    this.previousGuess = null;

    /********************************************* Fonctions ****************************************************/
    
    this.guessInput = document.querySelector('.guess');
    this.checkButton = document.querySelector('.check');
    this.message = document.querySelector('.message');
    this.scoreLabel = document.querySelector('.score');
    this.highscoreLabel = document.getElementById('highscore'); 
    this.numberDisplay = document.querySelector('.number');
    this.againButton = document.querySelector('.again');
    this.checkButton.addEventListener('click', this.checkGuess.bind(this));
    this.againButton.addEventListener('click', this.resetGame.bind(this));
    this.updateScore();
  }

  updateScore() {
    this.scoreLabel.textContent = this.score;
  }

  // Fonction bouton Check
  checkGuess() {
    const guess = Number(this.guessInput.value);
    if (guess === this.secretNumber) {
      this.message.textContent = '🎉 Bravo! Vous avez deviné le numéro!';
      this.numberDisplay.textContent = this.secretNumber;
      document.body.style.backgroundColor = '#60b347';
      this.numberDisplay.style.width = '30rem';
      if (this.score > this.highscore) {
        this.highscore = this.score;
        this.highscoreLabel.textContent = this.highscore;
      }
    } else if (guess < 1 || guess > 20 || isNaN(guess)) {
      this.message.textContent = '⛔️ Aucun numéro!';
    } else if (guess === this.previousGuess) {
      this.message.textContent = 'Vous avez déjà deviné ce numéro!';
    } else {
      if (this.score > 1) {
        this.message.textContent = guess > this.secretNumber ? '📈 Trop haut!' : '📉 Trop bas!';
        this.score--;
        this.updateScore();
      } else {
        this.message.textContent = '💥 Vous avez perdu le jeu!';
        this.score = 0;
        this.updateScore();
      }
      this.previousGuess = guess;
    }
  }


  // Fonction bouton again
  resetGame() {
    this.score = 20;
    this.secretNumber = Math.floor(Math.random() * 20) + 1;
    this.message.textContent = 'Start guessing...';
    this.updateScore();
    this.numberDisplay.textContent = '?';
    this.guessInput.value = '';
    document.body.style.backgroundColor = '#222';
    this.numberDisplay.style.width = '15rem';
    this.previousGuess = null;
  }
}

// Instanciation de la classe JS_GuessMyNumber
const game = new JS_GuessMyNumber();
