'use strict';

class GuessingGame {
  constructor() {
    this.score = 20;
    this.highScore = 0;
    this.number = Math.trunc(Math.random() * 20);
    console.log('k1');
  }

  updateDOM(boolval, msg, numwidth, bgcolor, guessval) {
    console.log('k2');
    document.querySelector('.guess').disabled = boolval;
    this.updateMsg(msg);
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
    let msg;
    if (guess != this.number) {
      guess < this.number
        ? (msg = 'guess is too Low')
        : (msg = 'guess is too high');
      this.updateMsg(msg);
      this.score--;
      if (this.score == 0) {
        msg = 'you lost!! play again';
        this.updateMsg(msg);
        document.querySelector('.guess').disabled = true;
      }
    } else {
      msg =
        'congratulations you got it right.Want to play again, Click Again button';
      this.updateHighScore(this.score);
      this.updateDOM(true, msg, '30rem', '#038200', guess);
    }
  }
  getUserValue() {
    console.log('k6');
    const val = document.querySelector('.guess').value;

    if (val != '') {
      this.compareGuess(val);
    } else {
      let msg = 'Please enter a value';
      this.updateMsg(msg);
    }
  }
  reset() {
    console.log('k7');
    this.score = 20;
    this.number = Math.trunc(Math.random() * 20);
    let msg = 'Start Guessing ...';
    document.querySelector('.score').textContent = '20';
    document.querySelector('.guess').value = '';
    this.updateDOM(false, msg, '15rem', '#333', '?');
  }
}
const game = new GuessingGame();
/* game.updateHighScore(76);
//game.updateDOM(1, 2, 3, 4);
game.getUserValue(); */
document
  .querySelector('.check')
  .addEventListener('click', game.getUserValue.bind(game));
document
  .querySelector('.again')
  .addEventListener('click', game.reset.bind(game));
