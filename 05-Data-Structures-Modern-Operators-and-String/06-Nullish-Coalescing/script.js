"use strict";

//! Nullish Coalescing Operator ("??")
//? Operator ini diperkenalkan di ES2020
//? Nullish coalescing operator (??) adalah fitur dalam JavaScript yang digunakan untuk memberikan nilai default saat operand di sebelah kiri adalah null atau undefined. Ini berbeda dengan operator OR (||) yang menganggap semua nilai falsy (seperti 0, '', NaN, false, null, dan undefined) sebagai alasan untuk menggunakan nilai default.

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

restaurant.numGuest = 0;

//# dengan OR opearator
//! menggunakan OR akan menyebabkan error jika valuenya adalah 0 maka akan terbaca sesuai default value
const guest = restaurant.numGuest || 10;
console.log(guest); // 10

//# dengan NULLISH opeartor
//! menggunaakn NULLISH bisa menyelesaikan error jika valuenya 0 maka akan tetap terbaca 0
//? Nullish : null and undefined (TIDAK TERMASUK "0" atau " ")
const guestCorrect = restaurant.numGuest ?? 20
console.log(guestCorrect); // 0
