"use strict";

const modal = document.querySelector(`.modal`);
const overlay = document.querySelector(`.overlay`);
const btn = document.querySelector(`.close-modal`);
const btnsShowModal = document.querySelectorAll(`.show-modal`);

console.log(btnsShowModal);
/*
@> querrySelector mempunyai batasan yaitu hanya element pertama yang akan di pilih
@> querrySelectorAll bisa menghilangkan batasan element yang dipilih
*/

for (let i = 0; i < btnsShowModal.length; i++)
  console.log(btnsShowModal[i].textContent);
