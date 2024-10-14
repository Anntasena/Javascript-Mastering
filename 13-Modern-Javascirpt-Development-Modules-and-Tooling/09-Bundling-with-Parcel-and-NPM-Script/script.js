/*
! BUNDLING PARCEL

? HOW TO INSTALL PARCEL [sesuaikan foldernya]
*-> npm i parcel --save-dev

? RUN PARCEL
*-> npx parcel [nama file]

? saat di run muncul folder "dist" yang artinya distribution

$ [TIPS] Disarankan untuk para developer untuk secara lokal agar dapat menggunakan versi terbaru, selalu gunakan pedekatan itu untuk performance yang lebih tinggi
*/
//$ [TIPS] melakukan import seperti ini sebenarnya bukan best pactice

// error jika ditutup kurung
//# bad practice
// import cloneDeep from "../node_modules/lodash-es/cloneDeep.js";

//# best practice practice (ini bekerja disemua jenis asset)
// import cloneDeep from "lodash-es";
import cloneDeep from "lodash-es";

//@------------------------------------------
console.log("Import module");

import add, { cart } from "./shoppingCart";
add("pizza", 2);
add("pizza", 2);
add("pizza", 2);

//@------------------------------------------
const state = {
  cart: [
    { product: "bread", quatity: 5 },
    { product: "pizza", quatity: 5 },
  ],
  user: { loggedIn: true },
};

const stateClone = Object.assign({}, state);
const stateClone2 = cloneDeep(state);
state.user.loggedIn = false;

console.log(stateClone); // user true
console.log(stateClone2); // user false [deep clone tidak merubah value saat copy]

// $ PARCEL DAPAT MENGAKTIFKAN SESUATU YANG LEBIH BAIK YANG DISEBUT, HOT MODULE REPLACEMENT
// kode ini hanya dimengerti parcel
if (module.hot) {
  module.hot.accept();
}
