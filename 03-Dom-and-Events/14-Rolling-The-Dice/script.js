"use strict";

//# Memilih element
const score0El = document.querySelector(`#score--0`);
const score1El = document.getElementById(`score--1`);
// untuk memanggil element id bisa menggunakan ".getElementById"
// FUNFact: getElementById lebih cepat dibanding qerrySelector tetapi hanya terasa jika ada ribuan element sekaligus
const diceEl = document.querySelector(`.dice`);

//# Kondisi awal
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add(`hidden`);
