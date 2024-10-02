"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

///////////////////////////////////////
//! AJAX CALL

const getContryData = function (country) {
  //# Old style Ajax Call
  // Step 1: setup
  const request = new XMLHttpRequest();
  // Step 2: Get API from Web API
  request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
  // Step 3: Call API
  request.send();

  request.addEventListener("load", function () {
    //   console.log(this.responseText);
    const [data] = JSON.parse(this.response); // mengubah teks panjang ke JSON format
    console.log(data);

    const html = `
    <article class="country">
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
  });
};

getContryData("indonesia");
getContryData("japan");
getContryData("nauru");
getContryData("usa");
