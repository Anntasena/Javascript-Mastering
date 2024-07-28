"use strict";

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

//*------------------------------------------------------------------------------------------------------------------------------
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

//! Optional chaining
//? Optional chaining (?.) adalah fitur JavaScript yang diperkenalkan di ES2020 yang memudahkan akses ke properti dalam objek atau panggilan metode yang mungkin tidak ada atau undefined, tanpa harus memeriksa secara eksplisit apakah properti atau metode tersebut ada. Ini membantu menghindari kesalahan seperti "Cannot read property of undefined".

console.log(restaurant.openingHours.mon); // undefined

//# if statement
if (restaurant.openingHours.mon) {
  // cant render bcs false
  console.log(restaurant.openingHours.mon);
}
if (restaurant.openingHours.fri) {
  // render bcs true
  console.log(restaurant.openingHours.fri);
}

//# optional chain (?.)
// console.log(restaurant.openingHours.mon.open); // error
console.log(restaurant.openingHours.mon?.open); // undefined
console.log(restaurant.openingHours?.mon?.open); // undefined

//@ example
const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? "closed";
  console.log(`when ${day}, we open at ${open}`);
}

//# optional chaining in method
console.log(restaurant.order?.(0, 1) ?? "Method does not exist");

//# optional chain in arrays
const user = [{ name: "Syahrin", email: "syahrin@gmail.com", age: 26 }];
// const user = []
console.log(user[0]?.name ?? "User not found");
//# opetional chain with if else how to works
if (user.length > 0) console.log(user[0].name);
else {
  console.log("User not found");
}
