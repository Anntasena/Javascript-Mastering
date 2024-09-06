"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    "2019-11-18T21:31:17.178Z",
    "2019-12-23T07:42:02.383Z",
    "2020-01-28T09:15:04.904Z",
    "2020-04-01T10:17:24.185Z",
    "2020-05-08T14:11:59.604Z",
    "2024-09-01T17:01:17.194Z",
    "2024-09-03T23:36:17.929Z",
    "2024-09-05T10:51:36.790Z",
  ],
  currency: "EUR",
  locale: "pt-PT", // de-DE
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    "2019-11-01T13:15:33.035Z",
    "2019-11-30T09:48:16.867Z",
    "2019-12-25T06:04:23.907Z",
    "2020-01-25T14:18:46.235Z",
    "2020-02-05T16:33:06.386Z",
    "2020-07-05T14:43:26.374Z",
    "2020-08-04T18:49:59.371Z",
    "2020-08-05T12:01:20.894Z",
  ],
  currency: "USD",
  locale: "en-US",
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
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

//!--------------------------------------------------------
//! Functions

//$ MEMFORMAT TANGGAL MOVEMENT
const formatMovementDate = function (date, locale) {
  //# PERHITUNGAN DARI MILIDETIK KE HARI
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));
  //# MENGHITUNG PERBEDAAN DARI TANGGAL-KE1 DAN TANGGAL-KE2
  const daysPassed = calcDaysPassed(new Date(), date);
  // console.log(daysPassed);
  //# LOGIC TANGGAL MOVEMENT
  if (daysPassed === 0) return "Today";
  if (daysPassed === 1) return "Yesterday";
  if (daysPassed <= 7) return `${daysPassed} days ago`;

  return new Intl.DateTimeFormat(locale).format(date);
};

//$ MEMFORMAT CURRENCY
const formatCur = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
  }).format(value);
};

//$ MENAMPILKAN MOVEMENT
const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = "";
  //# MENSORTIR MOVMENT DARI YANG TERBESAR
  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;
  //# MELOOPING ARRAY MOVEMENT DAN MEMBERIKAN PENJELEASAN SESUAI
  movs.forEach(function (mov, i) {
    //@ mencari tipe movement apakah deposit / withdrawel?
    const type = mov > 0 ? "deposit" : "withdrawal";
    //@ mencari tanggal movement sesuai indexnya
    const date = new Date(acc.movementsDates[i]);
    //@ menampilkan tanggal
    const displayDate = formatMovementDate(date, acc.locale);
    //@ memformat movement dengan function formatCur
    const formattedMov = formatCur(mov, acc.locale, acc.currency);
    //@ meletakan kode ke HTML
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
    <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${formattedMov}</div>
      </div>
    `;
    //@ kode HTML disisipkan kedalam element target
    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

//$ MENGHITUNG DAN MENAPILKAN BALANCE
const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = formatCur(acc.balance, acc.locale, acc.currency);
};

//$ MENAMPILKAN INCOMES, OUTCOMES, INTEREST
const calcDisplaySummary = function (acc) {
  //# MENGHITUNG INCOMES
  const incomes = acc.movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = formatCur(incomes, acc.locale, acc.currency);

  //# MENGHITUNG OUTCOMES
  const out = acc.movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = formatCur(Math.abs(out), acc.locale, acc.currency);

  //# MENGHITUNG INTEREST
  const interest = acc.movements
    .filter((mov) => mov > 0)
    .map((deposit) => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = formatCur(interest, acc.locale, acc.currency);
};

//$ MEMBUAT USERNAME
const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(" ")
      .map((name) => name[0])
      .join("");
  });
};
createUsernames(accounts);

//$ MEMPERBAHARUI USER INTERFACE
const updateUI = function (acc) {
  //# Display movements
  displayMovements(acc);
  //# Display balance
  calcDisplayBalance(acc);
  //# Display summary
  calcDisplaySummary(acc);
};

//!--------------------------------------------------------
//! Event handlers

let currentAccount;

//$ LOGIN BOHONGAN (FAKE LOGIN)
currentAccount = account1;
updateUI(currentAccount);
containerApp.style.opacity = 100;

//$ LOGIN BUTTON
btnLogin.addEventListener("click", function (e) {
  //@ mencegah aksi default
  e.preventDefault();

  //# MENCARI ACCOUNT DAN MEMVALIDASINYA
  currentAccount = accounts.find(
    (acc) => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);
  //# VALIDASI PIN
  if (currentAccount?.pin === +inputLoginPin.value) {
    //@ mengubah tampilan jika login berhasil
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(" ")[0]
    }`;
    containerApp.style.opacity = 100;

    //@ membuat tanggal saat ini saat login berhasil
    const now = new Date();
    //@ format tanggal
    const options = {
      hour: "numeric",
      minute: "numeric",
      day: "numeric",
      month: "numeric",
      year: "numeric",
      // weekday: "long",
    };
    //@ menampilkan tanggal saat login berhasil
    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now);
    //@ menghapus input field saat login berhasil
    inputLoginUsername.value = inputLoginPin.value = "";
    inputLoginPin.blur();
    //@ mengupdate UI kembali
    updateUI(currentAccount);
  }
});

//$ TRANSFER BUTTION
btnTransfer.addEventListener("click", function (e) {
  //@ mencegah aksi default
  e.preventDefault();
  //# MEMFORMAT TIPE DATA DALAM INPUT TRANSFER
  const amount = +inputTransferAmount.value;
  //# MENCARI ACCOUNT YANG DITRANSFER DAN MEMVALIDASINYA
  const receiverAcc = accounts.find(
    (acc) => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = "";
  //# LOGIKA DAN SYARAT SAAT MELAKUKAN TRANSFER
  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    //@ jika sesuai syarat akan proses transfer berejalan
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    //@ menambahkan tanggal baru saat transfer
    currentAccount.movementsDates.push(new Date().toDateString());
    receiverAcc.movementsDates.push(new Date().toISOString());
    //@ memperbaharui UI
    updateUI(currentAccount);
  }
});

//$ LOAN BUTTON
btnLoan.addEventListener("click", function (e) {
  //@ mencegah aksi default
  e.preventDefault();
  //# MEMFORMAT JUMLAH MENJADI BILANGAN BULAT
  const amount = Math.floor(inputLoanAmount.value);
  //# LOGIKA DAN SYARAT SAAT MELAKUKAN TRANSFER
  if (
    amount > 0 &&
    currentAccount.movements.some((mov) => mov >= amount * 0.1)
  ) {
    //@ menambahkan movement
    currentAccount.movements.push(amount);
    //@ menambahkan tanggal loan
    currentAccount.movementsDates.push(new Date().toISOString());
    //@ memperbaharui UI
    updateUI(currentAccount);
  }
  //@ menghapus input field loan
  inputLoanAmount.value = "";
});

//$ CLOSE ACCOUNT BUTTON
btnClose.addEventListener("click", function (e) {
  //@ mencegah aksi default
  e.preventDefault();
  //# LOGIKA UNTUK SYARAT MENGHAPUS ACCOOUNT
  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    //@ mencari urutan account
    const index = accounts.findIndex(
      (acc) => acc.username === currentAccount.username
    );
    // console.log(index);
    //@ menghapus account dengan cara menghapus dari urutannya
    accounts.splice(index, 1);
    //@ menyembunyikan UI
    containerApp.style.opacity = 0;
  }
  //@ menghapus input field username dan pin
  inputCloseUsername.value = inputClosePin.value = "";
});

//$ SORTING BUTTION
let sorted = false;
btnSort.addEventListener("click", function (e) {
  //@ mencegah aksi default
  e.preventDefault();
  //@ memanggil function dan menambahkannya logika
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});

//!----------------------------------------------------------
//#----------------------------------------------------------
//*----------------------------------------------------------
//? LECTURES

//! INTERNATIONALIZING NUMBER
//? Bisa lebih detail dicari di "DOKUMENTASI" dengan kata kunci "Intl number"

console.log(" ");

const num = 2357203874.23;
const options = {
  style: "currency", // Mengatur gaya tampilan menjadi 'currency' (mata uang)
  currency: "EUR", // Mata uang yang digunakan adalah Euro
  unit: "celsius", // Jika 'style' diubah ke 'unit', ini akan menampilkan satuan Celsius
  useGrouping: false, // Menghilangkan pemisah ribuan (misalnya, "1,000,000" menjadi "1000000")
};

/*
? Berikut adalah penjelasan untuk properti lainnya:
*> style: Mengatur gaya tampilan angka. Opsi yang tersedia adalah:
    @> decimal: Format angka desimal (default).
    @> currency: Format untuk mata uang.
    @> percent: Menampilkan angka dalam bentuk persentase.
    @> unit: Menampilkan angka dengan satuan tertentu (misalnya, kilometer, celsius, dll.).
*> currency: Mata uang yang digunakan dalam format jika style diatur ke currency.
*> unit: Satuan yang akan ditampilkan jika style diatur ke unit. Misalnya, Anda bisa menggunakan unit seperti celsius, kilometer, atau liter.
*> useGrouping: Menentukan apakah akan menggunakan pemisah ribuan atau tidak. Jika diatur ke false, angka akan ditampilkan tanpa pemisah ribuan.
*/

console.log(num); // 2357203874.23
console.log(
  "US:          ",
  new Intl.NumberFormat("en-US", options).format(num)
); //  2,357,203,874.23
console.log(
  "Germany:     ",
  new Intl.NumberFormat("de-DE", options).format(num)
); // Germany:  2.357.203.874,23
console.log(
  "Indonesia:   ",
  new Intl.NumberFormat("id-ID", options).format(num)
); // Indonesia:  2.357.203.874,23
console.log(
  "Syria:       ",
  new Intl.NumberFormat("ar-SY", options).format(num)
); // Syria:  ٢٬٣٥٧٬٢٠٣٬٨٧٤٫٢٣

//# browser languange
console.log(
  "Browser langugange:",
  navigator.language,
  ": ",
  new Intl.NumberFormat(navigator.language).format(num)
); // Browser langugange: en-US :  2,357,203,874.23
