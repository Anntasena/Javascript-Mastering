"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

// MATERI
////////////////////////////////////////
/*
! THROWING ERROR MANUALLY
? Sebenarnya melakukan trhowring error manually bukanlah praktik yang bagus, gunakan .catch() dan .finally() agar menajadi praktik yang baik

# Bad practice
if (!respons.ok) throw new Error(`Country not found (${respons.status})`);
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
