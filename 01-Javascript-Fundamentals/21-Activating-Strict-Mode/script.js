// Strict mode

// strict mode adalah mode khusus yang kita aktifkan dalam javascript, yang memudahkan kita untuk menulis kode javascript yang aman dan menhindari kesalahan yang tidak disengaja

// 1.) strict mode melarang kita melakukan hal2 tertnetu
// 2.) membuat kesalahan benar benar telihat bagi kita dalam situasi tertentu

// cara mengaktifkan strict mode (cuma bisa kutip tidak bisa backtic)
"use strict";

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log(`I can drive :D`);


// const interface = `Audio`
// console.log(interface);