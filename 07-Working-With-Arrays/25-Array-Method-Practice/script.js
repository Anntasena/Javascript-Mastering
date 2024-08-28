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
const displayMovements = function (movements, sort = false) {
  //@ --> Menghapus konten yang ada di containerMovements
  containerMovements.innerHTML = "";

  //@ -> Sorting movements
  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  //@ --> Looping melalui movements dengan forEach
  movs.forEach(function (mov, i) {
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

//! display balance
const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance}€`;
};

//! display summary
const caclDisplaySummary = function (acc) {
  //@ INCOME
  const incomes = acc.movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  //@ OUTCOME
  const outcomes = acc.movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(outcomes)}€`;

  //@ INTEREST
  const interest = acc.movements
    .filter((mov) => mov > 0)
    .map((deposite) => (deposite * acc.interestRate) / 100) // 1.2/100 = 1.2%
    .filter((int, i, arr) => {
      return int >= 1;
    })
    .reduce((acc, int) => acc + int);
  labelSumInterest.textContent = `${interest}€`;
};

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

//! update UI
const updateUI = function (acc) {
  //@ display movements
  displayMovements(acc.movements);
  //@ display balance
  calcDisplayBalance(acc);
  //@ display summary
  caclDisplaySummary(acc);
};

//! login (event handler)
let currentAccount;

btnLogin.addEventListener("click", function (e) {
  //@ memblokir prilaku default yang terus mereset karna di dalam form
  e.preventDefault(); // preventDefault() adalah metode yang dipanggil pada objek event e. Fungsinya adalah untuk mencegah perilaku default dari event tersebut.

  //@ mencari username untuk login
  currentAccount = accounts.find(
    (acc) => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  //@ mencari pin untuk login
  // currentAccount && currentAccount.pin === currentAccount?.pin -> optional chaining
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //@ display message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(" ")[0]
    }`;
    //@ display UI
    containerApp.style.opacity = 100;
    //@ clear input field
    // operator seperti ini bekerja dari kiri ke kanan
    inputLoginUsername.value = inputLoginPin.value = "";
    inputLoginPin.blur(); // .blur() digunakan agar element html tidak menerima fokus
    inputLoginUsername.blur();
    //@ Update UI function
    updateUI(currentAccount);
  }
});

//! trasfers (event handler)
btnTransfer.addEventListener("click", function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const recevierAcc = accounts.find(
    (acc) => acc.username === inputTransferTo.value
  );
  // clear input field
  inputTransferAmount.value = inputTransferTo.value = "";

  //# syarat transfer (TF)
  // jumlah TF lebih besar dari 0
  // Saldo harus lebih besar atau sama dengan jumlah TF
  // Akun penerima tidak boleh sama dengan akun yang digunakan untuk TF
  if (
    amount > 0 &&
    currentAccount.balance >= amount &&
    recevierAcc?.username !== currentAccount.username
  ) {
    // melakukan TF
    currentAccount.movements.push(-amount);
    recevierAcc.movements.push(amount);
    // memperbarui UI
    updateUI(currentAccount);
  }
});

//! loan (event handler)
btnLoan.addEventListener("click", function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (
    amount > 0 &&
    currentAccount.movements.some((mov) => mov >= amount * 0.1)
  ) {
    // add movement
    currentAccount.movements.push(amount);
    // update UI
    updateUI(currentAccount);
  }
  // clear input field
  inputLoanAmount.value = "";
});

//! close account
btnClose.addEventListener("click", function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    //@ mencari index akun dan memberikan kondisi
    const index = accounts.findIndex(
      (acc) => acc.username === currentAccount.username
    );
    //@ delete account
    accounts.splice(index, 1);
    //@ hide UI
    containerApp.style.opacity = 0;
  }
  // clear input field
  inputCloseUsername.value = inputClosePin.value = "";
});

//! Sorting movemvent (event handler)
let sorted = false;
btnSort.addEventListener("click", function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

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

//! PLUS PLUS BUG (++)
let a = 10;
console.log(a++); // 10
console.log(a); // 11

let b = 20;
console.log(++b); // 21

/*
? [PENJELASAN]
# : a++ (Post-Increment):
    *- Langkah pertama: a++ mengembalikan nilai awal dari a, kemudian menambah nilai a sebesar 1.
    *- Langkah kedua: Setelah nilai a dikembalikan (diprint), barulah a di-increment (ditambah 1).

# : ++b (Pre-Increment):
    *- Langkah pertama: ++b menambah nilai b sebesar 1 terlebih dahulu.
    *- Langkah kedua: Setelah nilai b di-increment, barulah nilai yang sudah di-increment tersebut dikembalikan (diprint).

? [KESIMPULAN]
*- Post-Increment (a++): Mengembalikan nilai lama, lalu melakukan increment.
*- Pre-Increment (++b): Melakukan increment terlebih dahulu, lalu mengembalikan nilai baru.
*/

//$------------------------------------------------------$\\

//! ARRAY METHOD PRACTICE

//@ 1. menggabungkan semua movements di semua akun
const bankDepositSum = accounts
  .map((acc) => acc.movements) // mengambil nilai movement dari accaouts
  .flat() // mengubahnya menjadi satu array
  .filter((mov) => mov > 0) // memfilter array nilai yang di 'negatif' tidak ikut
  .reduce((sum, mov) => sum + mov, 0); // menggabungkan semua array menjadi 1 nilai
console.log(bankDepositSum);

//@ 2. menghitung berapa banyak deposit yang ada dibank dengan sedikitnya $1.000
// way #1
const numDeposits1000Way1 = accounts
  .flatMap((acc) => acc.movements)
  .filter((mov) => mov >= 1000).length;
console.log(numDeposits1000Way1);
// way #2
const numDeposits1000Way2 = accounts
  .flatMap((acc) => acc.movements)
  .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0);
console.log(numDeposits1000Way2);

//@ 3. membuat object baru yang berisi jumlah setoran dan jumlah penarikan
const sums = accounts
  .flatMap((acc) => acc.movements)
  .reduce(
    (sum, cur) => {
      cur > 0 ? (sum.deposits += cur) : (sum.withdrawels += cur);
      return sum;
    },
    { deposits: 0, withdrawels: 0 }
  );
console.log(sums);

// destructuring
const { deposits, withdrawels } = accounts
  .flatMap((acc) => acc.movements)
  .reduce(
    (sum, cur) => {
      // cur > 0 ? (sum.deposits += cur) : (sum.withdrawels += cur);
      sum[cur > 0 ? "deposits" : "withdrawels"] += cur;
      return sum;
    },
    { deposits: 0, withdrawels: 0 }
  );
console.log(deposits, withdrawels);

//@ 4. mengkonversi string apapun menjadi title case
// this is a nice title => This Is a Nice Title
const convertTitleCase = function (title) {
  const capliatize = (str) => str[0].toUpperCase() + str.slice(1);

  const exceptions = ["a", "an", "the", "but", "or", "on", "in", "with", "and"];

  const titleCase = title
    .toLowerCase()
    .split(" ")
    .map((word) => (exceptions.includes(word) ? word : capliatize(word)))
    .join(" ");

  return capliatize(titleCase);
};

console.log(convertTitleCase("this is a nice title"));
console.log(convertTitleCase("this is a LONG title but not too long"));
console.log(convertTitleCase("and is another title with an EXAMPLE"));
