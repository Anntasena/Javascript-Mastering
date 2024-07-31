"use strict";

//*------------------------------------------------------------------------------------------------------------------------------
const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours, //? cara ke-1 (ES6 enhanced object literals) -> "tidak perlu openingHours : openingHours"

  //? cara ke-2 (enhanced method) -> "tidak menggunakan function setelah nama function"
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  //? cara ke-2 (enhanced method)
  orderDelivery({
    starterIndex = 1,
    mainIndex = 0,
    time = "20:00",
    address = "Indonesia",
  }) {
    console.log(
      `Order recived! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}, time: ${time}, address: ${address}`
    );
  },
  //? cara ke-2 (enhanced method)
  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta ${ing1}, ${ing2}, ${ing3}`);
  },
  //? cara ke-2 (enhanced method)
  orderPizza(mainIng, ...otherIng) {
    console.log(mainIng);
    console.log(otherIng);
  },
};
//*------------------------------------------------------------------------------------------------------------------------------

//! Maps iteration

//? ada cara lain mengisi map tanpa menggunakan "Set". Metode ini mudah digunakan ketika ada banyak nilai

const question = new Map([
  ['question', 'what is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct🫡'],
  [false, 'Try again😖'],
])
console.log(question);

//$ convert object to map
console.log(Object.entries(openingHours));

const hoursMap = new Map(Object.entries(openingHours))
console.log(hoursMap);

//# iteration in map
console.log(question.get('question'));

for (const [key, value] of question) {
  if(typeof key  === 'number') {
    console.log(`Answer ${key}: ${value}`);
  }
}

// const answer = Number(prompt('Your Answer?'))
const answer = 3
console.log(answer);

if (answer === question.get('correct')) {
  console.log(question.get(true));
} else {
  console.log(question.get(false));
}

// eficient code
console.log(question.get(question.get('correct') === answer));

//$ convert array to map
console.log(...question);
// console.log(...question.entries()); ini sama dengan console.log(...question)
console.log(question.entries());
console.log(...question.keys());
console.log(...question.values());
