"use strict";

//! Working With String

const airline = "TAP Air Portugal";
const plane = "A320";

//# ->
console.log(plane[0]); // A
console.log(plane[1]); // 3
console.log(plane[2]); // 2
console.log(plane[3]); // 0
console.log(plane[4]); // undefined

//# ->
console.log("B737"[0]); // B

//# ->
console.log(airline.length); // 16
console.log("B737".length); // 4

//# String method "indexOf()" => untuk mengetahui urutan dari kata kunci yang ingin di cari
// indexOf() sensitif dengan huruf besar dan kecil
console.log(airline.indexOf("T")); // 0
console.log(airline.indexOf("t")); // 11
console.log(airline.indexOf("Portugal")); // 8

// lastIndexOf => mengetahui karakter terakhir yang dicari
console.log(airline.indexOf("r")); // 6
console.log(airline.lastIndexOf("r")); // 10

//! bagaimana method ini bisa sangat berguna?
//? Satu kasus penggunaan yang baik adalah mengesktrak bagian dari string menggunakan method slice(), dan slice() method membutuhkan index sebagai argumen.
//? Oleh karna itu, terkadang sangat berguna untuk mengetahui index bagian dari string terlebih dahulu untuk kemudian mengekstraknya

//# string method "slice()" => posisi dimana extrasi akan dimulai
//? Metode .slice() adalah cara cepat dan mudah untuk menyalin bagian tertentu dari string, baik menggunakan indeks positif maupun negatif.

console.log(airline.slice(4)); // Air Portugal
console.log(airline.slice(4, 7)); // Air

//exp: extract
console.log(airline.slice(0, airline.indexOf(" "))); // TAP
console.log(airline.slice(airline.lastIndexOf(" ") + 1)); // Portugal -> "+ 1" hanya untuk tidak menegesekusi spasi

// slice negatif => memabaca dari belakang
console.log(airline.slice(-2));
console.log(airline.slice(1, -1)); // AP Air Portuga

//@ Exercise:

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const seatChair = seat.slice(-1);
  if (seatChair === "B" || seatChair === "E") {
    console.log("You got the middle seat 😮");
  } else { 
    console.log("You got lucky 😎");
  }
};

checkMiddleSeat("11B"); // You got the middle seat 😮
checkMiddleSeat("23C"); // You got lucky 😎
checkMiddleSeat("3E"); // You got the middle seat 😮


//! Bagaimana cara kerja di belakangnya?
//? Setiap kali kita memanggil mehtod pada sebuah string, JS akan secara otomatis di belakang layar mengubah primitive string menjadi object string dengan konten yang sama, dan kemudian pada object dimana method di panggil.
//? Proses ini disebut "Boxing" karna pada dasarnya mengambil string dan memasukannya kedalam kotak yang menjadi objectnya

//# -> string function
console.log(new String('syahrin'));
console.log(typeof new String('syahrin')); // object
console.log(typeof new String('syahrin').slice(1)); // string
// setelah di oprasikan string yang sebelumnya object saat menggunakan method akan menjadi string kembali