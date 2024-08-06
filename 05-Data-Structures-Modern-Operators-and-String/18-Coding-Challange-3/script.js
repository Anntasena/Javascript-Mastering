//! Coding Challenge #3

/* 
? Mari kita lanjutkan dengan aplikasi taruhan sepak bola kita! Kali ini, kita punya peta dengan catatan kejadian yang terjadi selama pertandingan. Nilainya adalah kejadian itu sendiri, dan kuncinya adalah menit di mana setiap kejadian terjadi (pertandingan sepak bola memiliki waktu 90 menit ditambah waktu tambahan).

*1. Buat array 'kejadian' dari berbagai kejadian pertandingan yang terjadi (tanpa duplikat)
*2. Setelah pertandingan selesai, ditemukan bahwa kartu kuning dari menit ke-64 tidak adil. Jadi hapus kejadian ini dari catatan kejadian pertandingan.
*3. Cetak string berikut ke konsol: "Rata-rata, suatu kejadian terjadi setiap 9 menit" (ingat bahwa pertandingan memiliki waktu 90 menit)
*4. Ulangi kejadian tersebut dan catat ke konsol, tandai apakah itu di babak pertama atau babak kedua (setelah 45 menit) pertandingan, seperti ini:
[BABAK PERTAMA] 17: ⚽️ GOL

SEMOGA BERUNTUNG 😀
*/

const gameEvents = new Map([
  [17, "⚽️ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽️ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽️ GOAL"],
  [80, "⚽️ GOAL"],
  [92, "🔶 Yellow card"],
]);

//# 1
// const events = new Set(gameEvents.values());
const events = [...new Set(gameEvents.values())]; // convert to array
console.log(events);

//# 2
gameEvents.delete(64);
console.log(gameEvents);

//# 3
console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);

const time = [...gameEvents.keys()].pop()
console.log(time); 
console.log(
  `An event happened, on average, every ${time / gameEvents.size} minutes`
);

//# 4
const goals = gameEvents.values('⚽️ GOAL')
console.log(goals);

for (const [min , event] of gameEvents) {
  const half = min <= 45 ? 'FIRST' : 'SECOND'
  console.log(`[${half}] : ${min} ${event}`);
  
}


//# BONUS : mencari hanya untuk goal saja
for (const [min, event] of gameEvents) {
  if (event.includes("GOAL")) {
    console.log(`${min}: ${event}`);
  }
}
