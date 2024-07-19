"use strict";

console.log(this); // Window object

// Expresion function
const calcAge = function (birthYear) {
  console.log(2024 - birthYear);
  console.log(this); // mode strict akan menjadi undefined // mode biasa menjadi global object
};
calcAge(1998);

// Arrow function
const calcAgeArrow = (birthYear) => {
  console.log(2024 - birthYear);
  console.log(this); // Window object
};
calcAgeArrow(1995);

const syahrin = {
  year: 1998,
  job: `programmer`,
  calcAge: function () {
    console.log(this); // { year: 1998, calcAge: [Function: calcAge] }
    console.log(2024 - this.year); // 26
  },
};

syahrin.calcAge();
/*
# maksudnya:
* syahrin.caclAge() adalah memanggil method "caclAge" di dalam object "syahrin" yang isinya adalah "this" yang dilamanya adalah isi dari object "syahrin" itu sendriri
*/

const matlail = {
  year: 2012,
};

// kita bisa mengcopy properti object seperti ini:
matlail.calcAge = syahrin.calcAge // ini di sebut (Method borrowing)
matlail.job = syahrin.job // (Method borrowing)
console.log(matlail);
console.log(`-------`);
matlail.calcAge()


const f = syahrin.calcAge // ingat function hanyalah sebuah nilai