"use strict";

//# Memilih element
const player0El = document.querySelector(`.player--0`);
const player1El = document.querySelector(`.player--1`);
const score0El = document.getElementById(`score--0`);
const score1El = document.getElementById(`score--1`);
const current0El = document.getElementById(`current--0`);
const current1El = document.getElementById(`current--1`);
const diceEl = document.querySelector(`.dice`);
const btnNew = document.querySelector(`.btn--new`);
const btnRoll = document.querySelector(`.btn--roll`);
const btnHold = document.querySelector(`.btn--hold`);

//# variable
let scores, currentScore, activePlayer, playing

//# function inisialisasi
const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;
  playing = true;
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  diceEl.classList.add(`hidden`);
  player0El.classList.remove(`player--winner`);
  player1El.classList.remove(`player--winner`);
  player0El.classList.add(`player--active`);
  player1El.classList.remove(`player--active`);
};
init()

//# function ganti pemain
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle(`player--active`);
  player1El.classList.toggle(`player--active`);
};

//# function acak dadu
btnRoll.addEventListener(`click`, function () {
  if (playing) {
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
      switchPlayer();
    }
  }
});

//# function menyimpan score
btnHold.addEventListener(`click`, function () {
  if (playing) {
    // 1. menambahkan skor saat ini ke skor pemain aktif
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    diceEl.classList.remove(`hidden`);

    // 2. mengecek skor sudah mencapai 100 poin atau belum
    if (scores[activePlayer] >= 100) {
      // jika mencapai 100 point game selesai
      playing = false;
      diceEl.classList.add(`hidden`);
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add(`player--winner`);
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove(`player--active`);
    } else {
      // Jika belum ganti pemain
      switchPlayer();
    }
  }
});

//# function new Game / reset
btnNew.addEventListener(`click`, init);
