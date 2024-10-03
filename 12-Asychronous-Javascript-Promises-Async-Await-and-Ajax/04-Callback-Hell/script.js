"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

///////////////////////////////////////

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

// API CALL
////////////////////////////////////////
const getCountryAndNeighbour = function (country) {
  // AJAX call country
  const request = new XMLHttpRequest();
  request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener("load", function () {
    const [data] = JSON.parse(this.response); // mengubah teks panjang ke JSON format
    console.log(data);

    // render country
    renderCountry(data);

    // get neighbour country (2)
    const neighbours = data.borders;

    if (!neighbours) return;

    // Looping
    neighbours.forEach((neighbourCode) => {
      const request2 = new XMLHttpRequest();
      request2.open(
        "GET",
        `https://restcountries.com/v3.1/alpha/${neighbourCode}`
      );
      request2.send();

      request2.addEventListener("load", function () {
        const [neighbourData] = JSON.parse(this.response);
        console.log(neighbourData);

        // Render neighbour country
        renderCountry(neighbourData, "neighbour");
      });
    });
  });
};
// getCountryAndNeighbour("indonesia");
getCountryAndNeighbour("usa");

//! CONTOH CALLBACK HELL SAMA SEPERTI DIATAS
/*
Efek buruk callback hell
1. susah dimaintain
2. susah dipahami
3. menyebabkan banyak bug
3. terlihat berantakan

$[TIPS] Kode yang sulit dipahami pada dasarnya adalah kode yang buruk, karna akan memiliki lebih banyak bug, karna semakin sulit untuk memahami kode dan alasan dibuatnya kode, semakin sulit untuk menambah fitur baru dan menambahkan lebih banyak fungsionalitas ke aplikasi
*/
setTimeout(() => {
  console.log(`1 sec passed`);
  setTimeout(() => {
    console.log(`2 sec passed`);
    setTimeout(() => {
      console.log(`3 sec passed`);
      setTimeout(() => {
        console.log(`4 sec passed`);
        setTimeout(() => {
          console.log(`5 sec passed`);
        }, 5000);
      }, 4000);
    }, 3000);
  }, 2000);
}, 1000);
