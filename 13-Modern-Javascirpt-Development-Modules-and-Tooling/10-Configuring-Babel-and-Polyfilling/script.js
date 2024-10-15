/*
! CONFIGURING BABEL AND POLYFILLING
? Configuring babel adalah mengkonfigurasi kode super modern ke ES5

! Mengapa ini penting?
? Karena masih banyak orang diluar sana yang terjebak dalam komputer windows xp atau windows 7 dan tidak dapat mengupgrade browser mereka, dan yang terpenting kita ingin website yang kita buat berfungsi untuk semua orang

! Bagaiman babel bekerja?
? Pada dasarnya babel bekerja dengan plugin dan preset yang keduanya dapat di konfigurasi

! Apa itu plugin?
? Plugin pada dasarnya adalah fitur javascript tertentu yang ingin kita transpile, jadi untuk mengkonversi

! Cara lain menggunakan babel selain plugin tunggal adalah dengan preset
? Preset adalah sekumpulan plugin yang dikumpulkan / gabungkan bersama dan parcel secara default mengunaakn preset
*/

import cloneDeep from "lodash-es";

//@------------------------------------------
console.log("Import module");

import add, { cart } from "./shoppingCart";
add("pizza", 2);
add("pizza", 2);
add("pizza", 2);

//@------------------------------------------
const state = {
  cart: [
    { product: "bread", quatity: 5 },
    { product: "pizza", quatity: 5 },
  ],
  user: { loggedIn: true },
};

const stateClone = Object.assign({}, state);
const stateClone2 = cloneDeep(state);
state.user.loggedIn = false;

console.log(stateClone); // user true
console.log(stateClone2); // user false [deep clone tidak merubah value saat copy]

if (module.hot) {
  module.hot.accept();
}

class Person {
  greeting = "hey";
  constructor(name) {
    this.name = name;
    console.log(`${this.greeting} ${this.name}`);
  }
}

const syahrin = new Person("Syahrin");

console.log(syahrin ?? null);

//! Polyfilling
//? Polyfilling pada dasarnya adalah membuat ulang function yang ditentukan dan membuatnya tersedia dalam bundle ini
// install => npm i core-js
import "core-js/stable"; // satu bundle
import "core-js/stable/array/find"; // funtion satuan
import "core-js/stable/promise/any"; // funtion satuan

//! Async polyfilling (for async function)
//# Regenerator runtime
// install => npm i regenerator-runtime
import "regenerator-runtime/runtime";
