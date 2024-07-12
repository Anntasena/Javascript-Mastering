"use strict";

// Angka acak yang harus ditebak
let secretNumber = Math.trunc(Math.random() * 20) + 1;
// Score awal
let score = 10;

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
    document.querySelector(`body`).style.backgroundColor = `#60b367`;
    document.querySelector(`.number`).style.width = `30rem`;
    document.querySelector(`.number`).textContent = secretNumber;
  }

  if (score <= 0) {
    document.querySelector(`.message`).textContent = "You lose noob 😖";
    document.querySelector(`.score`).textContent = 0;
  }
});

document.querySelector(`.again`).addEventListener(`click`, function () {
  // reset angka acak
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 10;

  // reset UI
  document.querySelector(`.number`).textContent = `?`;
  document.querySelector(`.guess`).textContent = ``;
  document.querySelector(`.message`).textContent = `Start guessing...`;
  document.querySelector(`.score`).textContent = score;
  document.querySelector(`body`).style.backgroundColor = `#222`;
  document.querySelector(`.number`).style.width = `15rem`;
});
