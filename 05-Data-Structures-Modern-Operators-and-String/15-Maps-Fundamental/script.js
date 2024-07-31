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

//! Maps?
//? Kenyataannya maps lebih berguna daripada sets

//? Maps adalah struktur data yang dapat kita gunakan untuk memetakan nilai kunci "KEYS", sama seperti data object disimpan dalam pasangan "key value" di maps. perbedaan besarnya antara object dan maps adalah dalam MAPS, key  dapat memiliki tipe apapun dan ini bisa sangat besar, dan dalam OBJECT, key pada dasarnya selalu berupa string

// syntax

// cara termudah membuat map adalah dengan membuat map kosong
const rest = new Map();

//# cara mengisi data element di map
rest.set("name", "Classico Italiano");
rest.set(1, "Malang, Indonesia");
console.log(rest.set(2, "Surabaya, Indonesia")); // set mengembalikan value map yang diperbaharui

rest
  .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
  .set("open", 11)
  .set("close", 23)
  .set(true, "We are open")
  .set(false, "We are closed");

//# cara membaca data element di map
rest.get("name");

console.log(rest.get("name"));
console.log(rest.get(1)); // malang, indonesia
console.log(rest.get("1")); // undefined => harus selalu sama dengan tipe datanya
console.log(rest.get("open"));
console.log(rest.get(true));

const time = 21;
const restOpen = rest.get(time > rest.get("open") && time < rest.get("close")); // ini terasa cukup cerdas, tapi jangan sering digunakan karna susah dibaca
console.log(restOpen);

//# cara untuk memeriksa maps berisi keys tertentu
rest.has("categories");

console.log(rest.has("categories")); // true
console.log(rest.has("product")); // false

//# cara untuk menghapus element di maps
rest.delete(2);
console.log(rest);

//# cara untuk memeriksa ukuran di maps
console.log(rest.size); // 7

//# cara menghapus semua element di maps
// rest.clear()
console.log(rest);

//@ menggunakan object & array menjadi maps keys
const arr = [1,2];
rest.set(arr, "test");
// rest.set([1,2], "test"); // kurang tepat
console.log(rest);

//@ mendapatkan data dari array yang ada di maps
// cara SALAH mendapatkan data array di maps
console.log(rest.get([1, 2])); // undefined
// cara BENAR
console.log(rest.get(arr));

//@ contoh maps di DOM
rest.set(document.querySelector('h1'), 'Heading')
console.log(rest);
