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
      console.log(arr);
      return int >= 1
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
const eurToUsd = 1.1;

//# chaining method / biasanya dianalogikan dengan saluran pipa (pipeline)
//! kekurangan cara ini adalah cukup sulit di debug jika salah satu hasilnya tidak seperti yang kita harapkan
const totalDepositeUsd = movements
  .filter((mov) => mov > 0) // membuat array baru
  .map((mov) => mov * eurToUsd) // mengkonfersi euro to usd
  .reduce((acc, mov, i, arr) => acc + mov, 0); // menggabungkan semua value array menjadi jumlah total

console.log(totalDepositeUsd);

//? cara debug pipeline
const totalDepositeUsdDebug = movements
  .filter((mov) => mov > 0)
  .map((mov, i, arr) => {
    //$ console.log(arr); // mengkakses arr salah satu cara yang bagus untuk melihat bug
    return mov * eurToUsd;
  })
  .reduce((acc, mov, i, arr) => acc + mov, 0);

console.log(totalDepositeUsdDebug);

//$ [CATATAN PENTING] chaining method
/*
* 1. Tidak boleh terlalu sering menggunakan chaining, karna dapat menyebabkan masalah didunia nyata jika kita memiliki array yang sangat besar
  ?- Jika memiliki chaining method yang besar, kita harus mencoba mengkompres semua function yang mereka lakukan menjadi method yang sesedikit mungkin
  ?- Misalnya, terkadang kita kita membuat method "map" yang jauh lebih banyak dari pada yang sebenarnya kita butuhkan, dimana kita bisa melakukannya semuanya hanya dalam satu panggilan "map"
  ?- Ketika kita menggunakan chain method seperti ini, teruslah mencari peluang untuk menjaga kinerja kode kita

* 2. Dalam JS adalah bad practice untuk mengaitkan method yang mengubah array asli yang mendasarinya
  ?-  Salah satunya adalah mehtod splice
  ?-  Kita tidak boleh chaining method seperti "splice" atau "reverse" method
  ?-  Tetapi kita dapat melakukannya, dan untuk aplikasi kecil seperti yang kita buat dan itu bukan masalah besar 
  ?-  Untuk sekala besar, biasanya selalu merupakan cara yang baik untuk melakukan mutasi array
*/
