/*
    > == ) hanya value
    > === ) value + tipe data
*/

const age = `18`;

// jika hanya satu baris
if (age == 18) console.log(`value`);

if (Number(age) === 18) {
    console.log(`bisa tapi dikonversi`);
} else {
    console.log(`value + datatype`);
}

// Aturan umum untuk menulis "clean code" hindari penggunaan `==` sebanyak yang yang kita bisa

// menggunakan value

const favorite = Number(prompt(`What's your favorite number?`));
console.log(favorite);
console.log(typeof favorite);

// if (favorite == 12) {
//     console.log(`Cool! 12 is an amazing number!`);
// }

// best practice
if (favorite === 12) {
    console.log(`Cool! 12 is an amazing number!`);
} else if (favorite === 4) {
    console.log(`4 is an amazing number too!`);
} else {
    console.log(`number is not 12 and 4`);
}

// === sama dengan, !== tidak sama dengan
// == sama dengan, != tidak sama dengan

if (favorite !== 23) console.log(`Why not 23`);
