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

const swiss = {
  airline: "Swiss Air Lines",
  iataCode: "EX",
  bookings: [],
};

book.call(swiss, 442, "Yono Alexander");

//# [METHOD] ".apply()" => digunakan untuk memanggil sebuah fungsi dengan konteks 'this' yang ditentukan dan argumen yang diberikan dalam bentuk array atau array-like object
//! di JS Modern method apply jarang sekali bahkan tidak digunakan lagi
const flightData = [531, "Gold D Roger"];
book.apply(swiss, flightData);
console.log(swiss);

//? yang sering digunakan di JS modern menggunakan method .call() + spread operator
book.call(swiss, ...flightData);

//# [METHOD] ".bind()" => untuk membuat salinan dari sebuah fungsi dengan konteks 'this' yang telah ditetapkan (dengan thisArg) dan argumen yang ditetapkan (dengan arg1, arg2, ...)
// book.call(eurowings, 23, "Rahma Mulayni");
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(888, "Andika Johan");
bookLH(888, "Andika Johan");
bookLX(888, "Andika Johan");

console.log(lufthansa);
console.log(eurowings);
console.log(swiss);

// bind method with argument
const bookEWSeat23 = book.bind(eurowings, 23);
bookEWSeat23("Jojo Rezaldi");

//$ [EXAMPLE WITH EventListener]
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  this.planes++;
  console.log(this.planes);
  console.log(this);
};

document
  .querySelector(".buy")
  .addEventListener("click", lufthansa.buyPlane.bind(lufthansa));

//$ [REAL EXAMPLE] Partial Application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

// cara 1
const PPNIndonesia = addTax.bind(addTax, 0.25) // 0.25 = 25%
console.log(PPNIndonesia(20000));
// cara 2 (lebih sering digunakan dan menjadi standart)
const PPNIndonesiaNull = addTax.bind(null, 0.25)
console.log(PPNIndonesiaNull(10000));

// function returning function
const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate
  }
}

const addVAT = addTaxRate(0.2)
console.log(addVAT(1000));
console.log(addVAT(2000));