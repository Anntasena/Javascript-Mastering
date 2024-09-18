"use strict";

//!-------------------------------------------------------
//?-------------------------------------------------------
//*-------------------------------------------------------
//# DOM SELECTION ----------------------------------------

// COMPONENT
const modal = document.querySelector(".modal");
const tabsContainer = document.querySelector(".operations__tab-container");
const nav = document.querySelector(".nav");
const allSections = document.querySelectorAll(".section");

// STYLE EFFECT
const overlay = document.querySelector(".overlay");
const imgTargets = document.querySelectorAll("img[data-src]");

// BUTTON
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
const btnScrollTo = document.querySelector(".btn--scroll-to");

// PAGE COMPONENT
const header = document.querySelector(".header");
const section1 = document.querySelector("#section--1");
const tabs = document.querySelectorAll(".operations__tab");
const tabsContent = document.querySelectorAll(".operations__content");

//!-------------------------------------------------------
//?-------------------------------------------------------
//*-------------------------------------------------------
//#-------------------------------------------------------

//$ MODAL-------------------------------------------------
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

//$ BUTTON SCROLL-----------------------------------------
btnScrollTo.addEventListener("click", function () {
  section1.scrollIntoView({ behavior: "smooth" });
});

//$ PAGE NAVIGATION---------------------------------------
document.querySelector(".nav__links").addEventListener("click", function (e) {
  e.preventDefault();

  // matching strategy
  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

//$ TAB COMPONENT-----------------------------------------
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

//$ MENU NAV ANIMATION-------------------------------------
const handlerHover = function (e) {
  if (e.target.classList.contains("nav__link")) {
    const link = e.target;
    const siblings = link.closest(".nav").querySelectorAll(".nav__link");
    const logo = link.closest(".nav").querySelector("img");

    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};
//# Hover animation - in
nav.addEventListener("mouseover", handlerHover.bind(0.5));
//# Hover animation - out
nav.addEventListener("mouseout", handlerHover.bind(1));

//$ STICKY NAVIGATION--------------------------------------
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) nav.classList.add("sticky");
  else nav.classList.remove("sticky");
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);

//$ REVEAL SECTION (FADE SCROLL ANIMATION)-----------------
const revealSection = function (entries, observer) {
  const [entry] = entries;
  // console.log(entry);

  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section--hidden");
  //# stop observeing
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});

//$ LAZY LOADING IMAGES-------------------------------------
const loadImg = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;
  //# replace src with data-src
  entry.target.src = entry.target.dataset.src;
  //# remove blur filter
  entry.target.addEventListener("load", function () {
    entry.target.classList.remove("lazy-img");
  });
  //# stop observing
  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: "200px",
});

imgTargets.forEach((img) => imgObserver.observe(img));

//!-------------------------------------------------------
//?-------------------------------------------------------
//*-------------------------------------------------------
//# Lecture ----------------------------------------------

/*
!-> Salah satu hal terpenting saat membangun situs web adalah "performance" dan gambar memiliki dampak terbesar pada pemuatan halaman
?-> Jadi sangat penting bahwa gambar dioptimalkan dihalaman manapun, dan untuk itu, kita bisa menggunakan strategi yang disebut "lazy loading images" 


- Visual things sangat mempengaruhi performance, terutama untuk pengguna yang memiliki koneksi internet yang lambat, paket data yang terbatas atau ponsel yang jadul
- Sebagai developer lebih baik memikirkan tentang penggua seperti itu, karna tidak semua orang memiliki komputer kelas atas atau ponsel terbaru
*/
