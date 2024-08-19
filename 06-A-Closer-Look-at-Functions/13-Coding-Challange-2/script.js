'use strict';
// Coding Challenge #2

/* 
Ini lebih merupakan tantangan berpikir daripada tantangan pengkodean 🤓

Ambil IIFE di bawah ini dan di akhir fungsi, lampirkan event listener yang mengubah warna elemen h1 yang dipilih ('header') menjadi biru, setiap kali elemen BODY diklik. JANGAN pilih elemen h1 lagi!

Dan sekarang jelaskan kepada DIRI SENDIRI (atau seseorang di sekitar Anda) MENGAPA ini berhasil! Luangkan waktu sebanyak yang Anda butuhkan. Pikirkan tentang KAPAN tepatnya fungsi panggilan balik dijalankan, dan apa artinya bagi variabel yang terlibat dalam contoh ini.

SEMOGA BERHASIL 😀
*/


(function () {
  const header = document.querySelector("h1");
  header.style.color = ("red");
  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue'
  })
})();

