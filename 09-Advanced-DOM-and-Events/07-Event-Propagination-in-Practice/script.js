"use strict";

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

//$ BTN SCROLL
const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");

btnScrollTo.addEventListener("click", function () {
  section1.scrollIntoView({ behavior: "smooth" });
});

//////////////////////////////////////////
//!-------------------------------------------------------
//?-------------------------------------------------------
//*-------------------------------------------------------
//# Lecture ----------------------------------------------

//! BUBBLEING AND CAPTURING
//? Javascript memiliki properti yang sangat penting, mereka memiliki apa yang disebut "capturing fase" dan "bubbleing fase"

/*
*-> Capturing Phase (Fase Penangkapan): Event bergerak dari root atau elemen tertinggi dalam DOM (biasanya document), turun menuju elemen target yang sebenarnya menerima event tersebut.

*-> Bubbling Phase (Fase Pembangkitan): Setelah mencapai elemen target, event akan mulai "menggelembung" kembali ke atas melalui elemen-elemen parent-nya, hingga kembali ke root.
*/

//!-------------------------------------------------------
//?-------------------------------------------------------
//*-------------------------------------------------------
//# Practice ---------------------------------------------

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

//@ nav link
document.querySelector(".nav__link").addEventListener("click", function (e) {
  this.style.backgroundColor = randomColor();
  console.log("LINK : ", e.target, e.currentTarget);
  //@ kasus jika nav__link yang di click
  console.log(e.currentTarget === this); // true
  console.log(e.target === this); // true
  //# stop propagination
  //? dalam praktiknya, biasanya bukan ide yang baik untuk menghentikan propagination
  //? stop propagination terkadang dapat meperbaiki masalah dalam aplikasi yang sangat kompleks dengan banyak handler untuk event yang sama, tetapi secara umum bukan ide yang baik untuk menghentikan propagination event
  // e.stopPropagation();
});

//@ nav links
document.querySelector(".nav__links").addEventListener("click", function (e) {
  this.style.backgroundColor = randomColor();
  console.log("CONTAINER : ", e.target, e.currentTarget);
  //@ kasus jika nav__link yang di click
  console.log(e.currentTarget === this); // true
  console.log(e.target === this); // false
});

//@ nav
document.querySelector(".nav").addEventListener(
  "click",
  function (e) {
    this.style.backgroundColor = randomColor();
    console.log("NAV : ", e.target, e.currentTarget);
    //@ kasus jika nav__link yang di click
    console.log(e.currentTarget === this); // true
    console.log(e.target === this); // false
  },
  false // true / false : parameter ke-3 yang menentukan capturing / bubbling
);
