"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

//! LOOPING ARRAYS: FOR EACH

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// with for of
// for (const move of movements) {
for (const [i, move] of movements.entries()) {
  if (move > 0) {
    console.log(`🟢 ${i + 1}: You deposited ${move}`);
  } else {
    console.log(`🔴 ${i + 1}: You withdrew ${Math.abs(move)}`);
  }
}

// with for each
movements.forEach(function (move) {
  if (move > 0) {
    console.log(`🟢 You deposited ${move}`);
  } else {
    console.log(`🔴 You withdrew ${Math.abs(move)}`);
  }
});

// with for each but with INDEX
//$ [CATATAN] yang terpenting dari parameternya bukanlah nama tetapi urutannya
//$ function ("element", "index", "array")
//* element: Elemen saat ini yang sedang diproses dalam array.
//* index (optional): Indeks dari elemen saat ini yang sedang diproses.
//* array (optional): Array yang sedang diiterasi (biasanya tidak diperlukan).

movements.forEach(function (move, index, array) {
  if (move > 0) {
    console.log(`🟢🟢🟢 ${index + 1}: You deposited ${move}`);
  } else {
    console.log(`🔴🔴🔴 ${index + 1}: You withdrew ${Math.abs(move)}`);
  }
}) 

//? Kapan menggunakan forEach? dan kapan menggunakan forOf?
/*
@- Satu perbedaan besar antara keduanya adalah kita tidak dapat 'break' dari forEach. Jadi forEach akan selalu mengulang seluruh array dan tidak ada yang bisa kita lakukan
@- Jika ingin keluar dari loop makan gunakan forOf loop, selebihnya gunakan sesuai dengan preferensi pribadi
*/


//$ [FACT] setiap bahasa pemrogramman selalu memiliki banyak cara atau alat yang berbeda untuk mencapai hal yang sama