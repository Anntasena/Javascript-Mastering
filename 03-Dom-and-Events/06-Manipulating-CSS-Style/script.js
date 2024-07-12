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
  // saat tidak ada input
  if (!guess) {
    document.querySelector(`.message`).textContent = `Please insert number 🐶`;
    // saat angka yang ditebak mendekati
  } else if (guess === secretNumber + 1 || guess === secretNumber - 1) {
    document.querySelector(`.message`).textContent = `Almost 🤏`;
    score--;
    document.querySelector(`.score`).textContent = score;
    // saat angka yang ditebak terlalu tinggi
  } else if (guess > secretNumber) {
    document.querySelector(`.message`).textContent = `Too high 👆`;
    score--;
    document.querySelector(`.score`).textContent = score;
    // saat angka yang ditebak terlalu rendah
  } else if (guess < secretNumber) {
    document.querySelector(`.message`).textContent = `too low 👇`;
    score--;
    document.querySelector(`.score`).textContent = score;
    // saat angka yang ditebak benar
  } else if (guess === secretNumber) {
    document.querySelector(`.message`).textContent = `You are great! 🏆`;
    // #> document.querrySelector().style = cara untuk memanipulasi style css
    document.querySelector(`body`).style.backgroundColor = `#60b367`;
    document.querySelector(`.number`).style.width = `30rem`;
  }

  if (score <= 0) {
    document.querySelector(".message").textContent = "You lose noob 😖";
    document.querySelector(".score").textContent = 0;
  }
});
