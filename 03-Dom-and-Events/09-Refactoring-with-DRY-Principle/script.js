"use strict";
/*
*Refactoring kode adalah proses penting untuk meningkatkan kualitas dan pemeliharaan kode tanpa mengubah perilaku eksternal. Berikut adalah langkah-langkah yang dapat Anda ikuti saat melakukan refactoring kode:

* 1. Memahami Kode yang Ada
  - Baca Dokumentasi: Jika tersedia, baca dokumentasi yang terkait dengan kode.
  - Pelajari Arsitektur: Pahami bagaimana kode tersebut terstruktur dan berinteraksi dengan komponen lain.
  - Jalankan Tes: Pastikan Anda memiliki tes yang mencakup berbagai bagian dari kode.
* 2. Identifikasi Bagian yang Memerlukan Refactoring
  - Cari Duplikasi Kode: Identifikasi kode yang berulang yang bisa diekstraksi ke dalam fungsi atau modul terpisah.
  - Deteksi Kode yang Sulit Dibaca: Cari bagian yang sulit dimengerti dan yang memiliki kompleksitas tinggi.
  - Cari Pelanggaran Prinsip Desain: Seperti pelanggaran prinsip
    => DRY (Don't Repeat Yourself) 
    => KISS (Keep It Simple, Stupid) 
    => SOLID principles.
* 3. Rencanakan Perubahan
  - Tetapkan Tujuan Refactoring: Tentukan apa yang ingin dicapai, seperti meningkatkan kinerja, keterbacaan, atau mengurangi kompleksitas.
  - Buat Cadangan Kode: Pastikan Anda memiliki versi cadangan kode sebelum melakukan perubahan.
  - Rencanakan Tahapan Refactoring: Pisahkan refactoring menjadi langkah-langkah kecil yang bisa diuji secara individu.
* 4. Refactor Secara Inkremental
  - Refactor Kode Sedikit Demi Sedikit: Lakukan perubahan kecil dan uji setiap perubahan untuk memastikan tidak ada bug yang diperkenalkan.
  - Lakukan Komitmen di Setiap Langkah: Gunakan sistem kontrol versi (seperti Git) untuk membuat komitmen di setiap langkah refactoring.
* 5. Tes dan Verifikasi
  - Jalankan Tes Unit: Pastikan semua tes unit berjalan dan lulus.
  - Tambahkan Tes Jika Diperlukan: Buat tes baru untuk bagian kode yang telah direfaktor jika belum ada tes untuk bagian tersebut.
  - Verifikasi Kinerja: Pastikan refactoring tidak mengurangi kinerja aplikasi kecuali itu memang tujuannya.
* 6. Review dan Dokumentasi
  - Review Kode: Lakukan review kode dengan tim untuk memastikan kualitas perubahan.
  - Perbarui Dokumentasi: Jika ada perubahan signifikan, perbarui dokumentasi yang terkait.
* 7. Refactor Ulang Jika Diperlukan
  - Evaluasi Hasil: Setelah refactoring selesai, evaluasi hasil dan identifikasi area yang mungkin masih memerlukan perbaikan.
  - Refactor Ulang: Lakukan refactoring ulang jika masih ada bagian yang bisa diperbaiki lebih lanjut.
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 10;
let highScore = 0;

//# display message function
const displayMessage = function (message) {
  document.querySelector(`.message`).textContent = message;
};
//# display score function
const displayScore = function (score) {
  document.querySelector(`.score`).textContent = score;
};

// Game logic
document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = Number(document.querySelector(`.guess`).value);
  console.log(typeof guess, guess);
  // saat tidak ada input
  if (!guess) {
    displayMessage(`Please insert number 🐶`);
    // saat angka benar
  } else if (guess !== secretNumber) {
    if (guess === secretNumber + 1 || guess === secretNumber - 1) {
      displayMessage(`Almost 🤏`);
      score--;
      displayScore(score);
    } else if (score >= 0) {
      displayMessage(guess > secretNumber ? `Too high 👆` : `too low 👇`);
      score--;
      displayScore(score);
    }
  }
  // saat angka benar
  else if (guess === secretNumber) {
    displayMessage(`You are great! 🏆`);
    document.querySelector(`body`).style.backgroundColor = `#60b367`;
    document.querySelector(`.number`).style.width = `30rem`;
    document.querySelector(`.number`).textContent = secretNumber;
    // mencatat highscore
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  }

  if (score <= 0) {
    displayMessage(`You lose noob 😖`);
    displayScore(0);
  }
});

document.querySelector(`.again`).addEventListener(`click`, function () {
  // reset angka acak
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 10;

  // reset UI
  document.querySelector(`.number`).textContent = `?`;
  document.querySelector(`.guess`).textContent = ``;
  displayMessage(`Start guessing...`);
  displayScore(score);
  document.querySelector(`body`).style.backgroundColor = `#222`;
  document.querySelector(`.number`).style.width = `15rem`;
});
