'use strict';

let guessNumber = Math.trunc(Math.random() * 20);
//document.querySelector('.number').textContent = guessNumber;

let score = 20;
let highscore = 0;

function getUserValue() {
  const guess = document.querySelector('#guess').value;
  if (guess != '') {
    if (guess != guessNumber) {
      guess > guessNumber
        ? (document.querySelector('.message').textContent = 'Too High...')
        : (document.querySelector('.message').textContent = 'Too Low...');
      score--;
      if (score == 0) {
        document.querySelector('.message').textContent =
          'you lost!!   Play again';
        document.getElementById('guess').disabled = true;
        //resetScreen();
      }
      document.querySelector('.score').textContent = score;
    } else {
      if (highscore < score) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }
      document.getElementById('guess').disabled = true;
      document.querySelector('.message').textContent =
        'you are right want to play again Click Again button';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('body').style.backgroundColor = '#038200';
      document.querySelector('.number').textContent = guess;
    }
  } else {
    document.querySelector('.message').textContent = 'please enter a number';
  }
}

function resetScreen() {
  score = 20;
  guessNumber = Math.trunc(Math.random() * 20);
  document.getElementById('guess').disabled = false;
  // document.querySelector('.number').textContent = guessNumber;
  document.querySelector('.message').textContent = 'Start Guessing...';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#333';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = '20';
  document.querySelector('#guess').value = '';
}

document.querySelector('.check').addEventListener('click', getUserValue);

document.querySelector('.again').addEventListener('click', resetScreen);
