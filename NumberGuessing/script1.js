class GuessingGame {
  constructor() {
    this.score = 20;
    this.highScore = 0;
    this.number = Math.trunc(Math.random() * 20);
    console.log('k1');
  }

  updateDOM(boolval, numwidth, bgcolor, guessval) {
    console.log('k2');
    document.getElementById('guess').disabled = boolval;
    this.updateMsg(guessval);
    document.querySelector('.number').style.width = numwidth;
    document.querySelector('body').style.backgroundColor = bgcolor;
    document.querySelector('.number').textContent = guessval;
  }

  updateMsg(displaymsg) {
    console.log('k3');
    document.querySelector('.message').textContent = displaymsg;
  }

  updateHighScore(num) {
    console.log('k4');
    if (this.highScore < num) {
      this.highScore = num;
      document.querySelector('.highscore').textContent = this.highScore;
    }
  }

  compareGuess(guess) {
    console.log('k5');
    let msg; // Declare the 'msg' variable here
    if (guess != this.number) {
      guess < this.number
        ? (msg = 'Guess is too low')
        : (msg = 'Guess is too high');
      this.updateMsg(msg);
      this.score--;
      if (this.score == 0) {
        // Add 'this' before 'score'
        msg = 'You lost!! Play again.';
        this.updateMsg(msg);
        document.getElementById('guess').disabled = true;
      }
    } else {
      msg = 'Congratulations! You got it right.';
      this.updateHighScore(this.score);
      this.updateDOM(true, '30rem', '#038200', guess);
    }
  }

  getUserValue() {
    console.log('k6');
    const val = document.querySelector('.guess').value;
    if (val != '') {
      this.compareGuess(val);
    } else {
      const msg = 'Please enter a value';
      this.updateMsg(msg);
    }
  }

  reset() {
    console.log('k7');
    this.score = 20; // Add 'this' before 'score'
    this.number = Math.trunc(Math.random() * 20); // Add 'this' before 'number'
    const msg = 'You are right. Want to play again? Click the "Again" button.';
    document.querySelector('.score').textContent = '20';
    document.querySelector('#guess').value = '';
    this.updateDOM(false, '15rem', '#333', '?');
  }
}

const game = new GuessingGame();
game.updateHighScore(76);
game.getUserValue();
