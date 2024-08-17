"use strict";

//! IMEEDIATELY INVOKED FUNCTION EXPRESSION (IFFE) = Ekspresi function yang segera dipanggil
//? Jadi terkadang di JS kita membutuhkan function yang hanya dijalankan sekali dan tidak akan digunakan kembali

// Normal function
const runOnce = function () {
  console.log("This will never run again");
};

runOnce();

// IFFE function
//$ [SYNTAX] => (function (parameter) {"block code"}) ('this for call')
(function () {
  console.log("This will never run again (IFFE)");
})();

// IFFE arrow function
//$ [SYNTAX] => (() => (parameter) {"block code"}) ('this for call')
(() => {
  console.log("This will never run again (IFFE Arrow function)");
})();

//? [PENJELASAN]
/*
*-> Penemuan function ini bisa terjadi karena berada dalam satu ruang lingkup
*-> Data yang didefinisikan didalam ruang lingkup adalah pribadi "private" atau yang disebut "DIENKAPSULISASI"
*-> Data enkapsulasi dan data privasi adalah konsep yang sangat penting dalam pemrogramman
*/
