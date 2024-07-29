"use strict";

//*------------------------------------------------------------------------------------------------------------------------------
const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours, //? cara ke-1 (ES6 enhanced object literals) -> "tidak perlu openingHours : openingHours"

  //? cara ke-2 (enhanced method) -> "tidak menggunakan function setelah nama function"
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  //? cara ke-2 (enhanced method)
  orderDelivery({
    starterIndex = 1,
    mainIndex = 0,
    time = "20:00",
    address = "Indonesia",
  }) {
    console.log(
      `Order recived! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}, time: ${time}, address: ${address}`
    );
  },
  //? cara ke-2 (enhanced method)
  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta ${ing1}, ${ing2}, ${ing3}`);
  },
  //? cara ke-2 (enhanced method)
  orderPizza(mainIng, ...otherIng) {
    console.log(mainIng);
    console.log(otherIng);
  },
};
//*------------------------------------------------------------------------------------------------------------------------------

//! Looping Objects: "object value", "keys", "object entries"?
//? Looping objek dalam JavaScript dapat dilakukan menggunakan berbagai metode untuk mengakses nilai (values), kunci (keys), dan pasangan kunci-nilai (entries).

//# Object.keys()
//* Mengembalikan array dari nama-nama properti enumerable (keys) dari objek yang diberikan.
// Property NAMES
const properties = Object.keys(openingHours);
console.log(properties); // (3) ['thu', 'fri', 'sat']

let openStr = `We are open on ${properties.length} days: `;

for (const day of properties) {
  openStr = openStr + `${day}, `;
}

console.log(openStr);

//# Object.values()
//* Mengembalikan array dari nilai-nilai enumerable dari properti yang ditemukan pada objek yang diberikan.
// Property VALUES
const values = Object.values(openingHours);
console.log(values);

//# Object.entries()
//* Mengembalikan array dari pasangan kunci-nilai enumerable yang ditemukan pada objek yang diberikan.
//* Sederhananya gabungan antara keys dan values
// ENTRIES Object
const entries = Object.entries(openingHours);
console.log(openingHours);

// without destructuring object
for (const [key, value] of entries) {
  console.log(
    `We are open on ${key} days from ${value.open}AM until ${value.close}PM`
  );
}

// with destructuring object
for (const [key, { open , close }] of entries) {
  console.log(`We are open on ${key} days from ${open}AM until ${close}PM`);
}
