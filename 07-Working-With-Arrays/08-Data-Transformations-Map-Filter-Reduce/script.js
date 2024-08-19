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

//! DATA TRANSFORMATION MAP FILTER REDUCE
//? Dalalm JS ada 3 metode array besar dan penting yang kami gunakan sepanjang waktu untuk melakukan transformasi data
//? Jadi pada dasarnya ini adalah metode yang kami gunakan untuk membuat array baru bedasarkan transformasi data dari array lain
//? Dalam berberapa tahun terakhir, alat ini telah menajadi sangat populer dan untuk alasan yang baik dalam modern JS
//? data tersebut adalah "MAP", "FILTER", "REDUCE"

/*
$ [MAP]
* - Map method adalah metode lain yang dapat kita gunakan untuk mengulang (loop) array
* - Map sebenarnya mirip dengan forEach tetapi dengan perbedaan bahwa "map" membuat array baru bedasarkan array asli
# Contoh
[3, 1, 4, 3, 2]
Map (current * 2)
[6, 2, 8, 6, 4]


$ [FILTER]
* - Filter method digunakan untuk memfilter element dalam array asli yang memenuhi kondisi tertentu
* - Dengan kata lain element yang kondisinya "true" akan dimasukan dalam array baru yang di kembalikan dengan metode filter
# Contoh
[3, 1, 4, 3, 2]
Filter (current > 2)
[3, 4, 3]

$ [REDUCE]
* - Reduce digunakan untuk mereduksi semua element dari array asli menjadi satu nilai tunggal
* - Salah satu contohnya adalah dengan menambahkan semua element array bersama sama
* - Proses reduce telah mengurangi array menjadi satu nilai tunggal
# Contoh
[3, 1, 4, 3, 2]
Reduce (acc + current)
[13]


*/
