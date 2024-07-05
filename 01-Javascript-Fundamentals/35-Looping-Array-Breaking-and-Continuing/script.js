// salah satu aplikasi pengulanagan "for loops" yaitu mengulangan pengulangan arrays

const me = [
    `Syahrin`,
    `Matlail`,
    2024 - 1998,
    `Student`,
    [`Michael`, `Peter`, `Steven`],
    true,
];

const types = [];

// console.log(jonas[0]);
// console.log(jonas[1]);
// console.log(jonas[2]);
// ...
// console.log(jonas[4]);

// perhitungan array harus dimulai dari 0 karna urutan array di mulai dari index 0
// for (let i = 0; i <= me.length - 1; i++) {
//     console.log(me[i]);

//     // types[i] = typeof me[i]
//     types.push(typeof me[i]);
// }

// console.log(types);

//////// example
const years = [1991, 2007, 1998, 2008, 1995, 2003, 1990, 2012];
const ages = [];

for (let i = 0; i <= years.length - 1; i++) {
    const age = 2024 - years[i];
    ages.push(age);
}

console.log(ages);

///////////// continue and break
////////////////////////////////
// continue => keluar dari iterasi loop saat ini dan melanjutkan ke loop berikutnya
// break => mengakhiri seluruh loop
console.log(`-----ONLY STRINGS-----`);
for (let i = 0; i <= me.length - 1; i++) {
    if (typeof me[i] !== `string`) continue;

    console.log(me[i], typeof me[i]);
}

console.log(`-----ONLY NUMBERS-----`);
for (let i = 0; i <= me.length - 1; i++) {
    if (typeof me[i] === `number`) break;

    console.log(me[i], typeof me[i]);
}
