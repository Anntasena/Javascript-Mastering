// Object adalah data structure

// dalam array tidak ada cara untuk memberi nama pada elemen, kita hanya bisa mengetahui hanya dari nomer urut
const meArray = [
    `Syahrin`,
    `Matlail`,
    2024 - 1998,
    `student`,
    [`michael`, `peter`, `steven`],
];

// dalam object kita bisa mendefinisikan pasangan dari nilai kunci
const meObject = {
    firstName: `Syahrin`,
    lastName: `Matlail`,
    age: 2024 - 1998,
    job: `student`,
    friends: [`michael`, `peter`, `steven`],
}; // ini adalah objeck literal

// perbedaan besar object vs array adalah => object tidak peduli urutan

console.log(meObject);
console.log(meObject.lastName); // mengambil propeti lastName dari meObject
console.log(meObject[`lastName`]); // properti harus menggunakan kutip

// experiment
console.log(meObject.age + meObject.lastName);
console.log(meObject[`age`]);

const nameKey = `Name`;
console.log(meObject[`first` + nameKey]);
console.log(meObject[`last` + nameKey]);
// console.log(meObject.lastName) => ini harus digunakan saat properti sudah final bukan properti yang di hitung

// const interestedIn = prompt(
//     `What do you know about me? choose between, firstName, lastName, age, job, and friends`
// );
// console.log(meObject.interestedIn); // undefined

// if (meObject[interestedIn]) {
//     console.log(meObject[interestedIn]); // student
// } else {
//     console.log(
//         `Wrong reqest!, choose between, firstName, lastName, age, job, and friends`
//     );
// }

// menambah properti di object
meObject.location = `Indonesia`;
meObject[`city`] = `tangerang`;
console.log(meObject);

// Challenge
// "Syahrin has 3 friends, and his best friend is called michael"

console.log(`${meObject.firstName} has ${meObject.friends.length} friends, and his best friend is called ${meObject.friends[0]}`);
