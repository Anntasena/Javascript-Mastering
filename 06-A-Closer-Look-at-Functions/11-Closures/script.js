"use strict";

//! CLOSURES (PENUTUPAN)
//? Closures bukanlah penutupan yang kami gunakan secara eksplisit, jadi kita tidak membuat closures secara manual, seperti membuat array baru atau function
//? Jadi closures hanya terjadi secara otomatis dalam situasi tertentu, kita hanya perlu mengenali situasi tersebut

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passenger`);
  };
};

const booker = secureBooking()

booker()
booker()
booker()

//? [PENJELASAN]
/*
*-> Rahasianya dalam closures adalah setiap function selalu memiliki akses ke variable environment (VE) dari execution contex (EC) tempat function itu dibuat
*-> Closures pada dasarnya adalah variable environment (VE) yang melekat pada function, persis seperti waktu dan tempat function itu dibuat
*/

//! DEFINISI CLOSURE dengan cara formal ke intuitif
/*
*-> Closures adalah "VE" yang tertutup dari "EC" dimana suatu function dibuat bahkan setelah execution "EC" itu hilang, atau dengan kata lain bahkan setelah function memeiliki "EC" telah kembali

*-> Closures memberikan akses function ke semua variable dari function induknya. 
  - jadi dimana function dimana ia di definisikan bahkan setelah function induk itu telah kembali
  - jadi function menyimpan refrensi ke lingkup luarnya bahkan setelah lingkup luar itu menghilang
  - yang pada dasarnya mempertahankan rantai lingkup sepanjang waktu

*-> Closure memastikan bahwa suatu function tidak pernah kehilangan koneksi ke variable yang ada ditempat kelahiaran function. itu mengingat variable, bahkan setelah tempat kelahiran hilang
  - ini seperti orang yang tidak kehilangan koneksi ke kampung halamannya
  - dalam analogi : orang adalah function sedangkan kampung halaman adalah ruang lingkup orang tua dan function tidak kehilangan koneksi ke variable yang disimpan dalam ruang lingkup induk ini
  # Gambaran
    @-> function = orang
    @-> ingatan jalan = koneksi
    @-> kampung halaman = parent scope
    @-> kenangan = variable

*-> Closure analaogi seperti tas: function memiliki tas yang dibawa kemanapun ia pergi dan ransel ini berisi semua variable yang ada di lingkungan tempat function itu dibuat 
  # Gambaran
  @-> function = orang
  @-> tas = closure
  @-> isi tas = variable
*/

//$ [CATATAN] kita tidak harus membuat closures secara manual

console.dir(booker); //metode di JavaScript yang digunakan untuk menampilkan representasi interaktif dari objek JavaScript dalam format yang lebih eksploratif, biasanya sebagai pohon atau hierarki. Ini sangat berguna ketika Anda ingin melihat properti dan metode yang ada dalam objek dengan lebih detail.


//$ [TIPS PROGRAMMER] jika ingin percaya diri sebagai programmer, kita harus selalu tau bagaimana tepatnya semua yang ada didalam kode yang kita buat bekerja