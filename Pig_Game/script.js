'use strict';

class PigGame {
  constructor() {
    this.Player1 = document.querySelector('.player--0');
    this.Player2 = document.querySelector('.player--1');
    this.Pscore1 = document.getElementById('score--0');
    this.Pscore2 = document.getElementById('score--1');
    this.Pcurrent1 = document.getElementById('current--0');
    this.Pcurrent2 = document.getElementById('current--1');

    this.btnroll = document.querySelector('.btn--roll');
    this.btnnew = document.querySelector('.btn--new');
    this.btnhold = document.querySelector('.btn--hold');

    this.dice = document.querySelector('.dice');
  }

  init() {
    this.Player1.classList.add('player--active');
    this.Player2.classList.remove('player--active');
    this.Pscore1.textContent = 0;
    this.Pscore2.textContent = 0;
    this.Pcurrent1.textContent = 0;
    this.Pcurrent2.textContent = 0;
    this.playing = true;
    this.scores = [0, 0];
    this.activePlayer = 0;
    this.addEventListeners();
  }

  addEventListeners() {
    console.log(this);
    this.btnroll.addEventListener('click', this.dice_roll.bind(this));
    this.btnnew.addEventListener('click', this.reset.bind(this));
    this.btnhold.addEventListener('click', this.hold_score.bind(this));
  }

  dice_roll() {
    if (this.playing) {
      let dice_val = Math.trunc(Math.random() * 6) + 1;
      console.log(dice_val);
      this.dice.src = `dice-${dice_val}.png`;
      if (dice_val != 1) {
        this.scores[this.activePlayer] += dice_val;
        document.querySelector(`#current--${this.activePlayer}`).textContent =
          this.scores[this.activePlayer];
      } else {
        this.switch_player();
      }
    }

    return this;
  }

  switch_player() {
    this.activePlayer = this.activePlayer === 0 ? 1 : 0;
    this.Player1.classList.toggle('player--active');
    this.Player2.classList.toggle('player--active');

    return this;
  }

  hold_score() {
    document.getElementById(`current--${this.activePlayer}`).textContent =
      this.scores[this.activePlayer];
    document.getElementById(`score--${this.activePlayer}`).textContent =
      this.scores[this.activePlayer];

    if (this.scores[this.activePlayer] > 100) {
      this.dice.classList.add('hidden');
      this.playing = false;
      document
        .getElementById(`current--${this.activePlayer}`)
        .classList.add('player--winner');
      document
        .getElementById(`current--${this.activePlayer}`)
        .classList.remove('player--active');
    } else {
      this.switch_player();
    }
    return this;
  }

  reset() {
    this.init();
  }
}

const game = new PigGame();
game.init();

/*
// Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, playing;

// Starting conditions
const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};
init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1. Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2. Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // 3. Check for rolled 1
    if (dice !== 1) {
      // Add dice to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // Switch to next player
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    // 1. Add current score to active player's score
    scores[activePlayer] += currentScore;
    // scores[1] = scores[1] + currentScore

    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // 2. Check if player's score is >= 100
    if (scores[activePlayer] >= 100) {
      // Finish the game
      playing = false;
      diceEl.classList.add('hidden');

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      // Switch to the next player
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', init);
*/
