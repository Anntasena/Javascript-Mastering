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
  // section.classList.add("section--hidden");
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
! LIFE CYCLE DOM EVENT
? Life cycle DOM event adalah halaman sejak pertama kali di akses, hingga user meninggalkannya


* DOM Content Loaded
  @-> Event ini dipicu ketika HTML dari sebuah halaman telah sepenuhnya dimuat dan diurai oleh browser, namun tidak menunggu resource eksternal seperti gambar, stylesheet, atau skrip lainnya untuk selesai dimuat.
  @-> Artinya, event ini terjadi lebih awal dibandingkan event load
  @-> Karakteristik DOMContentLoaded Event:
      -> Dipicu saat HTML telah selesai diurai, dan DOM sudah siap untuk dimanipulasi.
      -> Tidak menunggu resource eksternal (seperti gambar atau CSS) untuk dimuat sepenuhnya.
      ->Umumnya digunakan ketika kita ingin memanipulasi atau mengambil elemen dari halaman segera setelah struktur HTML selesai dibuat.
  @-> Kapan Menggunakan DOMContentLoaded:
      -> Ketika Anda ingin menjalankan kode segera setelah HTML selesai dimuat dan DOM telah diurai, namun tidak memerlukan seluruh resource (seperti gambar) untuk selesai dimuat.
      -> Ideal digunakan jika Anda ingin memanipulasi elemen-elemen halaman atau menginisialisasi logika JavaScript yang bergantung pada elemen HTML yang ada.

* Load Event
  @-> Event ini dipicu ketika seluruh halaman web, termasuk semua resources eksternal seperti gambar, script, stylesheet, dan lainnya, telah sepenuhnya dimuat dan diproses oleh browser.
  @-> Load event adalah salah satu tanda bahwa halaman web siap untuk digunakan tanpa ada lagi elemen yang tertunda untuk dimuat.
  
  @-> Karakteristik load event:
      -> Event ini ditrigger setelah semua resource di halaman web selesai dimuat.
      -> Biasanya digunakan untuk menjalankan kode JavaScript yang memerlukan seluruh elemen halaman siap (seperti gambar dan media lainnya).
      -> Umumnya, Anda menambahkan event listener load ke window atau document.
  @-> Kapan Menggunakan load Event:
      -> Saat Anda ingin memastikan semua resource seperti gambar, video, atau script eksternal selesai dimuat sebelum melakukan tindakan tertentu.
      -> Misalnya, jika Anda memiliki animasi yang perlu menunggu sampai semua gambar di halaman muncul, Anda bisa menggunakan load event untuk memastikan tidak ada elemen yang tertinggal.

  * Before Unload
  @->  event yang dipicu ketika pengguna mencoba untuk meninggalkan halaman web, misalnya dengan menutup tab atau browser, atau memuat ulang halaman.
  @-> Event ini memberikan kesempatan bagi pengembang untuk melakukan tindakan tertentu, seperti menyimpan data atau menampilkan pesan peringatan kepada pengguna.

  @-> Cara Kerja Event beforeunload
      -> Ketika event beforeunload dipicu, browser memberi kesempatan kepada skrip di halaman untuk mencegah pengguna meninggalkan halaman atau memberikan peringatan kepada mereka. Namun, pada browser modern, kemampuan untuk menampilkan pesan khusus sudah dibatasi. Biasanya, browser akan menampilkan pesan default yang memberi tahu pengguna bahwa perubahan yang belum disimpan mungkin akan hilang.
  @-> Keterbatasan Modern Browser
  Di browser modern, beberapa batasan diterapkan untuk mengurangi gangguan bagi pengguna:
      -> Pesan Kustom: Beberapa tahun lalu, pengembang bisa menampilkan pesan kustom kepada pengguna. Namun, sekarang browser hanya menampilkan pesan default mereka, dan pesan kustom tidak didukung.
      -> User Action: Pada beberapa browser, event beforeunload hanya akan bekerja jika ada interaksi langsung dari pengguna dengan halaman, seperti klik atau pengetikan.

  @-> Kapan Event Ini Berguna?
      -> Mencegah Data Hilang: Jika pengguna sedang mengisi formulir atau menulis sesuatu di halaman dan mereka tanpa sengaja menutup halaman, event ini dapat digunakan untuk memberikan peringatan.
      -> Melakukan Pembersihan: Event ini juga bisa digunakan untuk menjalankan proses pembersihan atau pembatalan operasi tertentu sebelum pengguna meninggalkan halaman.
*/

//# Example DOM content loaded
document.addEventListener("DOMContentLoaded", function (e) {
  console.log("OM siap, namun gambar mungkin belum selesai dimuat.", e);
});

//# Example load event
window.addEventListener("load", function (e) {
  console.log("Seluruh halaman dan semua resource eksternal telah dimuat.", e);
});

//# Example beforeunload event
// window.addEventListener("beforeunload", function (e) {
//   e.preventDefault(); // Optional, tidak terlalu diperlukan
//   e.returnValue = ""; // Ini yang memicu prompt konfirmasi
// });
