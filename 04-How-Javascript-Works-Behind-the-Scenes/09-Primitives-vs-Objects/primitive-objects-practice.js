"use strict";

//! Primitive Types
let lastName = `Fajri`;
let oldLastName = lastName;
lastName = `Hauf`;
console.log(lastName, oldLastName); // Hauf Fajri

//! Refrence Types
const mamat = {
  firstName: `Mamat`,
  lastName: `Farji`,
  age: 26,
};
const marriedMamat = mamat;
marriedMamat.lastName = `Hauf`;
console.log(`Before Marriage:`, mamat); // Before Marriage: { firstName: 'Mamat', lastName: 'Hauf', age: 26 }
console.log(`After Marriage:`, marriedMamat); // After Marriage: { firstName: 'Mamat', lastName: 'Hauf', age: 26 }

// marriedMamat = {} ==> ini tidak bisa karna deklarasi menggunaakn const
//$ Kesimpulan: mengubah object sepenuhnya, menjadi menetapkan object baru sama sekali berbeda dari sekedar mengubah properti

//! Copying Objects
const mamat2 = {
  firstName: `Mamat`,
  lastName: `Farji`,
  age: 26,
};

const mamatCopy = Object.assign({}, mamat2);
mamatCopy.lastName = `Rahmat`;
console.log(`Before Marriage:`, mamat2); // Before Marriage: { firstName: 'Mamat', lastName: 'Farji', age: 26 }
console.log(`After Marriage:`, mamatCopy); // After Marriage: { firstName: 'Mamat', lastName: 'Rahmat', age: 26 }
//? Teknik object ini "Object.assign()"" berfungsi pada level pertama saja. Dengan kata lain, jika kita mempunyai object di dalam object, maka inner object ini sebenarnya akan tetap sama
//? "Object.assign()" hanya membuat `Shallow copy` bukan `Deep clone`

/*
$ FACT:
*-> "Salinan dangkal" atau "shallow copy" dalam konteks pemrograman mengacu pada cara menyalin data dari satu objek ke objek lain di mana hanya referensi terhadap objek asli yang disalin, bukan nilai sebenarnya dari objek tersebut.
*-> "deep clone" adalah metode untuk menyalin data dari satu objek ke objek lain di mana semua elemen, termasuk sub-objek, disalin secara rekursif. Dengan kata lain, deep copy menciptakan salinan yang sepenuhnya independen dari objek asli, sehingga perubahan pada objek yang disalin tidak akan mempengaruhi objek asli.
*/