const friend1 = `michael`;
const friend2 = `steven`;
const friend3 = `peter`;

// old version
const years = new Array(1999, 1998, 1997, 1996);
console.log(years);

// literal version (modern style)
const friends = [`michael`, `steven`, `peter`];
console.log(friends);

// mengambil sesuai urutan
console.log(friends[0]); // [0] = urutan/index

// menghitung jumlah element di array
console.log(friends.length); // 3 > karna jumlah, bukan urutan

// cara kerja menghitung urutan
console.log(friends[2]);
console.log(friends[friends.length - 1]); // 3 - 1 = urutan ke 2

// menggantikan value dalam array
const pet = [`fish`, `dog`, `cat`];
// fish ingin digantikan dengan lizard
pet[0] = `lizard`;
console.log(pet);

////////////////////////////////////////////////////////
// CATATAN
/*
    > Cuma primitive value yang tidak bisa diubah
    > Array bukanlan primitiv value
*/

// fun fact!..............
// dalam array kita bisa melakukan perhitungan
// dalam array kita bisa masukan data apapun
// dalam array kita bisa masukan array juga

const firstName = `Syahrin`;
const me = [firstName, `Matlail`, 2024 - 1998, `student`, pet];
console.log(me);

// penggnaan function dalam array
const calcAge = function (birthYear) {
    return 2024 - birthYear;
};

const birth = [1990, 1991, 1992, 1993, 2001, 2002];

// console.log(calcAge(birth));

const age1 = calcAge(birth[0]);
const age2 = calcAge(birth[1]);
const age3 = calcAge(birth[birth.length - 1]);

console.log(age1, age2, age3);

const ages = [
    calcAge(birth[0]),
    calcAge(birth[1]),
    calcAge(birth[birth.length - 1]),
];

console.log(ages);
