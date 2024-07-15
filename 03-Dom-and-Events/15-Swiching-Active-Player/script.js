"use strict";

//# Memilih element
const player0El = document.querySelector(`.player--0`)
const player1El = document.querySelector(`.player--1`)
const score0El = document.getElementById(`score--0`);
const score1El = document.getElementById(`score--1`);
const current0El = document.getElementById(`current--0`);
const current1El = document.getElementById(`current--1`);
const diceEl = document.querySelector(`.dice`);
const btnNew = document.querySelector(`.btn--new`);
const btnRoll = document.querySelector(`.btn--roll`);
const btnHold = document.querySelector(`.btn--hold`);

//# Kondisi awal
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add(`hidden`);

//# Variable
let currentScore = 0;
let activePlayer = 0;

//# function acak dadu
btnRoll.addEventListener(`click`, function () {
  // 1. Generate dadu acak
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);
  // 2. Display dadu
  diceEl.classList.remove(`hidden`);
  diceEl.src = `assets/dice-${dice}.png`;
  // 3. Memeriksa kocokan
  if (dice !== 1) {
    // menambakan dadu ke skor saat ini
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    // beralih kepemain berikutnya
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle(`player--active`) // method untuk menyala atau mematikan
    player1El.classList.toggle(`player--active`) // method untuk menyala atau mematikan
  }
});
