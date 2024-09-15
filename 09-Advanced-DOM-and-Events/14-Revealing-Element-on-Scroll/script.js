"use strict";

//!-------------------------------------------------------
//?-------------------------------------------------------
//*-------------------------------------------------------
//# DOM SELECTION ----------------------------------------

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

// PAGE COMPONENT
const header = document.querySelector(".header");
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

//$ STICKY NAVIGATION
//# cara ke1
//@ "getBoundingClientRect()"" di JavaScript digunakan untuk mendapatkan informasi mengenai posisi dan ukuran suatu elemen dalam tampilan (viewport) di browser.
// const initalCoords = section1.getBoundingClientRect();
// console.log(initalCoords);

// window.addEventListener("scroll", function (e) {
//   // console.log(window.scrollY);

//   if (window.scrollY > initalCoords.top) nav.classList.add("sticky");
//   else nav.classList.remove("sticky");
// });

//# cara ke2
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (enteris) {
  const [entry] = enteris;
  console.log(entry, "ini entry header");
  if (!entry.isIntersecting) nav.classList.add("sticky");
  else nav.classList.remove("sticky");
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);

//!-------------------------------------------------------
//?-------------------------------------------------------
//*-------------------------------------------------------
//# Lecture ----------------------------------------------

//! INTERSECTION OBSERVER API / "API PENGAMAT PERSIMPANGAN"
/*
? Intersection Observer API adalah alat yang memungkinkan kita memantau elemen di halaman web dan mengetahui kapan elemen tersebut terlihat di layar (viewport) atau tidak, tanpa harus menggunakan event scroll yang berulang kali. Ini sangat berguna untuk berbagai aplikasi seperti lazy loading, infinite scroll, atau animasi ketika elemen muncul di layar.

? Konsep Dasar:
* Observer: Kita membuat "observer" yang akan mengamati satu atau lebih elemen.
* Callback: Ketika elemen yang diamati (target) mulai terlihat atau hilang dari layar, sebuah callback function akan dijalankan.
* Threshold: Kita dapat menentukan seberapa banyak elemen harus terlihat sebelum callback dipanggil (misalnya, ketika 50% elemen sudah terlihat).
* Root: Area pengamatan, biasanya adalah viewport (bagian yang terlihat di layar), tetapi kita juga bisa mengatur elemen lain sebagai root.

! Apakah Intersection Observer API hanya cocok untuk event scroll?
? Tidak..., Intersection Observer API tidak hanya cocok untuk event scroll, meskipun sering digunakan untuk itu. API ini bekerja dengan memantau perubahan dalam visibilitas elemen relatif terhadap viewport atau elemen root lain, dan hal ini bisa terjadi karena berbagai alasan selain scroll.

? Kegunaan Intersection Observer API Selain Scroll:
* Lazy Loading: Memuat gambar atau konten berat hanya saat mereka hampir terlihat di layar, menghemat sumber daya dan waktu pemuatan halaman.
* Infinite Scrolling: Menambahkan konten baru ke halaman ketika pengguna mendekati bagian bawah halaman, misalnya pada aplikasi berita atau media sosial.
* Animasi Elemen: Memicu animasi ketika elemen mulai terlihat di layar, seperti membuat gambar atau teks fade-in saat pengguna menggulir halaman.
* Memantau Elemen yang Bergerak: Intersection Observer bisa memantau perubahan visibilitas elemen yang bergerak di dalam halaman, misalnya elemen yang dipindahkan dengan animasi atau transformasi.
* Komponen Dinamis: Bisa digunakan untuk mengaktifkan atau menonaktifkan komponen dinamis di aplikasi, seperti menonaktifkan video autoplay saat tidak terlihat.

$ Jadi, Intersection Observer API berguna dalam berbagai situasi yang melibatkan perubahan visibilitas elemen, bukan hanya saat halaman digulirkan.
*/

//! PRACTICE

const obsCallback = function (entries, observer) {
  entries.forEach((entry) => console.log(entry));
};
/*
PENJELASAN
->  obsCallback: Callback function yang dipanggil ketika elemen target melewati batas yang ditentukan (threshold). Parameter entries adalah array dari IntersectionObserverEntry yang merepresentasikan elemen yang diamati.
->  Setiap entry mengandung beberapa informasi penting seperti:
      -> isIntersecting: Apakah elemen sudah terlihat (intersecting).
      -> intersectionRatio: Rasio bagian elemen yang terlihat di layar.
*/

const obsOptions = {
  root: null,
  threshold: [0, 0.2],
};
/*
PENJELASAN
->   obsOptions: Objek konfigurasi untuk Intersection Observer.
    ->   root: Elemen yang digunakan sebagai referensi untuk intersection. Jika null, berarti viewport (area tampilan layar) yang menjadi root.
    ->   threshold: Array atau nilai tunggal antara 0 hingga 1 yang merepresentasikan presentase visibilitas elemen yang memicu callback. 0 berarti callback dipanggil ketika sedikit bagian elemen masuk, sedangkan 1 berarti dipanggil hanya ketika seluruh elemen terlihat.
*/

const observer = new IntersectionObserver(obsCallback, obsOptions);
observer.observe(section1);
/*
PENJELASAN
->   IntersectionObserver: Membuat observer baru, yang akan menggunakan obsCallback saat kondisi threshold terpenuhi.
->   observer.observe(section1): Mulai mengamati elemen section1. Saat elemen ini muncul atau hilang dari viewport sesuai threshold, obsCallback akan dipanggil.
*/
