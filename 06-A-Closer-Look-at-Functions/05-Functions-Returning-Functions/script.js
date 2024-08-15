"use strict";

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

greet("Hey");

const greeterHey = greet("Hey"); // variabel ini akan menjadi function dan cara memanggilnya sama dengan function
greeterHey("Syharin");
greeterHey("Mamat");

// other way
greet("Hello")("Matlail");

//# USING ARROW FUNCTION
// not enough best practice
const ucapSalam = (salam) => {
  return (nama) => {
    return console.log(`${salam} ${nama}`);
  };
};

const salamIslam = ucapSalam("Assalamualaikum");
salamIslam("Syahrin Matlail");
ucapSalam("Assalamualaikum")("Alice");

// best practice
const ucapSalamArrow = (salam) => (nama) => console.log(`${salam} ${nama}`);
ucapSalamArrow("Assalamualaikum akhi")("Rahman");

//# [CONTOH LAIN] using arrow function
const createRectangleCalculator = (length) => (width) => {
  const area = length * width;
  const perimeter = 2 * (length + width);
  return `Luas: ${area}, Keliling: ${perimeter}`;
};

console.log(createRectangleCalculator(20)(10));
