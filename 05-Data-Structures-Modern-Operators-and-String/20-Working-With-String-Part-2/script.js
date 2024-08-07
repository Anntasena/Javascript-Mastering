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

//! Working With String

const airline = "TAP Air Portugal";
const plane = "A320";

//# -> ".toLowerCase()" => digunakan untuk mengubah semua huruf string menjadi huruf kecil (lowercase)
console.log(airline.toLowerCase()); // tap air portugal
console.log("Syahrin".toLowerCase()); // tsyahrin

//# -> ".toUpperCase()" => digunakan untuk mengubah semua huruf string menjadi huruf besar (uppercase)
console.log(airline.toUpperCase()); // TAP AIR PORTUGAL
console.log("Syahrin".toUpperCase()); // SYAHRIN

//@ [Real Example] fix capitalization in name
const passenger = "SyaHriN"; // diubah menjadi -> Syahrin
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1); // S + yahrin
console.log(passengerCorrect); // Syahrin

//@ [Real Example] fix capitalization in name (FUNCTION)
const fixCapitalName = function (name) {
  const passName = name;
  const passNameLower = passName.toLowerCase();
  const passNameFix = passNameLower[0].toUpperCase() + passNameLower.slice(1);
  console.log(passNameFix);
};

fixCapitalName("MatLAiL");
fixCapitalName("FaJRI");

//@ [Real Example] comparing email
const email = "hello@syahrin.com";
const loginEmail = "  Hello@Syahrin.Com \n";
const loginEmail2 = "  Heello@Syahrin.Com \n";

//# -> ".trim()" => digunakan untuk menghilangkan spasi kosong (whitespace) dari kedua ujung string.
const trimmedEmail = loginEmail.trim();
const fixEmail = trimmedEmail.toLowerCase();
console.log(fixEmail); // hello@syahrin.com

// shortHand practice
const normalizeEmail = loginEmail.toLowerCase().trim();
console.log(normalizeEmail); // hello@syahrin.com

//@ [Real Example] comparing email (FUNCTION)
const compareEmail = function (loginEmail) {
  const makeEmaillower = loginEmail.toLowerCase().trim();
  return makeEmaillower === email
    ? console.log("Success: email valid")
    : console.log("Wrong: email invalid");
};

compareEmail(loginEmail); // Success: email valid
compareEmail(loginEmail2); // Wrong: email invalid

//# -> ".replace()" => digunakan untuk menggantikan sebagian dari string dengan string lain.
const priceIND = "Rp288,97";
const priceUS = priceIND.replace("Rp", "$").replace(",", ".");
console.log(priceUS); //-> $288.97

//# -> ".replaceAll()" => digunakan untuk menggantikan semua dari string dengan string lain.
const announcement =
  "All passanger come to boarding to boarding door 23. Boarding door 23!";
console.log(announcement.replace("door", "gate")); // All passanger come to boarding to boarding gate 23. Boarding door 23!
console.log(announcement.replaceAll("door", "gate")); // All passanger come to boarding to boarding gate 23. Boarding gate 23!

// replace all chacarter with "regular expresion"
//$ -> explain => /door/g => // (regular expresion) + g (flag yang artinya global)
console.log(announcement.replace(/door/g, "gate")); // All passanger come to boarding to boarding gate 23. Boarding gate 23!

// booleans value
const newPlane1 = "A320neo";
const newPlane2 = "Airbus A320neo";

//# -> ".includes()" => digunakan untuk memeriksa apakah sebuah substring atau karakter tertentu ada di dalam string.
console.log(newPlane1.includes("A320")); // true
console.log(newPlane1.includes("Boeing")); // false

//# -> "startsWith()" => digunakan untuk memeriksa apakah sebuah string dimulai dengan substring atau karakter tertentu.
console.log(newPlane1.startsWith("Airbus")); // false
console.log(newPlane2.startsWith("Airbus")); // true

//# -> "endsWith()" => digunakan untuk memeriksa apakah sebuah string diakhiri dengan substring atau karakter tertentu.
console.log(newPlane2.endsWith("neo")); // true

// [Real Example] checking new Plane
if (newPlane2.startsWith("Airbus") && newPlane2.endsWith("neo")) {
  console.log("part of New Airbus family"); //  part of New Airbus family
}

// practice exercise [check barang bawaan untuk boarding pesawat]
const checkBaggage = function(items) {
  const beggage = items.toLowerCase()
  if (beggage.includes('knife') || beggage.includes('gun')) {
    console.log('You are NOT allowed on board');
  } else {
    console.log('Welcome aboard!');
    
  }
}
checkBaggage('I have a laptop, some Food and a pocket Knife') // You are NOT allowed on board
checkBaggage('Shocks and camera') // Welcome aboard!
checkBaggage('Got some snacks and gun for protection') // You are NOT allowed on board