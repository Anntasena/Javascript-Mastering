"use strict";

/*
! Destructuring
? => Destructuring adalah fitur ES6 yang pada dasarnya adalah cara untuk membongkar nilai dari array atau object kedalam variable terpisah
? => Destructuring adalah memecah struktur data yang kompleks menjadi struktur data yang lebih kecil seperti variable
*/

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
  //* -> Function with array
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  //* -> Function with object
  // argumen juga dapat menggunakan default value
  orderDelivery: function ({starterIndex = 1,mainIndex = 0,time = '20:00',address = 'Indonesia'}) {
    console.log(`Order recived! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}, time: ${time}, address: ${address}`);
  }
};

//* INGAT!! object tak peduli dengan urutan

//@ Destructuring objects
//? Dalam bahasa ini fitur destructruing object sangat penting dan berguna sekali, apa lagi jika kita berurusan dengan API. API call pada dasarnya berarti mendapatkan data dari aplikasi web lain. data ini biasanya datang dalam bentuk object, dan destructuring memungkinkan kita menulis lebih sedikit kode
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

//@ Destructuring object tetapi mengganti nama variablenya
//? fitur ini sangat berguna saat berhadapan dengan data pihak ketiga
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

//@ fitur untuk menghindari undefined menggunakan default value
//? fitur ini sangat membantu ketika kita tidak memiliki data atau kita mungkin tidak selalu tahu seperti apa sebenarnya data itu
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//@ mutating variable saat melakukan destructuring variable
let a = 111;
let b = 999;
const obj = { a: 23, b: 27, c: 14 };
// {a,b} = obj // jika seperti ini akan terjadi error: unexpected token
({ a, b } = obj); // menggunakan tanda kurung "()" bisa menajadi solusi
console.log(a, b);

//@ destructruing nested object
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

//@ destructuring function object
//? destructuring bisa langsung dilakukan di argumen function
restaurant.orderDelivery({
  time: '22:50',
  address: 'Tangerang, banten',
  mainIndex: 2,
  starterIndex: 2,
})

//@ menggunakan default value dalam argumen di function
restaurant.orderDelivery({
  mainIndex: 0
})