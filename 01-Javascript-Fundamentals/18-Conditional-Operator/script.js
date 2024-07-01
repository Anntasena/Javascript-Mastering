const age = 16;

// ternary operator
// condition + if part + else part
age >= 18
    ? console.log(`I like to drink amer 🍷`)
    : console.log(`I like to drink water 💧`);

// writing variant ternary
const drink = age >= 18 ? `amer 🍷` : `water 💧`; // expresion
console.log(drink);

// if else
let drink2;
if (age >= 18) {
    drink2 = `wine`;
} else {
    drink2 = `water`;
}
console.log(drink2);

// template literal
console.log(`I like to drink ${age >= 18 ? `SODA 🍷` : `MINERAL WATER 💧`}`);
console.log(`I like to drink`);
