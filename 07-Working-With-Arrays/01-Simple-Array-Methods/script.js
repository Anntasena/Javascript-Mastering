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

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

//! ARRAY METHOD
let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

//# SLICE -> dalam JavaScript digunakan untuk mengambil bagian dari sebuah array dan mengembalikan bagian tersebut sebagai array baru, tanpa mengubah array asli.
//$ [STYNTAX] arr.slice(start, end)
console.log(arr.slice(0, 3)); // ['a', 'b', 'c']
console.log(arr.slice(0)); // ['a', 'b', 'c', 'd', 'e', 'f', 'g'] 
console.log(arr.slice(-2)); // ['f', 'g'] -> diurutkan dari belakang
console.log(arr.slice(0,-1)); // ['a', 'b', 'c', 'd', 'e', 'f']
console.log(`${arr} ARRAY DENGAN SLICE`); // a,b,c,d,e,f,g ARRAY DENGAN SLICE

// make a shallow copy
console.log(arr.slice()); // ['a', 'b', 'c', 'd', 'e', 'f', 'g']
console.log([...arr]); // ['a', 'b', 'c', 'd', 'e', 'f', 'g']

//# SPLICE -> metode dalam JavaScript yang digunakan untuk menambah, menghapus, atau mengganti elemen dalam sebuah array
//$ [SYMTAX] arr.splice(start, deleteCount)
console.log(arr.splice(-1)); // ['g'] -> menghapus ['g']
console.log(`${arr} ARRAY DENGAN SPLICE`); // a,b,c,d,e,f ARRAY DENGAN SPLICE

//# REVERSE -> JavaScript digunakan untuk membalik urutan elemen-elemen dalam array.
//$ [SYNTAX] arr.reverse()
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 =  ['j', 'i', 'h', 'g', 'f']
console.log(arr2.reverse()); // ['f', 'g', 'h', 'i', 'j']
console.log(arr2); // ['f', 'g', 'h', 'i', 'j']

//# CONCAT -> digunakan untuk menggabungkan dua atau lebih array menjadi satu array baru.
//$ [SYNTAX] let newArray = array1.concat(array2, array3, ...);
const letters = arr.concat(arr2)
console.log(letters); // ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
console.log([...arr,...arr2]); // ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']

//# JOIN -> dalam JavaScript digunakan untuk menggabungkan semua elemen dalam sebuah array menjadi sebuah string. Elemen-elemen dalam array akan digabungkan menggunakan separator (pemisah) yang Anda tentukan.
//$ [SYNTAX] let string = array.join(separator);
console.log(letters.join(' - ')); // a - b - c - d - e - f - g - h - i - j
console.log(letters.join(' WoW ')); // a WoW b WoW c WoW d WoW e WoW f WoW g WoW h WoW i WoW j