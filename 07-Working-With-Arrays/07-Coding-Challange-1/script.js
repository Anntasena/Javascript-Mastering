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
  containerMovements.innerHTML = '';

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

// Coding Challenge #1

/* 
*- Julia dan Kate sedang melakukan penelitian terhadap anjing. Jadi, masing-masing dari mereka bertanya kepada 5 pemilik anjing tentang usia anjing mereka, dan menyimpan data tersebut ke dalam array (satu array untuk masing-masing). Untuk saat ini, mereka hanya ingin mengetahui apakah seekor anjing sudah dewasa atau masih anak anjing. Seekor anjing dikatakan dewasa jika berusia minimal 3 tahun, dan dikatakan anak anjing jika berusia kurang dari 3 tahun.

*- Buat fungsi 'checkDogs', yang menerima 2 array usia anjing ('dogsJulia' dan 'dogsKate'), dan melakukan hal-hal berikut:

1. Julia menemukan bahwa pemilik anjing PERTAMA dan DUA ANJING TERAKHIR sebenarnya memiliki kucing, bukan anjing! Jadi buat salinan dangkal dari array Julia, dan hapus usia kucing dari array yang disalin tersebut (karena mengubah parameter fungsi merupakan praktik yang buruk)
2. Buat array dengan data Julia (yang sudah dikoreksi) dan Kate
3. Untuk setiap anjing yang tersisa, catat di konsol apakah anjing tersebut dewasa ("Anjing nomor 1 sudah dewasa, dan berusia 5 tahun") atau anak anjing ("Anjing nomor 2 masih anak anjing 🐶")
4. Jalankan fungsi untuk kedua set data pengujian

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

// TEST 1
const julia = [3, 5, 2, 12, 7];
const kate = [4, 1, 15, 8, 3];

// TEST 2
const julia2 = [9, 16, 6, 8, 3];
const kate2 = [10, 5, 6, 1, 4];

const checkDogs = function (dogsJulia, dogsKate) {
  // shallow copy julia dog
  const juliaCheckDog = dogsJulia.splice()

  // check cat and remove from array
  juliaCheckDog.splice(-2);
  juliaCheckDog.splice(0, 1);

  // Join all dog from julia and kate
  const allDog = juliaCheckDog.concat(dogsKate);

  // display dog
  allDog.forEach(function (year, i) {
    if (year <= 3) {
      console.log(`Dog number ${i + 1} still a puppy 🐶`);
    } else {
      console.log(`Dog number ${i + 1} is an adult, and is ${year} years old`);
    }
  });
};


checkDogs(julia, kate);
checkDogs(julia2, kate2);