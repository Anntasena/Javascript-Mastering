"use strict";

/*
! Destructuring
? => Destructuring adalah fitur ES6 yang pada dasarnya adalah cara untuk membongkar nilai dari array atau object kedalam variable terpisah
? => Destructuring adalah memecah struktur data yang kompleks menjadi struktur data yang lebih kecil seperti variable

! Destructuring Array
? => Destructuring array digunakan untuk mengambil elemen dari array dan menyimpannya kedalam variable dengan cara yang sangat mudah
*/

//@ simple destructuring array
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];
//@ alternativ and best practice
const [x, y, z] = arr;
console.log(x, y, z);

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

let [main, , secondary] = restaurant.categories;
// const [fitst, , second] = restaurant.categories; => variabel kosong termasuk urutan
console.log(main, secondary);

//@ without destructuring
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

//@ with destructuring
[main, secondary] = [secondary, main];
console.log(main, secondary);

//@ destructuring on method / function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

//@ nested destructuring
const nested = [2, 3, [4, 5]];
// const [i, ,j] = nested
// console.log(i, j);
const [i, , [j, k]] = nested;
console.log(i, j, k);

//@ default values
//* digunakan saat kita tidak tau panjang array
const defaultValue = 1;
const [p = defaultValue, q = defaultValue, r = defaultValue] = [8, 9];
console.log(p, q, r);
