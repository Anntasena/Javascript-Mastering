"use strict";

function calcAge(birthYear) {
  const age = 2024 - birthYear;
  // console.log(lastName); ini tidak bisa di akses karna function di panggil sebelum variabel di buat
  console.log(firstName);

  function printAge() {
    const output = `${firstName}, you are ${age}, born is ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      const str = `Oh, and you're a Gen Z, ${firstName}`;
      console.log(str);
      
      function add(a, b) {
        return a + b;
      }
    }
  }
  printAge();

  return age;
}

const firstName = `Syahrin`;
calcAge(1998);
const lastName = `Fajri`;
