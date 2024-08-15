"use strict";

const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],
  // book: function() {} // hanya variatif syntax
  book(flightNum, name) {
    console.log(
      `${name} book a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(232, "Syahrin Matlail");
lufthansa.book(555, "Nadika Smith");
console.log(lufthansa.bookings);

const eurowings = {
  airline: "Eurowings",
  iataCode: "EW",
  bookings: [],
};

const book = lufthansa.book;
// book(23, 'Rahma') // tidak bekerja karna tidak bisa mengakses "this" di dalam object

//# [METHOD] ".call()" => digunakan untuk memanggil fungsi dengan nilai this yang ditentukan dan argumen yang disediakan secara terpisah.
book.call(eurowings, 23, "Rahma Mulayni");
book.call(lufthansa, 224, "Yono Alexander");
console.log(lufthansa);
console.log(eurowings);

const swiss = {
  airline: "Swiss Air Lines",
  iataCode: "EX",
  bookings: [],
};

book.call(swiss, 442, "Yono Alexander");
console.log(swiss);

//# [METHOD] ".apply()" => digunakan untuk memanggil sebuah fungsi dengan konteks 'this' yang ditentukan dan argumen yang diberikan dalam bentuk array atau array-like object
//! di JS Modern method apply jarang sekali bahkan tidak digunakan lagi
const flightData = [531, 'Gold D Roger']
book.apply(swiss, flightData)
console.log(swiss);

//? yang sering digunakan di JS modern menggunakan method .call() + spread operator
book.call(swiss, ...flightData)