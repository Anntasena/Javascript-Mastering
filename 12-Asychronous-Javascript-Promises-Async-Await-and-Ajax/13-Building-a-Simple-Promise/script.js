"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

// MATERI
////////////////////////////////////////
/*


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

// getCountryData("australia");

//----------------------------------------------------------------------
//----------------------------------------------------------------------
//----------------------------------------------------------------------
//----------------------------------------------------------------------

/* 
# Membuat Promise
new Promise() => promise constructor

# Membuat Promise executor
new Promise(function() {}) => function didalamnya adalah promise executor

# Argument didalam execuror
function (resolve, reject) {} => 
*/

console.log("LotteryDraw was happening");
const lotteryPromise = new Promise(function (resolve, reject) {
  setInterval(() => {
    if (Math.random() >= 0.5) {
      resolve("You WIN 😎");
    } else {
      reject(new Error("You LOSE 😖"));
    }
  }, 2000);
});

lotteryPromise
  .then((res) => console.log(res))
  .catch((err) => console.error(err));

//# Promisifying setTimeout---------------------
//#---------------------------------------------
const wait = function (seconds) {
  // di Timer kita tidak perlu argument reject karna pada dasarnya Timer tidak akan pernah gagal
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

wait(1)
  .then(() => {
    console.log("1 second passed");
    return wait(1);
  })
  .then(() => {
    console.log("2 second passed");
    return wait(1);
  })
  .then(() => {
    console.log("3 second passed");
    return wait(1);
  })
  .then(() => {
    console.log("4 second passed");
  });

/*
! Ini jika kita menggunakan callback hell

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
*/

Promise.resolve("Pass").then((x) => console.log(x));
Promise.reject(new Error("Error")).catch((x) => console.error(x));
