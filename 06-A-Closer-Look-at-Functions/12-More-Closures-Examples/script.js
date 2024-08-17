"use strict";


//$ [EXAMPLE 1] 
let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

g();
f(); // 46

/*
![PENJELASAN]

# let f
* Anda mendeklarasikan f sebagai variabel di lingkup global (di luar fungsi mana pun). Ini memungkinkan f diakses dan diubah dari dalam fungsi apa pun.

# const g = function () {
#   const a = 23;
#   f = function () {
#     console.log(a * 2);
#  };
# };
* Fungsi g didefinisikan di sini. Di dalam fungsi ini, terdapat variabel lokal a yang bernilai 23.
* Di dalam fungsi g, Anda juga mendefinisikan fungsi f yang baru. Fungsi f ini tidak langsung dieksekusi, tetapi didefinisikan sebagai fungsi yang akan mencetak hasil dari a * 2.
* Karena f didefinisikan di dalam g, f menjadi "terikat" dengan lingkup di mana ia didefinisikan, yang mencakup variabel a.

# g()
* Ketika Anda memanggil g(), fungsi g akan dieksekusi:
* - Variabel a akan dideklarasikan dan diinisialisasi dengan nilai 23.
* - Fungsi f didefinisikan ulang sehingga sekarang mengacu pada fungsi yang mencetak a * 2.
* Pada titik ini, f sudah "menutup" (meng-closure) lingkup di mana ia didefinisikan. Itu berarti, meskipun g() selesai dijalankan, fungsi f masih "mengingat" variabel a dari lingkup g.

# f()
* Ketika Anda memanggil f(), ia akan mencetak hasil a * 2, yaitu 46. Ini terjadi karena f masih memiliki akses ke variabel a dari lingkup fungsi g, meskipun g telah selesai dieksekusi.
*/

// re-assign
const h = function () {
  const b = 800;
  f = function () {
    console.log(b * 2);
  };
};

h()
f() // 1600


//$ [EXAMPLE 2]
const boardPassenger = function (num , wait) {
  const perGroup = num / 3;

  setTimeout(function (){
    console.log(`We are now boarding all ${num} passangers`);
    console.log(`We There are 3 group each per-group with ${perGroup} passangers`);
  },wait * 1000)

  console.log(`Will start boarding in ${wait} seconds`);
}

boardPassenger(177, 3)