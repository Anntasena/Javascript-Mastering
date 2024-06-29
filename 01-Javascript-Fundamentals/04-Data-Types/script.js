// Data Types

// Object dan Primitives

// Dalam Javascript setiap value adalah objek atau primitive

// contoh: Objek
let me = {
    name: "Syahrin",
};
// contoh: Primitive
let firstName = "Syahrin";
let age = 30;

// Jadi suatu nilai akan menjadi 'primitive' jika bukan 'objek'

// ini adalah data type paling penting
let numberType = 20
let stringType = "String Data Type"
let booleanType= true
// data type tambahan
let undefinedType // data yang belum ada value 
null // data kosong
let symbolType = Symbol(); // Symbol (ES2015)
let bigIntType = 1234567890123456789012345678901234567890n;

console.log(numberType);
/* multi-line comment */

// testing datatype
let javascriptIsFun = true
console.log(javascriptIsFun); true
// typeof = operator untuk mengetahui value datatype di javascript
console.log(typeof javascriptIsFun); // boolean

// Dynamic Typeing = dapat dengan mudah mengubah value yang dipegang oleh variable

let dynamicTypeing = true
dynamicTypeing = "YES!"

console.log(dynamicTypeing); // value: YES! bukan true