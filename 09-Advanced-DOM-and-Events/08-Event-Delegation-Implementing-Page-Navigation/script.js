"use strict";

// COMPONENT
const modal = document.querySelector(".modal");

// STYLE EFFECT
const overlay = document.querySelector(".overlay");

// BUTTON
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
const btnScrollTo = document.querySelector(".btn--scroll-to");

// WEB PAGE
const section1 = document.querySelector("#section--1");

//!-------------------------------------------------------
//?-------------------------------------------------------
//*-------------------------------------------------------
//# ------------------------------------------------------

//$ MODAL
//# Open modal
const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
//# Close modal
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

//$ BUTTON SCROLL
btnScrollTo.addEventListener("click", function () {
  section1.scrollIntoView({ behavior: "smooth" });
});

//$ PAGE NAVIGATION

//!-------------------------------------------------------
//?-------------------------------------------------------
//*-------------------------------------------------------
//# Lecture ----------------------------------------------

//! EVENT DELEGATION: IMPLEMENTING PAGE NAVIGATION

//? sudah benar tetapi kurang efisien
// document.querySelectorAll(".nav__link").forEach(function (el) {
//   el.addEventListener("click", function (e) {
//     e.preventDefault(); // mencegak prilaku default bahkan yang sudah di set di HTML
//     const id = this.getAttribute("href"); // mendapatkan attribute
//     console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: "smooth" });
//   });
// });
//? best practice menggunakan event delegantion
// ada 2 langkah event delegation
//    1. menambahkan event listener ke parent element dari semua element yang di target / minati
//    2. tentukan element apa yang berasal dari event tersebut

document.querySelector(".nav__links").addEventListener("click", function (e) {
  e.preventDefault();

  // matching strategy
  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});
