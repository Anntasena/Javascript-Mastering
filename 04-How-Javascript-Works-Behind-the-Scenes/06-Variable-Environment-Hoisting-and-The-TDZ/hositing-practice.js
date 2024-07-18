"use strict";

//@ variable
console.log(me); // undefined
// console.log(job) // error cant access job
// console.log(year); // error cant access year

var me = `Syahrin`;
let job = `programmer`;
const year = 1998;

//@ function
console.log(addDelc(2,3));
console.log(addExpr(3,3));
console.log(addArrow(2,2));


function addDelc(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;

/*
$ TIPS: best practice not rule javascript
*- jangan gunakan "var" untuk mendeklarasikan variable
*- gunakan "const"  untuk mendeklarasikan sebagian besar variable
*- gunakan "let" hanya jika ingin mengubah variable nanti
*- untuk menulis code yang clean, kita harus mendeklarasikan variable di bagian atas setiap scope
*- selalu dekalrasikan semua function terlebih dahulu dan gunakan hanya setelah declarasi, dan ini berlaku untuk setiap jenis function, bahkan function declaration yang mempunyai fitur hoisting
*/