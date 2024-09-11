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

const h1 = document.querySelector("h1");

const alertH1 = function (e) {
  alert("addEventListener: Great! You are reading the heading :D");
};

//# addEventListener
//@ mouseenter = aktif saat mouse cursor menyentuh yang ditarget
h1.addEventListener("mouseenter", alertH1);
//@ menonaktifkan eventListener setelah 3detik
setTimeout(() => h1.removeEventListener("mouseenter", alertH1), 3000);

//# cara lain menggunakan eventListener dengan cara langsung menambahkan on-event pada element (oldSchool style)
h1.onmouseenter = function (e) {
  alert("onmouseenter: Great! You are reading the heading :D");
};

//! dari kedua cara tersebut kenapa addEventListener lebih baik?
//? 1. karna eventListener memungkinkan kita menambah berberapa event handler
//? 2. kita benar2 bisa menghapus event handler

//# Handling event menggunakan HTML attribute (jangan digunakan)
//? <h1 onclick="alert('HTML: alert')"> </h1>
