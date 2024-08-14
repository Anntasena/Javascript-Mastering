"use strict";

const oneWord = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

// Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string : ${str}`);
  console.log(`Transform string : ${fn(str)}`);
  console.log(`Transform by : ${fn.name}`);
};

transformer("Javascript is the best!", upperFirstWord);
transformer("Javascript is the best!", oneWord);

//$ [EXPLAIN] transformer("Javascript is the best!", upperFirstWord);
/*
  -> transformer() = higher order function
  -> upperFirstWord = callback function
*/


// JS uses callback all time
const high5 = function () {
  console.log("✋");
};

document.body.addEventListener("click", high5)

["Jhonson", "Cyclops", "Vale", "Valir", "Hayabusa"].forEach(high5);


//$ [KEUNTUNGAN]
/*
*-> membuatnya mudah untuk dipecah atau dikodekan, menjadi bagian yang lebih dapat digunakan kembali dan saling berhubungan
*-> callback function memungkinkan kita membuat abstraksi
  - apa itu abstaksi / abstaction : pada dasarnya adalah menyembunyikan detail dari berberapa implementasi kode karena kita tidak terlalu peduli dengan semua detail itu
*/