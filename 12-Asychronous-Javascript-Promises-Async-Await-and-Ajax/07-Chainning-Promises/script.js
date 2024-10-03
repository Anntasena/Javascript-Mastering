"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

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
//   // country 1
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then((respons) => respons.json())
//     .then(([data]) => {
//       renderCountry(data);
//       const neigbours = data.borders[0];

//       if (!neigbours) return;

//       // country 2
//       return fetch(`https://restcountries.com/v3.1/alpha/${neigbours}`);
//     })
//     .then((respons) => respons.json())
//     .then((data) => renderCountry(data));
// };

const getCountryData = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then((respons) => respons.json())
    .then((data) => {
      console.log(data[0].borders);
      renderCountry(data[0]);
      const neigbour = data[0].borders[0];

      if (!neigbour) return;

      return fetch(`https://restcountries.com/v3.1/alpha/${neigbour}`);
    })
    .then((respons) => respons.json())
    .then((data) => renderCountry(data[0], "neighbour"));
};

getCountryData("portugal");
