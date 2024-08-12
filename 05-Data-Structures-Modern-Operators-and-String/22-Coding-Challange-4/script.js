//! Coding Challenge #4

/*
? Tulis program yang menerima daftar nama variabel yang ditulis dalam underscore_case dan mengubahnya menjadi camelCase.

? Input akan berasal dari textarea yang dimasukkan ke dalam DOM (lihat kode di bawah), dan konversi akan terjadi saat tombol ditekan.

* DATA UJI INI (ditempel ke textarea)
underscore_case
first_name
Some_Variable
calcul_AGE
delayed_departure

* HARUSNYA MENGHASILKAN OUTPUT INI (5 output console.log terpisah)
underscoreCase ✅
firstName ✅✅
someVariable ✅✅✅
calculateAge ✅✅✅✅
delayedDeparture ✅✅✅✅✅

* PETUNJUK 1: Ingat karakter mana yang mendefinisikan baris baru di textarea 😉
* PETUNJUK 2: Solusinya hanya perlu berfungsi untuk variabel yang terdiri dari 2 kata, seperti a_b
* PETUNJUK 3: Mulailah tanpa mengkhawatirkan ✅. Atasi hal itu hanya setelah Anda berhasil mengubah nama variabel 😉
* PETUNJUK 4: Tantangan ini memang sengaja dibuat sulit, jadi mulailah menonton solusinya jika Anda menemui kendala. Kemudian berhenti sejenak dan lanjutkan!

Setelah itu, uji dengan data pengujian Anda sendiri!

SEMOGA BERHASIL 😀
*/

document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));

//$ ==> 1
document.querySelector("button").addEventListener("click", function () {
  const text = document.querySelector("textarea").value;
  const rows = text.toLowerCase().split("\n");
  console.log(rows);

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.trim().split("_");
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(25, " ")} ${"✅".repeat(i + 1)}`);
  }
});
