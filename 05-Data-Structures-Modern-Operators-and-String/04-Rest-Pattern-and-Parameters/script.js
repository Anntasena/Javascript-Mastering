"use strict";

//! rest pattern and rest parameters
//? rest pattern and parameters terlihat persis seperti operator spread, ia memiliki syntax yang sama yaitu titik 3 "...", tetapi sebenarnya kebalikan dari operator spread

//! perbedaan rest pattern and paramentes dengan spread operator
/*
#->  spread operator (MENYEBARKAN)
  *-> Spread operator digunakan untuk "menyebarkan" elemen dari array atau properti dari objek. Ini bisa berguna dalam beberapa situasi seperti menggabungkan array, menyalin array, atau menggabungkan objek.
#-> rest pattern (MENGUMPULKAN)
  *-> Rest pattern/parameters juga menggunakan tiga titik (...), tetapi digunakan untuk mengumpulkan sisa elemen menjadi array atau objek. Ini sangat berguna dalam fungsi ketika Anda tidak tahu berapa banyak argumen yang akan diterima, atau saat destructuring.
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
  }
};
//*------------------------------------------------------------------------------------------------------------------------------

//@ Destructuring-----------------------------
// SPREAD, karna dari sisi kanan =
const arr = [1, 2, ...[3, 4]];
console.log(arr);
// REST, karna dari sisi kiri =
const [a, b, ...others] = [1, 2, 3, 4];
console.log(a, b, others);

//$ TIPS: rest element harus menajadi element terakhir
// in Array
const [pizza, ...otherFoods] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, otherFoods);

//$ INGAT!: object tak peduli urutan
// in Object
const { sat, ...weekdays } = restaurant.openingHours;
console.log(sat, weekdays);

//@ Functions---------------------------------
// rest parrametes
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
  }
  console.log(sum);
};
add(2, 4);
add(5, 4, 2, 1, 3, 4, 11);
add(1, 2, 3, 4, 5, 6, 7, 8, 9);

const x = [25, 35, 1000, 30, 42, 43, 25];
add(...x);

restaurant.orderPizza('jamur', 'daging', 'bawang', 'ayam', 'tomat', 'kemangi')
restaurant.orderPizza('chesse')
restaurant.orderPizza(...restaurant.mainMenu)

//$ KESIMPULAN: 
/*
$-> rest parameter digunakan untuk mengumpulkan semua sisa yang pada dasarnya tidak digunakan pada parameter
$-> SPREAD OPREATOR = digunakan dimana kita menulis value, dipisahkan dengan koma
$-> REST PATTERN = digunakan dimana kita menulis nama variable yang dipisahkan dengan koma
*/