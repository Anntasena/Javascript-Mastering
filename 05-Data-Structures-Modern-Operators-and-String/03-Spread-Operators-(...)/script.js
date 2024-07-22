"use strict";

//! Apa itu spread operator "..."
//? Spread operator "..." adalah fitur JS yang memungkinkan kita untuk menyebarkan elemen2 dari array kedalam konteks dimaan mereka diharapkan
//? Spread operator "..." pada dasarnya membongkar element array sekaligus

const arr = [4, 5, 6];

//@ ada berbagai cara untuk membongkar array

//# 1. sacara manual (sangat bad practice)
const badArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badArr);

//# 2. menggunaakn looping
/*
 * const arrLoop = arr
 * for (let i = arr.length-1; i <= 10; i++) {
 *    arrLoop.push(i)
 * }
 * console.log(arrLoop);
 */

//# 3. menggunakan spread operator
//? menggunakan spread seperti mengeluarkan semua element dari array dan menulisnya disini secara manual
const goodArr = [1, 2, 3, ...arr];
console.log(goodArr);

//$ TIPS:
/*
 *-> kita dapat menggunakan operator spread kapanpun kita akan menulis berberapa nilai yang dipisahkan dengan koma
 *-> dan situasi itu sering terjadi setiap kita menulis array literal
 */

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
};
//*------------------------------------------------------------------------------------------------------------------------------

const newMenu = [...restaurant.mainMenu, "Rendang"];
console.log(newMenu);

//? Perbedaan spread vs destructuring adalah spread mengambil semua elemen dari array dan tidak membuat variable baru
//? Sebagai konseskuensi, kita hanya dapat menggunakan di tempat dimana kita seharusnya menulis nilai yang dipisahkan dengan koma

//! 2 kasus penggunaan penting spread operator
//* -> 1. membuat shalow copy
const mainMenuCopy = [...restaurant.mainMenu];

//* -> 2. menggabungkan 2 array atau lebih menajadi 1
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

//$ FACT:
/*
 *-> Spread operator berkerja pada semua iterable
 *-> Iterable adalah hal2 seperti arrays, string, map, atau set bukan object
 *-> Struktur data bawaan dalam JS sekarang dapat diubah kecuali object
 */

// string
const str = `Syahrin`;
const letters = [...str, " ", "S."];
console.log(letters);
console.log(...letters);

//! template literal + spread = tidak akan bekerja
//? template literal bukan tempat yang mengharapkan banyak nilai yang dipisahkan dengan koma
// console.log(`Template literal: ${...str}`); => ERROR!

//! Function dengan multiple argument
//*-> jika menggunakan tanda petik satu '' gunakan backslash untuk melanjutkan teks \
// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt("Ingredient 2?"),
//   prompt("Ingredient 3?"),
// ];
// //manual
// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// //spread
// restaurant.orderPasta(...ingredients);

//$ Sejak ES2018, spread operator juga bekerja pada object, meskipun object bukan iterable

// object
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: "Mak Kaji" };
console.log(newRestaurant);


const restaurantCopy = {...restaurant}
restaurantCopy.name = 'Rumah makan mewah'
console.log(restaurantCopy.name);
console.log(restaurant.name);