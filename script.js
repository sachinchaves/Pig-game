"use strict";

// Selecting Elements
const score0Element = document.getElementById("score--0");
const score1Element = document.getElementById("score--1");
const diceElement = document.querySelector(".dice");
const rollDiceEl = document.querySelector(".btn--roll");
const holdButton = document.querySelector(".btn--hold");
const newGameButton = document.querySelector(".btn--new");

let playing, activePlayer, score, currentScore;

const init = function () {
  // resetting all the variables
  playing = true;
  activePlayer = 0;
  score = [0, 0];
  currentScore = 0;

  // Setting the value to 0
  score0Element.textContent = 0;
  score1Element.textContent = 0;
  diceElement.classList.add("hidden");
  // if there is no player--active it will not give an error
  // if the div already has player--active class it will not add the second time
  document.querySelector(`.player--0`).classList.remove("player--winner");
  document.querySelector(`.player--1`).classList.remove("player--winner");
  document.querySelector(`.player--0`).classList.add("player--active");
  document.querySelector(`.player--1`).classList.remove("player--active");
};

init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  document.querySelector(".player--0").classList.toggle("player--active");
  document.querySelector(".player--1").classList.toggle("player--active");
};

// roll dice click
rollDiceEl.addEventListener("click", function () {
  if (playing) {
    // generate random number
    const dice = Math.trunc(Math.random() * 6) + 1;
    // show the number on the dice
    diceElement.src = `dice-${dice}.png`;
    diceElement.classList.remove("hidden");

    if (dice !== 1) {
      currentScore += dice;
      // diplay dice roll in current
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // switch player
      switchPlayer();
    }
  }
});

holdButton.addEventListener("click", function () {
  if (playing) {
    score[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      score[activePlayer];
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent = 0;

    if (score[activePlayer] >= 20) {
      // finish game
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      diceElement.classList.add("hidden");
    } else {
      //switch player
      switchPlayer();
    }
  }
});

newGameButton.addEventListener("click", init);
