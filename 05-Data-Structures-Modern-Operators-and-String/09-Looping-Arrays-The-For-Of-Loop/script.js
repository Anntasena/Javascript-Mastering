"use strict"


//*------------------------------------------------------------------------------------------------------------------------------
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = "20:00",
    address = "Indonesia",
  }) {
    console.log(
      `Order recived! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}, time: ${time}, address: ${address}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta ${ing1}, ${ing2}, ${ing3}`);
  },
  orderPizza: function (mainIng, ...otherIng) {
    console.log(mainIng);
    console.log(otherIng);
  },
};
//*------------------------------------------------------------------------------------------------------------------------------

//! Apa itu for..of?
//? for...of adalah fitur JavaScript yang diperkenalkan di ES6 (ECMAScript 2015) yang memungkinkan Anda untuk mengiterasi (melakukan iterasi) melalui nilai-nilai dari objek yang iterable seperti array, string, map, set, dan objek iterable lainnya. Loop ini lebih bersih dan lebih mudah dibaca dibandingkan dengan loop for tradisional saat bekerja dengan elemen-elemen dari koleksi yang iterable.
//* Cara kerja:
// for (const element of iterable)
// => "element" adalah variabel yang akan menyimpan setiap nilai dari iterable pada setiap iterasi.
// => "iterable" adalah objek yang dapat diiterasi seperti array, string, map, set, atau objek yang memiliki implementasi untuk metode [Symbol.iterator]

//$ TIPS: 
//$-> for...of loop sangat merepotkan ketika kita membutuhkan indeks
//$-> for...of loop hanya dimaksudkan untuk memberi kita saat ini

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu]

//# for..of 
for (const item of menu) console.log(item);

//# for..of with index
//@  OLD SCHOOL STYLE
// for (const item of menu.entries()) {
//   console.log(`${item[0] +1}: ${item[1]}`);
  //+ ${item[0] +1} => urutan index
  //+ ${item[1]} => nama product index
// }
//@ MODERN STYLE
for (const [i , el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}


console.log(menu.entries()); // array iterator
console.log([...menu.entries()]); // melihat array didalam array iterator
