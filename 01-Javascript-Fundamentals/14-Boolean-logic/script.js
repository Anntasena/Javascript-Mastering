// Boolean Logic adalah cabang ilmu komputer, yang menggunakan nilai benar dan salah untuk menyelesaikan masalah logika yang kompleks

const hasDriversLisence = true; // A
const hasGoodVision = true; // B

// Operator 'dan' ditulis &&
// Operator 'atau' ditulis ||

console.log(hasDriversLisence && hasGoodVision); // false
console.log(hasDriversLisence || hasGoodVision); // true
console.log(!hasDriversLisence); // false


if (hasDriversLisence && hasGoodVision) {
    console.log(`sarah is able to drive`);
} else {
    console.log(`someone else to drive`);
}

const isTired = true // C

console.log(hasDriversLisence || hasGoodVision || isTired);

if (hasDriversLisence && hasGoodVision && !isTired) {
    console.log(`sarah able to drive`);
} else {
    console.log(`sarah must sleep`);
}
