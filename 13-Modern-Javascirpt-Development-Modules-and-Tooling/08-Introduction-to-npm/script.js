/*
! NPM (Node Package Manager)

? How to use npm
*-> npm -v => check npm version / check npm sudah diinstal atau belum
*-> npm init => setup npm (sesuaikan foldernya)
*-> npm i / npm install [nama package] => menginstall package
*-> npm i [nama pacakage]-es => menginstal tanpa format common.js

? Setelah menginstall
*-> terdapat node_modules folder
    ? node_modules tidak boleh di upload di git karna sangat banyak
    ! bagaimana caranya saat kita mencopy dari git tetapi node modulenya tidak ada?
    ? gunakan package.json sebagai jalur, cukup ketik "npm i" di terminal
    - terisi dari file2 package yang diinstall
*-> terdapat package.json
    ? dependency yang terdapat di package.json akan secara otomatis mengisntal sesuai yang tertera saat melakukan penginstalan package
    - terisi dari versi pacakge
*-> terdapat package-lock.json


*/
//$ [TIPS] melakukan import seperti ini sebenarnya bukan best pactice

// error jika ditutup kurung
import cloneDeep from "../node_modules/lodash-es/cloneDeep.js";

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
