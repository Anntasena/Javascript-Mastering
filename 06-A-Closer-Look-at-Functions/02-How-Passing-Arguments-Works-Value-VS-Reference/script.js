"use strict";

const flight = "LH234";
const syahrin = {
  name: "Syahrin Matlail",
  passport: 3242385889,
};

const checkIn = function (flightNum, passenger) {
  flightNum = "Boeing99";
  passenger.name = "Mr. " + passenger.name;

  if (passenger.passport === 3242385889) {
    alert("check in");
  } else alert("Wrong passport");
};

// checkIn(flight, syahrin);
// console.log(flight); // LH234 => ini tidak bisa berubah karna argument primitive
// console.log(syahrin); // {name: 'Mr. Syahrin Matlail', passport: 3242385889}

//@ cara kerjanya sama... oleh sebab itu primitive tidak bisa di ubah
// checkIn(flight, syahrin);
// const flightNum = flight;
// const passenger = syahrin;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000000);
};

newPassport(syahrin);
checkIn(flight, syahrin);

/* 
# -> Dalam pemrograman ada 2 istilah yang digunakan sepanjang waktu ketika berhadapan dengan function, yang lewat "VALUE" dan yang lewat "REFERENCE"
? -> Javascript TIDAK memiliki passing by "reference", hanya passing by "value", meskipun terlihat seperti passing by reference
? -> Jadi ada bahasa seperti C++, dimana kita dapat meneruskan "reference" ke "value" apapun alih2 value itu sendiri, ini bekerja bahkan dengan primitive. dan ini sebut by reference
*/

//$ [REMAINDER] => JAVASCRIPT tidak memiliki passing by "REFERENCE"
