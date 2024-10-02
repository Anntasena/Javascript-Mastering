"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

///////////////////////////////////////

/*
! ASYNCHONOUS & SYNCRHONOUS
-----------------------------
? Synchronous Code :
Synchronous code berjalan secara berurutan. Ini berarti setiap baris kode akan dijalankan satu per satu, dan baris berikutnya tidak akan dieksekusi sebelum baris sebelumnya selesai. Proses ini membuat eksekusi kode bersifat blocking (menghentikan sementara eksekusi lainnya hingga selesai).

? Asynchronous Code :
Asynchronous code memungkinkan beberapa tugas atau fungsi dijalankan secara bersamaan (non-blocking). Ketika suatu tugas asynchronous dijalankan, program tidak akan menunggu tugas tersebut selesai dan akan melanjutkan eksekusi kode berikutnya. Tugas yang dijalankan secara asynchronous dapat menyelesaikan eksekusinya di kemudian waktu.

! Untuk menangani asynchronous code, Javascript menyediakan beberapa cara:
-----------------------------
? 1. Callback => Callback adalah fungsi yang diteruskan sebagai argumen ke fungsi lain dan dieksekusi setelah tugas asynchronous selesai.
? 2. Promise => Promise adalah objek yang mewakili keberhasilan atau kegagalan dari operasi asynchronous.
? 3. Async/Await => async dan await adalah cara yang lebih modern dan bersih untuk menangani asynchronous code dibandingkan dengan callback dan promise chaining.

! Kapan Menggunakan Asynchronous?
-----------------------------
? Asynchronous code biasanya digunakan saat mengerjakan tugas yang memakan waktu, seperti:
*-> HTTP Request (Ajax/Fetch): Misalnya mengambil data dari API.
*-> Database Query: Menyimpan atau mengambil data dari database.
*-> File I/O: Membaca atau menulis file di server.
*-> Timers: Seperti setTimeout atau setInterval.

! Kesimpulan:
-----------------------------
*-> Synchronous code bersifat blocking: Kode harus dijalankan satu per satu.
*-> Asynchronous code bersifat non-blocking: Kode dapat melanjutkan tanpa harus menunggu tugas selesai.
*-> Untuk menangani asynchronous code, kita bisa menggunakan callback, promises, atau yang lebih elegan: async/await.


! AJAX = Asychronous Javascript And XML
-----------------------------
? teknik yang memungkinkan aplikasi web untuk mengirim dan menerima data dari server secara asynchronous (non-blocking), tanpa harus memuat ulang seluruh halaman web. Dengan AJAX, aplikasi dapat melakukan pembaruan data dinamis di latar belakang, sehingga memberikan pengalaman pengguna yang lebih interaktif.

! Bagaimana AJAX Bekerja?
-----------------------------
? AJAX menggunakan objek XMLHttpRequest untuk berkomunikasi dengan server. Meskipun awalnya namanya menggunakan "XML", data yang ditransfer melalui AJAX biasanya dalam format JSON karena lebih ringan dan mudah digunakan dalam JavaScript.

! AJAX dijaman sekarang
-----------------------------
? Ajax dijaman sekarang tidak lagi menggunakan XML tetapi namanya masih populer 

! XML & JSON
-----------------------------
? Keduanya merupakan data format tetapi XML tidak lagi digunakan dan digantikan dengan JSON. sekarang ini JSON merupakan API data format terpopuler


*/
