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
        <div class="movements__value">${mov}</div>
    </div>`;

    //# .insertAdjecentHTML() -> adalah metode DOM (Document Object Model) yang digunakan untuk menyisipkan HTML ke dalam elemen di halaman web pada posisi tertentu. Ini memungkinkan Anda untuk menambahkan markup HTML ke dalam dokumen dengan cara yang fleksibel.
    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

displayMovements(account1.movements);

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


//! Map method adalah cara lain yang dapat kita gunakan untuk mengulang array, tetapi tidak seperti masing2, map method akan memberi kita array baru dan array baru ini akan berisi disetiap posisi hasil penerapan function asli

const euroToUsd = 1.1

//# MAP
const movementsUSD = movements.map(function (mov) {
  return mov * euroToUsd
})

//$ [REMAINDER] map akan membuat array baru dan tidak akan merubah array asli
console.log(movements); //  [200, 450, -400, 3000, -650, -130, 70, 1300]
console.log(movementsUSD); // [220.00000000000003, 495.00000000000006, -440.00000000000006, 3300.0000000000005, -715.0000000000001, -143, 77, 1430.0000000000002]

//# MAP WITH ARROW
const arrMovementsUsd = movements.map(mov =>  mov * euroToUsd)
console.log(arrMovementsUsd);

//# FOR OF
const movementsUSDFor = []
for (const mov of movements) movementsUSDFor.push(mov * euroToUsd)

console.log(movementsUSDFor); // [220.00000000000003, 495.00000000000006, -440.00000000000006, 3300.0000000000005, -715.0000000000001, -143, 77, 1430.0000000000002]

//? PENJELASAN
/*
*-> Dari kedua cara tersebut perbedaannya adalah dengan melihatnya secara filosofi
*-> Map menggunakan functional programing
*-> Modern javascript menggunakan functional programing
*/



//? MAP MEHTOD
const movementsDescriptions =  movements.map((mov, i , arr) => {
  if (mov > 0) {
    return `Movements ${i + 1}: You deposite ${mov}`;
  } else {
    return`Movements ${i + 1}: You withdraw ${Math.abs(mov)}`;
  }
});
console.log(movementsDescriptions);

// Shorthand with ternary
const movementsDescriptionsTernary =  movements.map((mov, i) => `Movements ${i + 1}: You ${mov > 0 ? 'deposite' : 'withdraw'} ${Math.abs(mov)}`);
console.log(movementsDescriptionsTernary);
