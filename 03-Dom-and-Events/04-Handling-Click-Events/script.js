"use strict";

// document.querySelector(`.message`).textContent = `Correct Number!✌️`;
// ?Contoh DOM manipulation

// document.querySelector(`.number`).textContent = 15;
// document.querySelector(`.score`).textContent = 10;
// ?Properti textContent dari sebuah elemen DOM mengatur atau mendapatkan teks yang berada di dalam elemen tersebut

// document.querySelector(`.guess`).value = 22;
// console.log(document.querySelector(`.guess`).value);
// ?Properti value dari elemen input (seperti input teks, textarea, atau elemen input lainnya) mengatur atau mendapatkan nilai yang dimasukkan dalam elemen tersebut.

/* 
* Event-Listener = sesuatu yang terjadi pada webpage, seperti:
- Mouse click
- Mouse moving
- Keep rest
- Dan lain2
* Dengan Event-Listener kita bia menunggu pristiwa tertentu, kemudian bereaksi setelahnya

$Syntax: element.addEventListener(event, function, useCapture);
  > event: Nama event yang ingin Anda dengarkan, seperti 'click', 'mouseover', 'keydown', dll.
  > function: Fungsi yang akan dipanggil ketika event terjadi. Ini disebut sebagai event handler.
  > useCapture (opsional): Boolean yang menunjukkan apakah event harus ditangkap atau dibubbling. Defaultnya adalah false.
*/

document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = Number(document.querySelector(`.guess`).value);
  console.log(typeof guess, guess);

  if (!guess) {
    document.querySelector(`.message`).textContent = `Please insert number 🐶`;
  }
});
