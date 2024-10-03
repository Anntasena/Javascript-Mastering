"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

// MATERI
///////////////////////////////////////
/*
! PROMISE
------------------------
? A Promise adalah objek di JavaScript yang merepresentasikan keberhasilan atau kegagalan suatu operasi asynchronous. Sebelum adanya Promise, callback digunakan untuk menangani operasi asynchronous, tetapi Promise memperbaiki cara kerja asynchronous dengan cara yang lebih bersih dan terstruktur.

! Konsep Dasar Promise
------------------------
* -> Pending: Status awal, promise sedang dalam proses.
* -> Fulfilled: Promise berhasil dijalankan dan menghasilkan nilai (data).
* -> Rejected: Promise gagal dijalankan dan memberikan alasan kegagalannya (error).

! Promise Chaining
------------------------
? Promise dapat dirangkai dengan .then() untuk menangani operasi asynchronous yang berurutan. Setiap .then() menerima hasil dari Promise sebelumnya.

! Fetch API
------------------------
? Fetch API digunakan untuk melakukan request ke server (seperti mengambil data dari server), dan ia bekerja menggunakan Promise.

! Penggunaan Fetch API
------------------------
? fetch() adalah metode bawaan JavaScript yang digunakan untuk melakukan request HTTP, dan ia mengembalikan sebuah Promise.

! Kelebihan Fetch API
------------------------
* -> 1. Promise-based: Fetch API memanfaatkan Promise, sehingga lebih bersih dan mudah digunakan daripada XMLHttpRequest.
* -> 2. Global Support: Fetch API tersedia secara global di semua browser modern.

! Langkah-langkah dalam Fetch API:
------------------------
* -> 1. Fetch data dari URL dengan fetch().
* -> 2. Tangkap respons dan ubah menjadi format yang bisa dibaca (misalnya JSON).
* -> 3. Gunakan data atau tangani error jika request gagal.
*/

// FUNCTION
////////////////////////////////////////
const renderCountry = function (data, className = "") {
  const html = `
    <article class="country ${className}">
        <img class="country__img" src="${data.flags.png}" />
        <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 1000000
            ).toFixed(1)}m People</p>
            <p class="country__row"><span>🗣️</span>${
              Object.values(data.languages)[0]
            }</p>
            <p class="country__row"><span>💰</span>${
              Object.values(data.currencies)[0].name
            }</p>
        </div>
    </article>
  `;

  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = 1;
};

//$ API CALL
// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(function (response) {
//       console.log(response);
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       return data;
//     })
//     .then(function (nameCountry) {
//       const [name] = nameCountry;
//       renderCountry(name);
//       console.log(Object.values(name.name)[0]);
//     });
// };

//# Shorthand practice
const getCountryData = function (country) {
  // 1. mengambil data dari URL
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    // 2. mengubah respons menjadi JSON
    .then((respons) => respons.json())
    // 3. merender data yang sudah diubah ke data format JSON
    .then(([data]) => renderCountry(data));
};

getCountryData("indonesia");
