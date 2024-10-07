"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

//$ FUNCTION
////////////////////////////////////////
//# RENDER COUNTRY ----------------------
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

//# RENDER ERROR ----------------------
const renderError = function (message) {
  countriesContainer.insertAdjacentText("beforeend", message);
  countriesContainer.style.opacity = 1;
};

//# GET JSON  ----------------------
const getJSON = function (url, errorMsg = "Something went wrong") {
  return fetch(url).then((respons) => {
    if (!respons.ok) throw new Error(`${errorMsg} (${respons.status})`);
    return respons.json();
  });
};

// Coding Challenge #1

/* 
In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.

Here are your tasks:

PART 1
1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).
2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://geocode.xyz/api.
The AJAX call will be done to a URL with this format: https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating 😉
3. Once you have the data, take a look at it in the console to see all the attributes that you recieved about the provided location. Then, using this data, log a messsage like this to the console: 'You are in Berlin, Germany'
4. Chain a .catch method to the end of the promise chain and log errors to the console
5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.

PART 2
6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)

TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
TEST COORDINATES 2: 19.037, 72.873
TEST COORDINATES 2: -33.933, 18.474

GOOD LUCK 😀
*/

// Tantangan Coding #1

/* 
Dalam tantangan ini, Anda akan membuat sebuah fungsi 'dimanaSaya' yang akan menampilkan negara HANYA berdasarkan koordinat GPS. Untuk itu, Anda akan menggunakan API kedua untuk mendapatkan lokasi berdasarkan koordinat.

Berikut adalah tugas-tugas Anda:

BAGIAN 1
1. Buatlah sebuah fungsi 'dimanaSaya' yang menerima dua input, yaitu nilai latitude (lat) dan nilai longitude (lng) (ini adalah koordinat GPS, contoh disediakan di bawah).
2. Lakukan 'reverse geocoding' dari koordinat yang diberikan. Reverse geocoding berarti mengubah koordinat menjadi lokasi yang bermakna, seperti nama kota dan negara. Gunakan API ini untuk melakukan reverse geocoding: https://geocode.xyz/api.
Panggilan AJAX akan dilakukan ke URL dengan format ini: https://geocode.xyz/52.508,13.381?geoit=json. Gunakan fetch API dan promises untuk mendapatkan data tersebut. Jangan menggunakan fungsi getJSON yang sudah kita buat, karena itu curang 😉
3. Setelah Anda memiliki data, lihat data tersebut di konsol untuk melihat semua atribut yang Anda terima tentang lokasi tersebut. Kemudian, menggunakan data tersebut, tampilkan pesan seperti ini di konsol: 'Anda berada di Berlin, Jerman'
4. Tambahkan metode .catch di akhir rantai promise dan tampilkan error di konsol
5. API ini hanya mengizinkan Anda melakukan 3 permintaan per detik. Jika Anda memuat ulang dengan cepat, Anda akan mendapatkan error dengan kode 403. Ini adalah error dari permintaan tersebut. Ingat, fetch() TIDAK menolak promise dalam kasus ini. Jadi buatlah error sendiri untuk menolak promise dengan pesan error yang bermakna.

BAGIAN 2
6. Sekarang saatnya menggunakan data yang diterima untuk menampilkan negara. Jadi ambil atribut yang relevan dari hasil API geocoding, dan masukkan ke dalam API negara yang telah kita gunakan.
7. Tampilkan negara dan tangkap setiap error, sama seperti yang kita lakukan di pelajaran sebelumnya (Anda bahkan bisa menyalin kode ini, tidak perlu mengetik ulang)

KOORDINAT UJI COBA 1: 52.508, 13.381 (Latitude, Longitude)
KOORDINAT UJI COBA 2: 19.037, 72.873
KOORDINAT UJI COBA 3: -33.933, 18.474

SEMOGA BERHASIL 😀
*/

// const whereAmI = function (lat, lng) {
//   fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//     .then((res) => {
//       if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
//       return res.json();
//     })
//     .then((data) => {
//       console.log(data);
//       console.log(`You are in ${data.city}, ${data.country}`);
//     });
// };

const whereAmI = function (lat, lng) {
  fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    .then((res) => {
      console.log(res);
      if (!res.ok) throw new Error(`Problem with Geocoding ${res.status}`);
      return res.json();
    })
    .then((data) => {
      setInterval(console.log(data), 100);
      setInterval(console.log(`You are in ${data.city}, ${data.country}`), 100);

      return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
    })
    .then((res) => {
      if (!res.ok) throw new Error(`Country not found ${res.status}`);
      return res.json;
    })
    .then((data) => renderCountry(data[0]))
    .catch((err) => console.error(`${err.massage} 💥`));
};

// whereAmI(52.508, 13.381);
whereAmI(19.037, 72.873);
