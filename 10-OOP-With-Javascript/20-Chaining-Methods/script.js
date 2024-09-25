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

//$ 4 ENCAPSULATION
//! 1. PUBLIC FIELD
//! 2. PRIVATE FIELD
//! 3. PUBLIC METHOD
//! 4. PRIVATE METHOD

//$ 4 ENCAPSULATION (STATIC)
//! 1. PUBLIC STATIC FIELD
//! 2. PRIVATE STATIC FIELD
//! 3. PUBLIC STATIC METHOD
//! 4. PRIVATE STATIC METHOD

class Account {
  //! Public field (instances)
  locale = navigator.language;
  // _movements = [];

  //! Private field (instance)
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    // this._movements = []; // protected property
    this.locale = navigator.language;

    console.log(`Thanks for opening account, ${owner}`);
  }

  //! Public methods

  // Public interface
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this; // menambahkan ini membuat chaining berfungsi
  }

  withdrawel(val) {
    this.deposit(-val);
    return this; // menambahkan ini membuat chaining berfungsi
  }

  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
      return this; // menambahkan ini membuat chaining berfungsi
    }
  }

  //! Static
  static helper() {
    console.log("Static");
  }

  //! Private methods
  //- #approveLoan(val) {
  _approveLoan(val) {
    return true;
  }
}

const acc1 = new Account("Syahrin", "IDR", 1111);
console.log(acc1);

// acc1.movements.push(250);
// acc1.movements.push(-150);
// acc1.approveLoan(1000);

acc1.deposit(250);
acc1.withdrawel(50);
acc1.requestLoan(1000);
console.log(acc1.getMovements());
console.log(acc1.pin);
Account.helper();

// console.log(acc1.#movments);
// console.log(acc1.#approveLoan);

//! Chaining
acc1
  .deposit(300)
  .deposit(500)
  .withdrawel(35)
  .requestLoan(25000)
  .withdrawel(4000);

console.log(acc1.getMovements());
