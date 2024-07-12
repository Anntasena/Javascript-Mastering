"use strict";

const modal = document.querySelector(`.modal`);
const overlay = document.querySelector(`.overlay`);
const btn = document.querySelector(`.close-modal`);
const btnsShowModal = document.querySelectorAll(`.show-modal`);
const btnCloseModal = document.querySelector(`.close-modal`);
/*
@> querrySelector mempunyai batasan yaitu hanya element pertama yang akan di pilih
@> querrySelectorAll bisa menghilangkan batasan element yang dipilih
*/


//# open modal funtion
const openModal = function () {
  //? cara menghapus class (.remove)
  //  menghapus class tidak perlu menggunaakn tanda titik "."
  modal.classList.remove(`hidden`); // Anternatif -> modal.style.display = `block`
  overlay.classList.remove(`hidden`);
};

//# close modal funtion
const closeModal = function () {
  //? cara menambah class (.add)
  //  menambah class tidak perlu menggunaakn tanda titik "."
  modal.classList.add(`hidden`);
  overlay.classList.add(`hidden`);
};

for (let i = 0; i < btnsShowModal.length; i++) {
  btnsShowModal[i].addEventListener(`click`, openModal);
}

btnCloseModal.addEventListener(`click`, closeModal);
overlay.addEventListener(`click`, closeModal);
