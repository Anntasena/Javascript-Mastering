"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

// MATERI
////////////////////////////////////////
/*
! Javascript Runtime
? Javascript hanya memiliki satu thread execution, hanya bisa melakukan satu hal dalam satu waktu, sama sekali tidak ada multitasking yang terjadi di javascrip itu sendiri
? Bahasa lain seperti java dapat mengesekusi banyak kode secara bersamaan, tetapi tidak dengan javascript

! Web API Environment
1. -> DOM
2. -> Timers
3. -> Fetch API
4. -> etc ...

! Callback queue
1. -> click
2. -> timer
3. -> data
3. -> etc ...

$[TIPS] -> Pelajari Bagaiman "Asynchronous" bekerja agar percaya diri saat interview melamar pekerjaan
*/

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
};

//# RENDER ERROR ----------------------
const renderError = function (message) {
  countriesContainer.insertAdjacentText("beforeend", message);
};

//# GET JSON  ----------------------
const getJSON = function (url, errorMsg = "Something went wrong") {
  return fetch(url).then((respons) => {
    if (!respons.ok) throw new Error(`${errorMsg} (${respons.status})`);
    return respons.json();
  });
};

//$ API CALL
/////////////////////////////////////////
const getCountryData = function (country) {
  // country 1
  getJSON(`https://restcountries.com/v3.1/name/${country}`, "Country not found")
    .then((data) => {
      renderCountry(data[0]);
      const neighbours = data[0].borders;
      if (!neighbours || neighbours.length === 0)
        throw new Error("NO NEIGHBOUR");
      const neighbour = neighbours[0];
      // country 2
      return getJSON(
        `https://restcountries.com/v3.1/alpha/${neighbour}`,
        "Neighbour country not found"
      );
    })
    .then((data) => renderCountry(data[0], "neighbour"))
    .catch((error) => {
      console.error(`${error} 😖😖😖`);
      renderError(
        `Something went wrong 💥💥💥💥💥 ${error.message}. Try again!`
      );
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

//$ Button
/////////////////////////////////////////
btn.addEventListener("click", function (e) {
  getCountryData("indonesia");
});

getCountryData("australia");

//----------------------------------------------------------------------
//----------------------------------------------------------------------
//----------------------------------------------------------------------
//----------------------------------------------------------------------

console.log("Test start");
setTimeout(() => console.log(" 0 sec timer"), 0);

//# How to use Promise
Promise.resolve("Resolve promise 1").then((res) => console.log(res));

Promise.resolve("Resolve promise 2").then((res) => {
  for (let i = 1; i < 1000000000; i++) {}
  console.log(res);
});

console.log("Test END");

/*
!  ururtan hasil log

? --- ini akan dijalankan terlebih dahulu karna bukan "callback" dan termasuk 'top level code"
Test start
Test END

? --- ini akan dijalankan ke-2 karna "microtest queue", microtest queue memiliki prioritas lebih tinggi dibandingkan "callback"
Resolve promise 1
Resolve promise 2

? --- ini dijalankan ke-3 karna hanya blok 'callback'. Jadi kita tidak dapat melakukan presisi tinggi menggunakan perhitungan waktu di JS
0 sec timer
*/
