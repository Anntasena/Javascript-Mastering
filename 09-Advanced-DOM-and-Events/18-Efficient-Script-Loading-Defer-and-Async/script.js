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
//@ Open modal
const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
//@ Close modal
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
// Hover animation - in
nav.addEventListener("mouseover", handlerHover.bind(0.5));
// Hover animation - out
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
  //@ replace src with data-src
  entry.target.src = entry.target.dataset.src;
  //@ remove blur filter
  entry.target.addEventListener("load", function () {
    entry.target.classList.remove("lazy-img");
  });
  //@ stop observing
  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: "200px",
});

imgTargets.forEach((img) => imgObserver.observe(img));

//$ SLIDER-------------------------------------------------
const slider = function () {
  const slides = document.querySelectorAll(".slide");
  const dotContainer = document.querySelector(".dots");
  const btnSlideLeft = document.querySelector(".slider__btn--left");
  const btnSlideRight = document.querySelector(".slider__btn--right");

  let curSlide = 0;
  const maxSlide = slides.length;

  //# functions
  //@ function pembuatan dots
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        "beforeend",
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  //@ function pengaktifan dots
  const activateDot = function (slide) {
    document
      .querySelectorAll(".dots__dot")
      .forEach((dot) => dot.classList.remove("dots__dot--active"));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add("dots__dot--active");
  };

  //@ function pengaktifan slide
  const goToSlide = function (s) {
    slides.forEach(
      (slide, index) =>
        (slide.style.transform = `translateX(${100 * (index - s)}%)`)
    );
  };

  // next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  // previous slide
  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  //@ function setup slide
  const init = function () {
    goToSlide(0);
    createDots();
    activateDot(0);
  };
  init();

  //# event handler
  //@ handle with mouse click
  btnSlideRight.addEventListener("click", nextSlide);
  btnSlideLeft.addEventListener("click", prevSlide);

  //@ handle with keyboard
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") prevSlide();
    e.key === "ArrowRight" && nextSlide();
  });

  //@ dot handler
  dotContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("dots__dot")) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });
};
slider();

//!-------------------------------------------------------
//?-------------------------------------------------------
//*-------------------------------------------------------
//# Lecture ----------------------------------------------

/*
! DEFER AND ASYNC SCRIPT LOADING

# Memasukan file JS kedalam HTML
  *-> Regular way
  @-> Syntax: [End of body]
  <script src="script.js">
  @-> Bagaimana Cara Kerjanya?: 
    Ketika tag <script> biasa digunakan (tanpa atribut async atau defer), browser langsung menghentikan pemrosesan halaman HTML begitu menemui skrip tersebut. Halaman tidak akan melanjutkan rendering sampai skrip selesai dimuat dan dieksekusi.
  @-> Keuntungan: 
    Cocok untuk skrip yang mempengaruhi struktur halaman (misalnya, jika skrip memodifikasi DOM saat halaman dimuat).
  @-> Kekurangan: 
    Memperlambat waktu rendering halaman karena browser menunggu skrip dimuat dan dijalankan sebelum melanjutkan parsing HTML.
  
    *-> Async way (Cara Asinkron)
  @-> Syntax: [Async in Head]
  <script async src="script.js">
  @-> Bagaimana Cara Kerjanya?: 
    Dengan atribut async, browser akan memuat skrip secara asinkron, yaitu skrip diambil di latar belakang sembari halaman tetap diparsing. Begitu skrip selesai dimuat, eksekusi skrip langsung terjadi, terlepas dari apakah halaman HTML telah selesai diparsing atau belum.
  @-> Keuntungan: 
    Halaman dan skrip dimuat secara bersamaan, sehingga mempercepat loading halaman.
  @-> Kekurangan: 
    Skrip mungkin dijalankan sebelum halaman selesai diparsing, sehingga bisa menyebabkan masalah jika skrip bergantung pada elemen DOM yang belum sepenuhnya dimuat.
  
  
  
  *-> Defer way (Cara Tunda)
  @-> Syntax: [Defer in Head]
  script defer src="script.js">
  @-> Bagaimana Cara Kerjanya?: 
    Dengan defer, browser memuat skrip secara asinkron (seperti async), tetapi ada perbedaan penting: skrip hanya akan dieksekusi setelah seluruh halaman HTML selesai diparsing.
  @-> Keuntungan:
    Skrip dijalankan setelah seluruh elemen DOM siap, sehingga menghindari masalah eksekusi skrip yang mengandalkan DOM. defer juga mempertahankan urutan eksekusi jika ada beberapa skrip berturut-turut.
  @-> Kekurangan: 
    Tidak banyak, tetapi tidak secepat async dalam hal eksekusi skrip.

  
  *-> Kapan Menggunakan Masing-Masing:
  @-> Regular: 
  -> Jika skrip sangat penting untuk memodifikasi halaman sebelum dilihat pengguna (misalnya, skrip yang langsung memanipulasi elemen DOM).
  -> Gunakan saat kamu butuh untuk support browser lama
  @-> Async: 
  -> Untuk skrip yang tidak bergantung pada elemen DOM atau urutan skrip, misalnya skrip pelacakan atau iklan.
  -> Gunakan saat kita menggunakan 3rd-party script seperti (google analytics)
  @-> Defer: 
  -> Untuk skrip yang memerlukan seluruh halaman dimuat terlebih dahulu, misalnya skrip untuk manipulasi DOM yang kompleks atau aplikasi berbasis JavaScript.
  -> Secara keseluruhan solusi terbaik jika kita menulis script sendiri, (termasuk library)


  @ attribut yang ditambahkan dari ke3 cara tersebut akan mempengaruhi cara file JS yang diambil, yang pada dasarnya beratri mengunduh dan kemudian diesekusi
*/
