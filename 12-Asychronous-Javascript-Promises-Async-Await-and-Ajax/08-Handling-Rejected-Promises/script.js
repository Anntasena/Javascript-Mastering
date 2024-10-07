"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

// MATERI
////////////////////////////////////////
/*
! HANDLING REJECTED PROMISES
-------------------------------------
? Bagian penting dari pengembang web adalah menangani kesalahan, karna kesalahan sangat umum terjadi di web aplikasi

! Ada 2 handle rejection
-------------------------------------
? 1. Meneruskan function callback ke-2
.then(
      (respons) => respons.json(),
      (err) => alert(err)
    )

? 2. menggunaakn .catch()
.catch((error) => {
      console.error(`${error} 😖😖😖`);
      renderError(
        `Something went wrong 💥💥💥💥💥 ${error.message}. Try again!`
      );
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
  // countriesContainer.style.opacity = 1;
};
//# RENDER ERROR ----------------------
const renderError = function (message) {
  countriesContainer.insertAdjacentText("beforeend", message);
  // countriesContainer.style.opacity = 1;
};

//$ API CALL
/////////////////////////////////////////
const getCountryData = function (country) {
  // country 1
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then((respons) => respons.json())
    .then((data) => {
      console.log(data[0].borders);
      renderCountry(data[0]);
      const neigbour = data[0].borders[0];

      if (!neigbour) return;
      // country 2
      return fetch(`https://restcountries.com/v3.1/alpha/${neigbour}`);
    })
    .then((respons) => respons.json())
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

getCountryData("assdgfashd");
