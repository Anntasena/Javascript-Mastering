"use strict";

/*
#> const number = Math.trunc(Math.random() * 20) + 1;

@> Math.trunc() = menghapus bagian desimal dari sebuah angka
@> Math.random() = menghasilkan angka acak
@>  Math.trunc(Math.random() * 20) + 1 = jumlah angka cak tidak lebih dari 19 + 1
*/

// Angka acak yang harus ditebak
const secretNumber = Math.trunc(Math.random() * 20) + 1;
// Score awal
let score = 5;

document.querySelector(`.number`).textContent = secretNumber;

document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = Number(document.querySelector(`.guess`).value);
  console.log(typeof guess, guess);

  if (!guess) {
    document.querySelector(`.message`).textContent = `Please insert number 🐶`;
  } else if (guess === secretNumber + 1 || guess === secretNumber - 1) {
    document.querySelector(`.message`).textContent = `Almost 🤏`;
    score--;
    document.querySelector(`.score`).textContent = score;
  } else if (guess > secretNumber) {
    document.querySelector(`.message`).textContent = `Too high 👆`;
    score--;
    document.querySelector(`.score`).textContent = score;
  } else if (guess < secretNumber) {
    document.querySelector(`.message`).textContent = `too low 👇`;
    score--;
    document.querySelector(`.score`).textContent = score;
  } else if (guess === secretNumber) {
    document.querySelector(`.message`).textContent = `You are great! 🏆`;
  }

  if (score <= 0) {
    document.querySelector(".message").textContent = "You lose noob 😖";
    document.querySelector(".score").textContent = 0;
  }
});
