// 'use strict'

// Function = sepotong kode yang dapat kita gunakan kembali
// function mirip seperti variable tetapi untuk seluruh potongan kode

function logger() {
    console.log(`my name is Syahrin :D`);
}

// calling, running, invoking function
logger();
logger();

// analogi function itu seperti mesin jus, masukan buah -> di olah -> jadi jus

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

fruitProcessor(3, 4); // (3, 4) disebut argument

console.log(fruitProcessor(2, 1));

const mixJuice = fruitProcessor(3, 4);
console.log(mixJuice);

// function memungkinkan kita untuk menulis kode yang lebih mudah
