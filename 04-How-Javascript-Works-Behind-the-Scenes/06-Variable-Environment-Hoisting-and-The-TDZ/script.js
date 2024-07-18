/*
! Hoisting in javascript
? Hoisting pada dasarnya memmbuat berberapa jenis variable dapat diakses atau katakanlah dapat digunakan dalam kode sebelum mereka benar2 di deklarasikan dalam kode

*- sebelum execution, kode di pindai untuk variable declaration, kemudian untuk setiap variable yang ditemukan dalam kode, properti baru dibuat di "variable environment object"

$ fact:
*- TDZ = Temporal Dead Zone
*/

/*
! Temporal dead zone, let and const
? contoh dibawah:
*/
const myName = `Syahrin`

if (myName === `Syahrin`) {
    console.log(`Syahrin is a ${job1}`); // variable "job1" tidak akan bisa di akses karna di panggil sebelum di deklarasikan khusus "let dan const"
    console.log(`Syahrin is a ${job2}`); // variable "job2" bisa di akses karna menggunakan deklarasi "var"
    const job1 = `programmer`
    var job2 = `front-end web developer`
}
/*
! Apa kebutuhan javascript untuk memiliki TDZ?
? Alasan utama TDZ dipekenalkan di ES6 karna prilaku yang membuatnya lebih mudah untuk menghindari dan menangkap kesalahan
? Alasan lain karna menggunakan variable yang diatur ke undefined sebelum benar2 di deklarasikan dapan menyebabkan bug serius yang mungkin sulit untuk ditemukan, Jadi mengakses variable sebelum deklarasi adalah "bad practice" dan harus
? Membuat variable const benar2 berfungsi sebagaimana mestinya
*/
/*
! mengapa hoisting menumbulkan banyak masalah, dan mengapa hal itu terjadi sejak awal?
? Jadi pembuat JS pada dasarnya mengimplementasikan hoisting agar kita bisa menggunakan deklarasi function sebelum kita menggunakannnya, karna ini penting untuk berberapa teknik pemrogramman, seperti rekusi bersama
? Berberapa orang juga berpikir bahwa hoisting membuat kode lebih mudah dibaca
? var hoisting hanya bedasarkan ikut2an, dan pembuatnya tidak akan menyangkan bahwa JS akan sebesar ini

*/