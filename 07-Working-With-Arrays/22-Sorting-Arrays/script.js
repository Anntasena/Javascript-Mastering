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

//! SORTING ARRAYS

//# Sorting
//? Sorting (pengurutan) adalah topik yang banyak dibahas dalam ilmu komputer dan ada banyak algoritma dan metode sorting nilai

//# ".sort()" -> dalam JavaScript digunakan untuk mengurutkan elemen-elemen dalam array secara in-place (artinya array asli diubah), dan mengembalikan array yang telah diurutkan. Metode ini, secara default, mengurutkan elemen-elemen sebagai string dalam urutan ascending (dari terkecil ke terbesar).

//@ strings
const owners = ["Syahrin", "Matlail", "Zach", "Jonas", "Adam", "Martha"];
// sort ini mengubah array asli, jadi harus hati2 dalam menggunakannya
console.log(owners.sort()); // ['Adam', 'Jonas', 'Martha', 'Matlail', 'Syahrin', 'Zach']
console.log(owners); // ['Adam', 'Jonas', 'Martha', 'Matlail', 'Syahrin', 'Zach']

//@ numbers
console.log(movements); // [200, 450, -400, 3000, -650, -130, 70, 1300]
console.log(movements.sort()); // [-130, -400, -650, 1300, 200, 3000, 450, 70]

/* 
@ fixing sorting numbers 
how it works
*-> return < 0, ==> a, b
*-> return > 0, ==> b, a
*/
movements.sort((a, b) => {
  if (a > b) return 1;
  if (a < b) return -1;
});
console.log(`--`);
console.log(movements); // [-650, -400, -130, 70, 200, 450, 1300, 3000]

movements.sort((a, b) => {
  if (a < b) return 1;
  if (a > b) return -1;
});
console.log(`--`);
console.log(movements); // [3000, 1300, 450, 200, 70, -130, -400, -650]

//@ sorting best practice
// kecil ke besar
movements.sort((a, b) => a - b);
console.log(movements); // [-650, -400, -130, 70, 200, 450, 1300, 3000]

// besar ke kecil
movements.sort((a, b) => b - a);
console.log(movements); // [3000, 1300, 450, 200, 70, -130, -400, -650]
