"use strict";

//! Macam2 jebakan "this keyword"

//$ Contoh pertama (Arrow function)
//? Jangan pernah menggunakan arrow function sebagai sebuah method
var firstName = `Matlail`;

const syahrin = {
  firstName: "Syahrin",
  year: 1998,
  calcAge: function () {
    // console.log(this);
    console.log(2024 - this.year);
  },
  greet: () => {
    // console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};
console.log(firstName);
syahrin.greet();
//# -> Arrow Function tidak mendapatkan "this keyword" sendiri, ia hanya akan menggunakan "this keyword" dari sekitarnya dengan kata lain "parents this keyword"

//$ Contoh kedua (memiliki function dalam sebuah method)

const mamat = {
  firstName: `mamat`,
  year: 1997,
  calcAge: function () {
    console.log(2024 - this.year);

    //# Error
    // const isGenZ = function () {
    //     console.log(this.year >= 1996 && this.year <= 2010); // ini akan menyebabkan error karna tidak bisa mengakses properti
    // }

    //# Solution #1 ==> mendeklarasikan variabel dengan nilai this, biasanya ditluis (self / that)
    // const self = this; // bisa di akali diengan mendeklarasikan variabel dengan nilai this, biasanya ditluis (self / that)
    // const isGenZ = function () {
    //   if (self.year >= 1996 && self.year <= 2010) {
    //     console.log(`You're Gen Z`);
    //   }
    // };

    //# Solution #2 ==> menggunakan arrow function
    const isGenZ = () => {
      //   console.log(this);
      if (this.year >= 1996 && this.year <= 2010) {
        console.log(`You're Gen Z`);
      }
    };

    isGenZ();
  },
  greet: () => {
    console.log(`Hey ${this.firstName}`);
  },
};

mamat.calcAge();
console.log(`   `); // hanya pembatas saat di log

//! Arguments keyword

const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(3, 5);
addExpr(3, 5, 1, 2, 6); // sangat legal untuk menambahkan lebih banyak argument

const addArrow = (a, b) => {
    console.log(arguments);
    return a + b // INGAT! ketika memiliki lebih dari 1 barus kode harus di return
};

addArrow(2,5,6) // error: karna "arguments keyword" hanya berfungsi di regullar function