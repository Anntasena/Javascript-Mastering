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

//! display movements
const displayMovements = function (movements) {
  //@ --> Menghapus konten yang ada di containerMovements
  containerMovements.innerHTML = "";

  //@ --> Looping melalui movements dengan forEach
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? "deposit" : "withdrawal";

    const html = `
    <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${mov}€</div>
    </div>`;

    //# .insertAdjecentHTML() -> adalah metode DOM (Document Object Model) yang digunakan untuk menyisipkan HTML ke dalam elemen di halaman web pada posisi tertentu. Ini memungkinkan Anda untuk menambahkan markup HTML ke dalam dokumen dengan cara yang fleksibel.
    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

displayMovements(account1.movements);

//! display balance
const calcDisplayBalance = function (movements) {
  const balance = movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${balance}€`;
};

calcDisplayBalance(account1.movements);

//! computing username
const createUsername = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(" ")
      .map((name) => name[0])
      .join("");
  });
};

createUsername(accounts);

//! display summary
const caclDisplaySummary = function (movements) {
  //@ INCOME
  const incomes = movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  //@ OUTCOME
  const outcomes = movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(outcomes)}€`;

  //@ INTEREST
  const interest = movements
    .filter((mov) => mov > 0)
    .map((deposite) => (deposite * 1.2) / 100) // 1.2/100 = 1.2%
    .filter((int, i, arr) => {
      return int >= 1;
    })
    .reduce((acc, int) => acc + int);
  labelSumInterest.textContent = `${interest}€`;
};

caclDisplaySummary(account1.movements);

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

//! FIND METHOD
//? Seperti method lainnya, find method juga menerima kondisi dan seperti method find juga menerima callback function yang kemudian dipanggil sebagai method "loops over array"

//? digunakan untuk menemukan elemen pertama dalam array yang memenuhi kondisi yang ditentukan oleh sebuah fungsi callback. Jika ada elemen yang memenuhi kondisi tersebut, .find() akan mengembalikan elemen tersebut. Jika tidak ada elemen yang cocok, maka undefined yang akan dikembalikan.

//! PERBEDAAN FILTER DAN FIND
/*
? FILTER => 
  *- mengembalikan semua element yang cocok dengan kondisi
  *- mengembalikan array baru
? FIND => 
  *- mengembalikan HANYA pertama
  *- Hanya mengembalikan element itu sendiri
*/

//! TUJUAN FIND METHOD
//? Menemukan tepat satu element dan biasanya membuat kondisis dimana hanya satu element yang memenuhi kondisi tersebut
//? Salah satu fitur yang cocok menggunakan ini adalah fitur login, fitur searching, fitur validateing

//$ [SYNTAX] array.find(callback(element, index, array), thisArg);

const firstWithdrawel = movements.find((mov) => mov < 0);
console.log(movements);
console.log(firstWithdrawel); // -400

// with for of
const firstWithdrawelLoop = [];
for (const loopWithdrawel of movements) {
  if (loopWithdrawel < 0) {
    firstWithdrawelLoop.push(loopWithdrawel);
  }
}
console.log(firstWithdrawelLoop[0]);

// next example

// find
const account = accounts.find((acc) => acc.owner === "Jessica Davis");
console.log(account);

// for of
let loopAccount;

for (const acc of accounts) {
  if (acc.owner === "Jessica Davis") {
    loopAccount = acc;
    break; // memberhentikan loop saat account ditemukan
  }
}

console.log(loopAccount);
