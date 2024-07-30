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

//! Sets?
//? di masa lalu, JS selalu memiliki stuktur data bawaan yang sangat sedikit, jadi pada dasarnya jS hanya memiliki object dan array, namum di ES6, dua struktur data lagi diperkenalkan, dan itu sets dan maps. jadi ini adalah struktur data yang cukup umum yang sudah ada dalam bahasa pemrograman lain, dan sekarang ada di JS

//? Sets => pada dasarnya hanyalah kumpulan nilai2 unik, yang berarti satu set tidak akan pernah memiliki duplikat, dan properti itu membuatnya berguna dalam situasi tertentu

const ordersSet = new Set([
  "pasta",
  "pizza",
  "pizza",
  "risotto",
  "pasta",
  "pizza",
]); // sets juga bisa menampung tipe data campuran

console.log(ordersSet); // Set(3) {'pasta', 'pizza', 'risotto'}

//$ FACT: 
/* 
*-> menggunakan sets semua yang DUPLIKAT akan hilang
*-> menggunakan sets data yang terliahat terlihat mirip seperti array
*-> sets dan array masih sangat berbeda, karna:
    1. elementnya unik
    2. karna urutan element dalam sets tidak relevan
*/

console.log(new Set('Syahrin')); // {'S', 'y', 'a', 'h', 'r', 'i', 'n'}

//# variableName.size : mengetahui ukuran sets
//? salah satu kegunaannya: jika digunakan oleh chef dapat dipakai untuk mengetahui berapa banyak makanan yang berberda yang akan dimasak
console.log(ordersSet.size); // 3

//# variableName.has(elementWantToCheck.) : cek ada atau tidak ada
console.log(ordersSet.has('pasta')); // true
console.log(ordersSet.has('bread')); // false

//# variableName.add('elementWantToAdd') : menambahkan element baru
ordersSet.add('soto')
console.log(ordersSet); // Set(4) {'pasta', 'pizza', 'risotto', 'soto'}

//# variableName.delete(elementWantToDelete) : menghapus element
ordersSet.delete('soto')
console.log(ordersSet); // Set(3) {'pasta', 'pizza', 'risotto'}

//# variableName.clear() : menghapus semua element
// ordersSet.clear() // Set(0) {size: 0}
console.log(ordersSet);



//$ TIPS: dalam array tidak ada metode yang sesederhana ini

//! apakah kita mencari index dalam sets?
//? TIDAK, karna sebenarnya dalam sets tidak ada index/urutan dan dalam sets tidak ada cara untuk mendapatkan nilai dari sets
console.log(ordersSet[0]); // undefined

//$ MASUK AKAL, jadi benar2 tidak perlu mengeluarkan data dari satu set, karna jika semua nilai unik, dan jika urutannya tidak penting, maka tidak ada gunanya mengambil nilai dari sets

//# Sets juga bisa di loop karna ia iterable
for (const order of ordersSet) {
  console.log(order);
}

//@ Example:

//# sets to array format
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']
const staffUnique = [...new Set(staff)]
console.log(staffUnique); // (3) ['Waiter', 'Chef', 'Manager']

console.log(new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size); // 3

const myName = 'Syahrin Matlail Fajri'
console.log(myName.length); // 21
console.log(new Set(myName).size); // 13

//$ KESIMPULAN:
/*
*-> sets tidak digunakan untuk menggantikan array sama sekali
*-> kapanpun anda perlu menyimpan value secara berurutan dan itu mungkin berisi duplikat SELALU GUNAKAN array
*-> ketika perlu benar2 memanipulasi data, GUNAKAN array karna array memiliki akses kebanyak method array
*-> gunakan sets hanya saat bekerja dengan "unique value" selain itu gunakan array
*/