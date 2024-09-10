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

//?-----------------------------------------------
//*-----------------------------------------------
//!-----------------------------------------------
//# STYLES

//$[SYNTAX] = element.style.property = "value";

//@ style.backgroundColor = mengubah style background color
message.style.backgroundColor = "#37383d";
//@ style.width = mengubah lebar
message.style.width = "120%";

console.log(message.style.color); // tidak bisa diakses
console.log(getComputedStyle(message).color); // aksesnya harus menggunakan getComputedStyle
console.log(message.style.backgroundColor); // bisa diakses

//@ contoh real
console.log(getComputedStyle(message).height);
const heighTest = (message.style.height =
  Number.parseFloat(getComputedStyle(message).height) + 40 + "px");
console.log(heighTest);

/*
! CSS Custom property
@  Format umum dari setProperty adalah: element.style.setProperty(propertyName, value, priority).
      * propertyName: Nama properti CSS yang ingin diubah (misalnya, --color-primary).
      * value: Nilai baru untuk properti CSS tersebut (misalnya, #000).
      * priority (opsional): Misalnya, !important jika diperlukan, tetapi sering kali tidak digunakan.
*/
document.documentElement.style.setProperty("--color-primary", "#000");

//?-----------------------------------------------
//*-----------------------------------------------
//!-----------------------------------------------
//# ATTRIBUTES

//? standart ===>>
const logo = document.querySelector(".nav__logo");
console.log(logo.alt);
logo.alt = "Beautiful minimalist logo"; // membuat / mengganti properti

//@ getAttribute() = mendapatkan relatif direktori di lokal
console.log(logo.getAttribute("src")); // img/logo.png
console.log(logo.src); // http://127.0.0.1:5500/09-Advanced-DOM-and-Events/03-Styles-Attributes-and-Classes/img/logo.png

//? non-standart ===>>
//@ getAttribute() = mendapatkan properti non standart
console.log(logo.designer); // tidak berfungsi
console.log(logo.getAttribute("designer")); // berfungsi
//@ setAttribute() = membuat properti non standart
logo.setAttribute("company", "Bankist");

//@ getAttribute di link
const link = document.querySelector(".twitter-link");
console.log(link.href); // https://twitter.com/jonasschmedtman
console.log(link.getAttribute("href")); // https://twitter.com/jonasschmedtman
// keduanya sama karna linknya absolut

const link2 = document.querySelector(".nav__link--btn");
console.log(link2.href); // http://127.0.0.1:5500/09-Advanced-DOM-and-Events/03-Styles-Attributes-and-Classes/index.html#
console.log(link2.getAttribute("href")); // /#
// keduanya berbeda karena linknya relatif

//# DATA ATTRIBUTES
// kedepannya data attribute akan sering digunakan saat berkerja dengan UI terutama saat perlu menyimpan data di UI
// Gunakan dataset untuk mengakses atribut data-
console.log(logo.dataset.versionNumber); // 3.0
console.log(logo.dataVersionNumber); // undefined

//?-----------------------------------------------
//*-----------------------------------------------
//!-----------------------------------------------
//# CLASSES

//@ add: Menambahkan kelas jika belum ada
logo.classList.add("c");
//@ remove: Menghapus kelas jika ada.
logo.classList.remove("c");
//@ toggle: Menambah atau menghapus kelas, tergantung pada keberadaannya.
logo.classList.toggle("c");
//@ contains: Memeriksa apakah kelas ada pada elemen.
logo.classList.contains("c");

//! JANGAN GUNAKAN INI
logo.className = "c"; // karna akan menimpa semua class yang ada
