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

//$ API CALL
/////////////////////////////////////////
// const getCountryData = function (country) {
//   // country 1
//   getJSON(`https://restcountries.com/v3.1/name/${country}`, "Country not found")
//     .then((data) => {
//       renderCountry(data[0]);
//       const neighbours = data[0].borders;
//       if (!neighbours || neighbours.length === 0)
//         throw new Error("NO NEIGHBOUR");
//       const neighbour = neighbours[0];
//       // country 2
//       return getJSON(
//         `https://restcountries.com/v3.1/alpha/${neighbour}`,
//         "Neighbour country not found"
//       );
//     })
//     .then((data) => renderCountry(data[0], "neighbour"))
//     .catch((error) => {
//       console.error(`${error} 😖😖😖`);
//       renderError(
//         `Something went wrong 💥💥💥💥💥 ${error.message}. Try again!`
//       );
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

//$ Button
/////////////////////////////////////////
// btn.addEventListener("click", function (e) {
//   getCountryData("indonesia");
// });

// getCountryData();

// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     // navigator.geolocation.getCurrentPosition(
//     //   (position) => resolve(position),
//     //   (err) => reject(err)
//     // );
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// getPosition().then((pos) => console.log(pos));

// const whereAmI = function () {
//   getPosition()
//     .then((pos) => {
//       const { latitude: lat, longitude: lng } = pos.coords;

//       return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
//     })
//     .then((res) => {
//       if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
//       return res.json();
//     })
//     .then((data) => {
//       console.log(data);
//       console.log(`You are in ${data.city}, ${data.country}`);

//       return fetch(`https://restcountries.eu/rest/v2/name/${data.country}`);
//     })
//     .then((res) => {
//       if (!res.ok) throw new Error(`Country not found (${res.status})`);

//       return res.json();
//     })
//     .then((data) => renderCountry(data[0]))
//     .catch((err) => console.error(`${err.message} 💥`));
// };

/*
! ASYNC AWAIT
? Menambahkan async ke depan function membuatnya menajdi async function
? Dalam 1 async function dapat memiliki 1 atau lebih await statment

! AWAIT
? Pada dasarnya await akan menghentikan esekusi code pada titik function samapai premis tepenuhi

$ ASYNC AWAIT membuat kode kita telihat seperti singkron didpena tetapi asinkron dibelakang layar 
*/

const getPosition = function (params) {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

//# menggunakan async
const whereAmI = async function () {
  //@ Geolocation dengan async await
  const pos = await getPosition();
  const { latitude: lat, longitude: lng } = pos.coords;

  //@ Reverse geolocation dengan async await
  const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
  const dataGeo = await resGeo.json();
  console.log(dataGeo);

  //# menggunakan then
  // const res = fetch(`https://restcountries.com/v3.1/name/${country}`);
  // res.then((res) => res.json()).then((data) => console.log(data));

  //# menggunakan await (hasil yang diterima sama dengan yang then)
  const res = await fetch(
    `https://restcountries.com/v3.1/name/${dataGeo.country}`
  );
  const data = await res.json();
  console.log(data[0]);

  renderCountry(data[0]);
};

whereAmI();
console.log("FIRST");

// btn.addEventListener("click", whereAmI);
