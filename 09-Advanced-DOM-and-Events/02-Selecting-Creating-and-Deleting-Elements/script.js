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

//////////////////////////////////////////
//?-----------------------------------------------
//*-----------------------------------------------
//!-----------------------------------------------
//# SELECTING ELEMENTS

console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

//@ querySelector = memilih element
const header = document.querySelector(".header");

//@ querySelectorAll = memulih multiple element
const allSection = document.querySelectorAll(".section");
console.log(allSection);

//@ getElementById = memilih id element (ditulis tanpa selector)
document.getElementById("section--1");

//@ getElementsByTagName = memeilih element dengan nama button tanpa peduli selectornya
const allButtons = document.getElementsByTagName("button");
console.log(allButtons);

//@ getElementsByClassName = memilih element class
console.log(document.getElementsByClassName("btn"));

//?-----------------------------------------------
//*-----------------------------------------------
//!-----------------------------------------------
//# CREATING AND INSERTING ELEMENT

//@ insertAdjectionHTML = menyisipkan HTML ke dalam suatu elemen DOM di posisi tertentu
//* insertAdjectionHTML

//@ createElement = membuat element
const message = document.createElement("div");
//@ classList.add() = menambahkan class
message.classList.add("coockie-message");
//@ textContent = =menambahkan teks
// message.textContent = "we use cookied for improved functionality and analytics.";

//@ innerHTML adalah properti yang digunakan untuk mengakses atau mengubah konten HTML di dalam suatu elemen
message.innerHTML =
  'we use cookied for improved functionality and analytics. <button class="btn btn---close-cookie">Got it!</button> "';

//@ prepend() adalah sebuah metode yang digunakan untuk menambahkan konten baru (elemen atau teks) ke awal dari sebuah elemen parent (induk)
// prepend hany bisa digunakan 1x
// prepend tidak hanya bisa digunakan untuk menyisipkan tentapi juga untuk memindahkan
// header.prepend(message); // awal element
header.append(message); // akhir element

//@ cloneNode() adalah metode pada DOM (Document Object Model) yang digunakan untuk membuat salinan dari sebuah node (elemen).
// Jika true, elemen tersebut akan disalin beserta semua elemen anak-anaknya (deep clone).
// Jika false, hanya elemen itu sendiri yang disalin tanpa anak-anaknya (shallow clone).
// header.append(message.cloneNode(true));

//@ before() = menyisipkan element sebelum element yang di target
// header.before(message);

//@ after() = menyisipkan element sesudah element yang di target
// header.after(message);

//?-----------------------------------------------
//*-----------------------------------------------
//!-----------------------------------------------
//# DELETING ELEMENT

document
  .querySelector(".btn---close-cookie")
  .addEventListener("click", function () {
    //@ remove = menghapus element yang ditarget
    message.remove();
    //@ parentElement.removeChild() = menghapus element yang ditarget (cara dahulu)
    // message.parentElement.removeChild(message)
  });
