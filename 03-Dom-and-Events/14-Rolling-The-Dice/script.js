"use strict";

//# Memilih element
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

let currentScore = 0;

//# function acak dadu
btnRoll.addEventListener(`click`, function () {
  // 1. Generate dadu acak
  const dice = Math.trunc(Math.random(0.9999) * 6) + 1;
  console.log(dice);
  // 2. Display dadu
  diceEl.classList.remove(`hidden`);
  diceEl.src = `assets/dice-${dice}.png`;
  // 3. Memeriksa kocokan
  if (dice !== 1) {
    // menambakan dadu ke skor saat ini
    currentScore += dice;
    current0El.textContent = currentScore;
  } else {
    // beralih kepemain berikutnya
  }
});
