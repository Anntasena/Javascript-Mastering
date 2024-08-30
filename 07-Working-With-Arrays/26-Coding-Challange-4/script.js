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

// Coding Challenge #4

/* 
Julia dan Kate masih mempelajari anjing, dan kali ini mereka mempelajari apakah anjing makan terlalu banyak atau terlalu sedikit.
Makan berlebihan berarti porsi makanan anjing saat ini lebih besar dari porsi yang direkomendasikan, dan makan kurang adalah kebalikannya.
Jumlah makanan yang sehat berarti porsi makanan anjing saat ini berada dalam kisaran 10% di atas dan 10% di bawah porsi yang direkomendasikan (lihat petunjuk).

*1. Lakukan pengulangan pada array yang berisi objek anjing, dan untuk setiap anjing, hitung porsi makanan yang direkomendasikan dan tambahkan ke objek sebagai properti baru. JANGAN membuat array baru, cukup lakukan pengulangan pada array tersebut. Forumla: direkomendasikanMakanan = berat ** 0,75 * 28. (Hasilnya dalam gram makanan, dan beratnya harus dalam kg)

*2. Temukan anjing Sarah dan masuk ke konsol untuk mengetahui apakah anjing tersebut makan terlalu banyak atau terlalu sedikit. PETUNJUK: Beberapa anjing memiliki banyak pemilik, jadi Anda harus terlebih dahulu menemukan Sarah di deretan pemilik, jadi yang ini agak sulit (sengaja) 🤓

*3. Buat array yang berisi semua pemilik anjing yang makan terlalu banyak ('ownersEatTooMuch') dan array dengan semua pemilik anjing yang makan terlalu sedikit ('ownersEatTooLittle').

*4. Catat string ke konsol untuk setiap array yang dibuat di 3., seperti ini: "Anjing Matilda, Alice, dan Bob makan terlalu banyak!" dan "Anjing Sarah, John, dan Michael makan terlalu sedikit!"

*5. Catat ke konsol apakah ada anjing yang memakan makanan dalam jumlah TEPAT yang direkomendasikan (hanya benar atau salah)

*6. Catat ke konsol apakah ada anjing yang memakan makanan dalam jumlah yang BENAR (hanya benar atau salah)

*7. Buat array yang berisi anjing-anjing yang memakan makanan dalam jumlah yang BENAR (coba gunakan kembali kondisi yang digunakan pada 6.)

*8. Buat salinan dangkal array anjing dan urutkan berdasarkan porsi makanan yang direkomendasikan dalam urutan menaik (perlu diingat bahwa porsinya ada di dalam objek array)

PETUNJUK 1: Gunakan banyak alat yang berbeda untuk menyelesaikan tantangan ini, Anda dapat menggunakan kuliah ringkasan untuk memilih di antara mereka 😉
PETUNJUK 2: Berada dalam kisaran 10% di atas dan di bawah porsi yang direkomendasikan berarti: saat ini > (disarankan * 0,90) && saat ini < (disarankan * 1,10). Pada dasarnya, porsi saat ini harus berada di antara 90% dan 110% dari porsi yang direkomendasikan.
*/

const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
];

//*-> 1
dogs.forEach(function (dog) {
  dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28);
});

console.log(dogs);

//*-> 2
// mencari anjing sarah
const sarahDog = dogs.find((dog) => dog.owners.includes("Sarah"));
// memeriksa dan mencetak status anjing sarah
const { curFood, recommendedFood } = sarahDog;
curFood > recommendedFood
  ? console.log("Sarah dog eat more than recomended")
  : console.log("Sarah's dog eats less than recommended");

//! alternatif & best practice
//$ console.log(`Anjing Sarah makan terlalu ${dogSarah.curFood > dogSarah.recommendedFood ? 'banyak' : 'sedikit'}.`);

//*-> 3
const ownersEatTooMuch = [];
const ownersEatTooLittle = [];
// membuat copy dari data anjing
dogs.map((dog) =>
  dog.curFood > dog.recommendedFood
    ? ownersEatTooMuch.push(...dog.owners)
    : ownersEatTooLittle.push(...dog.owners)
);

//$ [ALTERNATIF WAY]
const ownersEatTooMuch2 = dogs
  .filter((dog) => dog.curFood > dog.recommendedFood)
  .flatMap((dog) => dog.owners);
console.log(`ALT WAYS: ${ownersEatTooMuch2.join(" ")}`);

const ownersEatTooLittle2 = dogs
  .filter((dog) => dog.curFood < dog.recommendedFood)
  .flatMap((dog) => dog.owners);
console.log(`ALT WAYS: ${ownersEatTooLittle2.join(" ")}`);

//*-> 4
console.log(`Dog ${ownersEatTooMuch.join(", ")} eat to much`);
console.log(`Dog ${ownersEatTooLittle.join(", ")} eat to little`);

//*-> 5
const dogFoodCorrect = dogs.some((dog) => dog.curFood === dog.recommendedFood);
console.log(`ada yang makan dengan jumlah tepat? ${dogFoodCorrect}`);

//*-> 6
// function check makan dengan benar
const goodEatDogs = (dogs) =>
  dogs.curFood > dogs.recommendedFood * 0.9 &&
  dogs.curFood < dogs.recommendedFood * 1.1;
console.log(
  `ada yang makan dengan jumlah yang benar? ${dogs.some(goodEatDogs)}`
);

//*-> 7
console.log(dogs.filter(goodEatDogs));

//*-> 8
const dogsSorted = dogs
  .slice() // membuat shallow copy
  .sort((a, b) => a.recommendedFood - b.recommendedFood); // menyortir dari rekomendasi makan terkecil ke terbesar
console.log(dogsSorted);
