// Konfersi antar type value adalah sesuatu yang kita lakukan disetiap bahasa pemrograman

// di javascript ada konveri tipe dan paksaan tipe
/*
    > type konfersi = ketika kita secara manual mengkonfersi dari satu tipe ke tipe lainnya
    > type paksaan = ketika javascript secara otomatis mengubah ikatan di belakang layar
*/

// conversion

const inputYear = `1991`;
console.log(Number(inputYear), inputYear);
// number to string
console.log(Number(inputYear) + 18); //199118
// string to number
console.log(String(23));

// coercion

// Type coercion terjadi setiap kali operator berurusan dengan 2 value yang memiliki tipe berberda
// jadi javascript mengkonfersi salah satu value agar sesuai dengan value lainnya agar operasi dapat dijalankan
console.log(`I am ` + 23  + ` Years old`); // string
console.log(" ");

console.log('10' + '5' + 2); // hasil 1052 
console.log('10' - '5' - 2); // hasil 3, karna '- , * , /' memicu konversi berlawanan

