"use strict";

// COMPONENT
const modal = document.querySelector(".modal");
const tabsContainer = document.querySelector(".operations__tab-container");
const nav = document.querySelector(".nav");

// STYLE EFFECT
const overlay = document.querySelector(".overlay");

// BUTTON
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
const btnScrollTo = document.querySelector(".btn--scroll-to");

// ATOMIC COMPONENT
const section1 = document.querySelector("#section--1");
const tabs = document.querySelectorAll(".operations__tab");
const tabsContent = document.querySelectorAll(".operations__content");

//!-------------------------------------------------------
//?-------------------------------------------------------
//*-------------------------------------------------------
//#-------------------------------------------------------

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
document.querySelector(".nav__links").addEventListener("click", function (e) {
  e.preventDefault();

  // matching strategy
  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

//$ TAB COMPONENT
tabsContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".operations__tab");
  // Guard clause untuk mencegah error jika yang diklik bukan .operations__tab
  if (!clicked) return;

  // Hapus class 'active' dari semua tab
  tabs.forEach((tab) => tab.classList.remove("operations__tab--active"));
  // Hapus class 'active' dari semua content area
  tabsContent.forEach((content) =>
    content.classList.remove("operations__content--active")
  );

  // Tambahkan class 'active' pada tab yang diklik
  clicked.classList.add("operations__tab--active");
  // Tambahkan class 'active' pada content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add("operations__content--active");
});

//$ MENU NAV ANIMATION
const handlerHover = function (e, opacity) {
  // jika menggunakan way2, argument ke-2 tidak dibutuhkan
  if (e.target.classList.contains("nav__link")) {
    const link = e.target;
    const siblings = link.closest(".nav").querySelectorAll(".nav__link");
    const logo = link.closest(".nav").querySelector("img");

    siblings.forEach((el) => {
      // if (el !== link) el.style.opacity = opacity;
      if (el !== link) el.style.opacity = this; // ganti ke this untuk way2
    });
    // logo.style.opacity = opacity;
    logo.style.opacity = this; // ganti ke this untuk way2
  }
};

//# Hover animation - in
// way1
// nav.addEventListener("mouseover", (e) => handlerHover(e, 0.5));
// way2
nav.addEventListener("mouseover", handlerHover.bind(0.5));

//# Hover animation - out
// way1
// nav.addEventListener("mouseout", (e) => handlerHover(e, 1));
// way2
nav.addEventListener("mouseout", handlerHover.bind(1));

//!-------------------------------------------------------
//?-------------------------------------------------------
//*-------------------------------------------------------
//# Lecture ----------------------------------------------
