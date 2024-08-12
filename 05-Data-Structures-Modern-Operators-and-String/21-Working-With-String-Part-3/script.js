"use strict";

//! Working With String

const airline = "TAP Air Portugal";
const plane = "A320";

//# -> ".split()" =>  digunakan untuk memecah atau membagi string menjadi array berdasarkan pembatas (delimiter) tertentu.
console.log("a+very+nice+string"); // a+very+nice+string
console.log("a+very+nice+string".split("+")); // ['a', 'very', 'nice', 'string']
console.log("Syahrin Matlail Fajri".split(" ")); // ['Syahrin', 'Matlail', 'Fajri']

//@ -> .split() + destructuring
const [firstName, lastName] = "Syahrin Matlail".split(" ");

//# -> ".join()" => digunakan untuk menggabungkan semua elemen dalam array menjadi sebuah string.
const newName = ["Mr.", firstName, lastName.toUpperCase()].join(" ");
console.log(newName); // Mr. Syahrin MATLAIL

//@ [REAL EXAMPLE]
const capitalizName = function (name) {
  const names = name.split(" ");
  const namesUpper = [];

  for (const n of names) {
    // first ways:
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));

    // alternatif ways:
    //# -> ".replace()" => pada string digunakan untuk mengganti sebagian dari string dengan string lain.
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(" "));
};

capitalizName("jessica ann smith davis");
capitalizName("syahrin matlail fajri");

// Padding string
//# -> ".padStart()" => digunakan untuk menambahkan karakter di AWAL string sehingga string tersebut mencapai panjang tertentu
const message = "Go to gate 23";
console.log(message.padStart(25, "+")); // ++++++++++++Go to gate 23
console.log(message.padStart(25, "+").length); // 25

//# -> ".padStart()" => digunakan untuk menambahkan karakter di AKHIR string sehingga string tersebut mencapai panjang tertentu
console.log(message.padEnd(25, "+")); // Go to gate 23++++++++++++
console.log(message.padEnd(25, "+").length); // 25

//@ [COMBINATION] padStart + padEnd
console.log(message.padStart(25, "+").padEnd(35, "+")); // ++++++++++++Go to gate 23++++++++++
console.log(message.padStart(25, "+").padEnd(35, "+").length); // 35

//@ [REAL EXAMPLE] credit card
const maskCreditCard = function (number) {
  // const str = String(number)
  const str = number + ""; // alternatif ways
  const last = str.slice(-4);
  return last.padStart(str.length, "*");
};

console.log(maskCreditCard(129639146));
console.log(maskCreditCard(13055123641291265));
console.log(maskCreditCard("12369156436513513418971"));

//# -> ".repeat()" => digunakan untuk membuat salinan baru dari string asli yang diulang beberapa kali.
const messageWeather = "Bad weather... All Departure Delayed... ";
console.log(messageWeather.repeat(5)); // Bad weather... All Departure Delayed... Bad weather... All Departure Delayed... Bad weather... All Departure Delayed... Bad weather... All Departure Delayed... Bad weather... All Departure Delayed...

const planesInlines = function (e) {
  console.log(`There are ${e} planes in lines ${"✈️".repeat(e)}`);
};

planesInlines(5); // There are 5 planes in lines ✈️✈️✈️✈️✈️
planesInlines(3); // There are 3 planes in lines ✈️✈️✈️
planesInlines(12); // There are 12 planes in lines ✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️
