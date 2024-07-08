"use strict";

////// MASALAH: 1
// kita bekerja di sebuah perusahaan bangunan khusus smart home thermometer. Tugas terbaru kita adalah seperti ini: "jika diberi susunan suhu dalam satu hari, hitunglah amplitudo suhunya. perlu diingat bahwa terkadang mungkin ada kesalahan sensor"

// 1. Memahami masalahnya
// - apa itu temperatur amplitudo? Jawaban: perbedaan suhu tertinggi dan terendah
// - bagaimana cara menghitung max dan mix temperatur?
// - apa kesalahan sensor? apa yang harus dilakukan ketika terjadi

// 2. Memecah masalah menjadi berberapa masalah (sub-problems)
// - bagaimana mengabaikan error?
// - menemukan nilai maksimal dalam temperatur array
// - menemukan nilai minimal dalam temperatur array
// - mengurangi min dari max (amplitudo) dan kemudian mengembalikannya

////// MASALAH: 2
// Function seharusnya menerima 2 array temperatur

// 1. Memahami masalahnya
// - apakah kita perlu mengimpementasikan fungsi yang sama 2 kali? Jawabannya: tidak. cukup gabungkan saja 2 array
// -

// 2. Memecah masalah menjadi berberapa masalah (sub-problems)
// - bagaimana cara menggabungkan 2 array

//////////////////
// BAD PRACTICE //
//////////////////
/* 
const maxTemp = function (arr) {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
};

const minTemp = function (arr) {
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
};

const calcTempAmlitude = function (arr) {
    const avgTemp = maxTemp(arr) - minTemp(arr);
    return avgTemp;
};

console.log(maxTemp(temperatures));
console.log(minTemp(temperatures));
console.log(calcTempAmlitude(temperatures));
*/

///////////////////
// BEST PRACTICE //
///////////////////
const temperatures1 = [3, -2, -6, -1, `error`, 9, 13, 17, 15, 14, 9, 5];
const temperatures2 = [8, -4, -3, -5, "error", 12, 20, 18, 16, 19, 7, 10];

const calcTempAmlitude = function (temps1, temps2) {
    const temps = temps1.concat(temps2);

    let max = temps[0];
    let min = temps[0];

    for (let i = 0; i < temps.length; i++) {
        const curTemp = temps[i];
        if (typeof curTemp !== `number`) continue;

        if (curTemp > max) max = curTemp;
        if (curTemp < min) min = curTemp;
    }
    return max - min;
};

const amplitude = calcTempAmlitude(temperatures1, temperatures2);
console.log(amplitude);
