"use strict";

/*
! Apa Itu Object-Oriented Programming (OOP)?
? OOP adalah paradigma pemrograman yang berfokus pada konsep object.

# Karakteristik Object:
@-> Properties: 
    Data yang dimiliki oleh object.
@-> Methods: 
    Fungsi yang terkait dengan object dan bertindak pada data tersebut.

# Inti dari OOP:
->  OOP memungkinkan kita untuk membungkus data dan perilaku (properties dan methods) ke dalam satu kesatuan yang disebut object.
->  Dengan object, kita dapat mengakses dan memanipulasi data dengan lebih mudah.
->  OOP sering disebut sebagai pendekatan di mana aplikasi dibangun dengan menggunakan object sebagai blok penyusunnya.

# Interaksi Object:
-> Object dalam OOP berinteraksi satu sama lain melalui sesuatu yang disebut public interface atau API.
-> Public interface ini adalah kumpulan methods yang dapat diakses oleh kode eksternal, memungkinkan object untuk saling berkomunikasi.

# Alasan Pengembangan OOP:
@-> Pemeliharaan Kode: 
Dengan menggabungkan data dan fungsi terkait dalam satu objek, kode lebih mudah dipelihara dan dipahami.
@-> Reuse Code (Penggunaan Ulang Kode): 
OOP memfasilitasi penggunaan kembali kode melalui konsep pewarisan, di mana objek baru dapat mewarisi sifat dan perilaku dari objek yang sudah ada.
@-> Abstraksi: 
OOP membantu menyembunyikan kompleksitas internal dan hanya menampilkan fungsionalitas yang relevan melalui antarmuka publik, memudahkan pengembang lain yang berkolaborasi.
@-> Modularitas: 
Dengan OOP, aplikasi dipecah menjadi bagian kecil yang mandiri (objek), sehingga aplikasi lebih modular dan fleksibel.
@-> Skalabilitas: 
OOP mendukung pengembangan aplikasi besar dan kompleks karena strukturnya yang modular dan terorganisir.

$ Dengan pendekatan OOP, kode menjadi lebih modular, mudah dipahami, dan mudah dikembangkan.

! CLASSES AND INSTANCE (TRADITIONAL OOP)

? Apa itu Kelas (Class)?
@-> Class adalah blueprint atau template untuk membuat object. Ini seperti cetak biru yang mendefinisikan bagaimana objek akan terlihat, termasuk properti (data) dan method (fungsi yang dimiliki object).
@-> Kelas membantu kita untuk membuat banyak objek yang serupa dengan mudah, tanpa harus menulis ulang properti dan method setiap kali.

? Apa itu Instance?
@-> Instance adalah object spesifik yang dibuat dari sebuah class. Saat kita membuat instance, kita "mengisi" blueprint tersebut dengan data nyata.
@-> Setiap instance adalah versi independen dari object yang dihasilkan dari class.

# Hubungan Antara Class dan Instance:
-> Kelas menentukan sifat dan perilaku umum, sedangkan instance adalah objek nyata yang dibuat dari blueprint kelas tersebut.
-> Beberapa instance bisa dibuat dari satu kelas, dan mereka akan berbagi method tetapi bisa memiliki properti yang berbeda.

! THE 4 FUNDAMENTAL OOP PRINCIPLES

#- Abstaction
    @-> Definisi: 
    Abstraksi adalah proses menyembunyikan detail yang tidak perlu dan hanya menampilkan informasi yang penting. Hal ini memungkinkan kita untuk fokus pada cara penggunaan objek tanpa terganggu oleh detail implementasinya.
    @-> Contoh: 
    Dalam dunia nyata, ketika Anda mengemudikan mobil, Anda tidak perlu tahu cara mesin bekerja. Anda hanya perlu tahu cara mengoperasikan pedal gas, rem, dan setir.

#- Encapsulation
    @-> Definisi: 
    Enkapsulasi adalah prinsip mengelompokkan data (properti) dan perilaku (method) yang berhubungan dalam satu unit (kelas). Ini juga berarti mengontrol akses ke data tersebut, biasanya dengan menggunakan modifier akses (seperti private dan public).
    @-> Contoh: 
    Dalam kelas mobil, Anda bisa membuat properti kecepatan sebagai private sehingga hanya method dalam kelas tersebut yang dapat mengubahnya, menjaga konsistensi dan mencegah akses yang tidak sah.

#- Inheritance
    @-> Definisi: 
    Pewarisan adalah mekanisme di mana satu kelas (kelas anak) dapat mewarisi properti dan method dari kelas lain (kelas induk). Ini memungkinkan kita untuk membuat hierarki kelas dan menggunakan kembali kode.
    @-> Contoh: 
    Jika Anda memiliki kelas Vehicle, Anda bisa membuat kelas Car yang mewarisi semua properti dan method dari Vehicle, serta menambahkan fungsionalitas khusus untuk mobil.

#- Polymorphism
    @-> Definisi: 
    Polimorfisme adalah kemampuan untuk menggunakan metode yang sama pada objek yang berbeda. Dengan polimorfisme, kita dapat mengubah perilaku objek tergantung pada konteksnya.
    @-> Contoh: 
    Jika Anda memiliki beberapa kelas (seperti Cat, Dog, dan Bird) yang masing-masing memiliki method speak(), Anda dapat memanggil method yang sama pada objek dari kelas yang berbeda dan mendapatkan hasil yang berbeda.
*/

/*
! OOP IN JAVACRIPT: PROTOTYPE

# Classical OOP: Classes
# OOP in JS: Prototype

! 3 WAYS OF IMPLEMENTING PROTOTYPAL INHERITANCE IN JAVASCRIPT

# Constructor function
# ES6 Classes
# Object.create()
*/

//--------------------------------------------------------------------------------------------------------------------------
/*
$ TIPS
-> OOP variable harus diawali dengan huruf kapital
-> Function declaration dan expresion bisa berfungsi di OOP "KECUALI" arrow function
-> DI OOP saat kita memanggilnya function kita harus menambahkan new di depannya (ini disebut constructur function)
*/

/*
# 4 step behinde the scane
    1.  New {} is created
    2.  Functin is called, this = {}
    3.  {} linked to prototype
    4.  Function automaticly return {}
*/

//$ FACT -> constructur function bukanlah fitur Javascript, mereka hanyalah sebuah pola yang telah dikembangkan oleh pengembang lain

const Person = function (firstName, birthYear) {
  //@ instance property
  this.firstName = firstName;
  this.birthYear = birthYear;
  //@ Instance method (bad practice)
  //   this.calcAge = function () {
  //     console.log(2024 - this.birthYear);
  //   };
};

const syahrin = new Person("Syahrin", 1998);
console.log(syahrin);

const matlail = new Person("Matlail", 1999);
const fajri = new Person("Fajri", 2000);
console.log(matlail, fajri);

console.log(syahrin instanceof Person); // true

/*
! PROTOTYPES
? Setiap function dalam JS secara otomatis memiliki property yang disebut prototype dan itu termasuk function constructor
*/
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2024 - this.birthYear);
};

syahrin.calcAge();
matlail.calcAge();

// check prototype
console.log(syahrin.__proto__);

console.log(syahrin.__proto__ === Person.prototype); // true
console.log(Person.prototype.isPrototypeOf(syahrin)); // true

Person.prototype.species = "Homo Sapiens";
console.log(syahrin, matlail);
console.log(syahrin.species, matlail.species);

console.log(syahrin.hasOwnProperty("firstName")); // true
console.log(syahrin.hasOwnProperty("species")); // false

console.log(syahrin.__proto__); // Object.prototype (top of prototype chain)
console.log(syahrin.__proto__.__proto__);
console.log(syahrin.__proto__.__proto__.__proto__);

console.log(Person.prototype.constructor);
console.dir(Person.prototype.constructor);

const arr = [2, 4, 5, 6, 7, 8, 9, 10, 9, 9, 9]; // new Array === []
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype); // true

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

/*
$ TIPS -> Memperluas / memperbanyak prototype bukanlah ide yang baik
    * 1. Ada kemungkinan JS bisa manambahkan prototype dengan nama yang sama di update selanjutnya
    * 2. Jika ada dua prototype dengan nama yang sama akan merusak kode kita
    * 3. Jika kita bekerja dengan tim ada kemungkinan member tim menerapkan method yang sama dengan nama yang berbeda yang akhirnya menyebabkan banyak bug
*/

const h1 = document.querySelector("h1");
console.dir((x) => x + 1);
