"use strict";

//! Apa itu short circuiting?
//? Short-circuiting adalah teknik evaluasi ekspresi dalam pemrograman di mana evaluasi berhenti segera setelah hasilnya diketahui. Dalam konteks operator logika, ini berarti bahwa sebagian dari ekspresi mungkin tidak dievaluasi jika hasil akhir sudah bisa ditentukan dari sebagian ekspresi tersebut. Di JavaScript, short-circuiting terjadi dengan operator logika AND (&&) dan OR (||).

//! Operator OR (`||`)
//? Untuk operator OR, jika operand pertama benar (truthy), maka nilai tersebut akan dikembalikan dan operand kedua tidak akan dievaluasi karena hasil akhir dari ekspresi OR akan selalu benar.
//@ Contoh:
const a = true || false; // a adalah true
const b = false || true; // b adalah true
const c = true || true; // c adalah true

const d = null || "default"; // d adalah 'default'
const e = "value" || "default"; // e adalah 'value'

//! Operator AND (&&)
//? Untuk operator AND, jika operand pertama salah (falsy), maka nilai tersebut akan dikembalikan dan operand kedua tidak akan dievaluasi karena hasil akhir dari ekspresi AND akan selalu salah.
//@ Contoh:
const f = false && true; // f adalah false
const g = true && false; // g adalah false
const h = true && true; // h adalah true

const i = null && "value"; // i adalah null
const j = "value" && "default"; // j adalah 'default'

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

//!------ OR --------
//# exp 1:
console.log(0 || "Syahrin"); // Syahrin
console.log(5 || "Matlail"); // 5
console.log(undefined || 0 || "" || "Fajri" || null); // Fajri

//# exp 2:
restaurant.numGuest1 = 40;
const guest1 = restaurant.numGuest1
  ? restaurant.numGuest1
  : (restaurant.numGuest1 = 10);
console.log(guest1);

// with OR logic opeartor
const guest2 = restaurant.numGuest2 || 20;
console.log(guest2);

//!------ AND --------
//# exp 1:
console.log(0 && "Syahrin"); // 0
console.log(5 && "Matlail"); // Matlail
console.log('Syahrin' && 'Matlail' && 'Fajri' && null && 1998 && undefined); // null

//# exp 2:
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushroom', 'spinach')
}

// with AND logic operator
restaurant.orderPizza && restaurant.orderPizza('banana', 'chesse')

//$ Kesimpulan:
/*
*-> Short-circuiting membantu meningkatkan efisiensi dan kejelasan kode dengan menghindari evaluasi yang tidak perlu. Dengan memahami bagaimana operator && dan || bekerja dalam hal short-circuiting, Anda dapat menulis kode yang lebih efisien dan lebih mudah dibaca.

*-> Ini adalah metode yang jauh lebih mudah untuk menetapkan nilai default dari pada harus berurusan dengan "operator ternary" atau lebih buruknya "if else statement"

*-> Cara kerja 'AND' berlawanan dengan cara kerja 'OR'

*-> OR Operator => mengembalikan nilai 'truthy' pertama dari semuanya ATAU nilai terakhir jika semuanya 'false'

*-> AND Operator => mengembalikan nilai 'falsy' pertama ATAU jika nilai terakhir semua'true'

*-> Kita dapat menggunakan OR operator untuk menetapkan nilai default

*-> kita dapat menggunakan AND untuk mengesekusi kode di opearsi ke-2 jika operasi ke-1 'true'
*/
