"use strict";

//! Logical assigment operators
/*
? Logical assignment operators adalah fitur yang diperkenalkan di ES2021 (ECMAScript 2021) yang menggabungkan operasi logika dengan assignment (penugasan). Mereka memungkinkan penulisan kode yang lebih ringkas dan jelas saat Anda ingin melakukan penugasan kondisional berdasarkan logika tertentu. Ada tiga jenis logical assignment operators:
*-> Logical OR assignment (`||=`)
*-> Logical AND assignment (`&&=`)
*-> Logical nullish assignment (`??=`)
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
  orderPizza: function (mainIng, ...otherIng) {
    console.log(mainIng);
    console.log(otherIng);
  },
};
//*------------------------------------------------------------------------------------------------------------------------------

//@----------------- OR ----------------------------
const restOR1 = {
  name: "Capri",
  numGuests: 20,
};

const restOR2 = {
  name: "Wareg",
  owner: "Joko sasongko",
};

//# Logical Assigment
// restOR1.numGuests = restOR1.numGuests || 10
restOR1.numGuests ||= 10; //*-> menjadi lebih ringkas

// restOR2.numGuests = restOR2.numGuests || 10
restOR2.numGuests ||= 10; //*-> menjadi lebih ringkas

console.log(restOR1);
console.log(restOR2);

//@----------------- NULLISH ----------------------------
const restNULL1 = {
  name: "Capri",
  numGuests: 0, //*-> 0
};

const restNULL2 = {
  name: "Wareg",
  owner: "Joko sasongko",
};

//# Logical Assigment
// restNULL1.numGuests = restNUll1.numGuests ?? 10
restNULL1.numGuests ??= 10; //*-> menjadi lebih ringkas

// restNULL2.numGuests = restNULL2.numGuests ?? 10
restNULL2.numGuests ??= 10; //*-> menjadi lebih ringkas

console.log(restNULL1);
console.log(restNULL2);

//@----------------- AND ----------------------------
const restAND1 = {
  name: "Capri",
  numGuests: 0, //*-> 0
};

const restAND2 = {
  name: "Wareg",
  owner: "Joko sasongko",
};

//# Logical Assigment
// restAND1.owner = restAND1.owner && "<ANONYMOUS>";
restAND1.owner &&= `<ANONYMOUS>`
// restAND2.owner = restAND2.owner && "<ANONYMOUS>";
restAND2.owner &&= `<ANONYMOUS>`

console.log(restAND1);
console.log(restAND2);
