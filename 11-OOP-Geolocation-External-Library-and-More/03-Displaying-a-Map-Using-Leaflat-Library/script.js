"use strict";

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector(".form");
const containerWorkouts = document.querySelector(".workouts");
const inputType = document.querySelector(".form__input--type");
const inputDistance = document.querySelector(".form__input--distance");
const inputDuration = document.querySelector(".form__input--duration");
const inputCadence = document.querySelector(".form__input--cadence");
const inputElevation = document.querySelector(".form__input--elevation");

/*
! Geolocatioin API
? Geolocation API disebut API karena sebenarnya seperi browser API mirip dengan Intenazionalitaion atau timer
*/

//! Cara menggunakan Geolocation API
if (navigator.geolocation)
  navigator.geolocation.getCurrentPosition(
    // callback ketika berhasil
    function (postiion) {
      const { latitude } = postiion.coords;
      const { longitude } = postiion.coords;
      console.log(`https://www.google.com/maps/@${latitude},${longitude}`);

      const coords = [latitude, longitude];

      const map = L.map("map").setView(coords, 13); // 13 skala zoom

      // L.titleLayer = digunakan untuk mengubah tampilan
      L.tileLayer("https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19,
      }).addTo(map);

      L.marker(coords)
        .addTo(map)
        .bindPopup("A pretty CSS popup.<br> Easily customizable.")
        .openPopup();
    },
    // callback ketika tidak berhasil
    function () {
      alert("Could not get your position");
    }
  );

//! CDN = Content Delivery Network
