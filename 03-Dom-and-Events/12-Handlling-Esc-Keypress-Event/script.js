"use strict";

const modal = document.querySelector(`.modal`);
const overlay = document.querySelector(`.overlay`);
const btn = document.querySelector(`.close-modal`);
const btnsShowModal = document.querySelectorAll(`.show-modal`);
const btnCloseModal = document.querySelector(`.close-modal`);

//# open modal funtion
const openModal = function () {
  modal.classList.remove(`hidden`); // Anternatif -> modal.style.
  overlay.classList.remove(`hidden`);
};

//# close modal funtion
const closeModal = function () {
  modal.classList.add(`hidden`);
  overlay.classList.add(`hidden`);
};

for (let i = 0; i < btnsShowModal.length; i++) {
  btnsShowModal[i].addEventListener(`click`, openModal);
}

btnCloseModal.addEventListener(`click`, closeModal);
overlay.addEventListener(`click`, closeModal);

/* 
# biasanya ada 3 cara menutup component "modal" yaitu:
- 1. click button exit "x"
- 2. click diluar component modal / overlay
- 3. menekan "Esc" di keyboard (keyboard event)

# keyboard event disebut global event
  - itu terjadi karna tidak ada syarat khusus harus click di daerah tertentu dalam component
  - global event terjadi tidak hanya pada satu element tertentu
*/

/*
# Event handling keyboard ada 3 jenis
* 1. keydown: Terjadi saat tombol ditekan (menangkap semua tombol).
* 2. keyup: Terjadi saat tombol dilepaskan (menangkap semua tombol).
* 3. keypress: Terjadi saat tombol ditekan (hanya menangkap tombol yang menghasilkan karakter, sekarang sudah usang).
*/

//@ cara keypress event
/* 
document.addEventListener(`keydown`, function (e) {
  if (e.key === "Escape") {
    @mengecek apakah teradap class "hidden" di class property
    if (!modal.classList.contains(`hidden`)) {
      closeModal()
    }
  }
  console.log(e.key);
});
*/

// best practice
document.addEventListener(`keydown`, function (e) {
  if (e.key === `Escape` && !modal.classList.contains(`hidden`)) {
    closeModal();
  }
});
