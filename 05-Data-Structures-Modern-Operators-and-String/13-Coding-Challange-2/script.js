//! Coding Challenge #2

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

/* 
? Mari kita lanjutkan dengan aplikasi taruhan sepak bola kita!

*-> 1. Lakukan pengulangan pada array game.scored dan cetak setiap nama pemain ke konsol, beserta nomor gol (Contoh: "Gol 1: Lewandowski")
*-> 2. Gunakan pengulangan untuk menghitung peluang rata-rata dan catat di konsol (Kita sudah mempelajari cara menghitung rata-rata, Anda dapat memeriksanya jika tidak ingat)
*-> 3. Cetak 3 peluang ke konsol, tetapi dengan format yang bagus, persis seperti ini:
Peluang kemenangan Bayern Munich: 1,33
Peluang seri: 3,25
Peluang kemenangan Borrussia Dortmund: 6,5
Dapatkan nama tim langsung dari objek permainan, jangan hardcode (kecuali untuk "seri"). PETUNJUK: Perhatikan bagaimana peluang dan objek permainan memiliki nama properti yang sama 😉

BONUS: Buat objek bernama 'scorers' yang berisi nama pemain yang mencetak gol sebagai properti, dan jumlah gol sebagai nilainya. Dalam permainan ini, akan terlihat seperti ini:
{
Gnarby: 1,
Hummels: 1,
Lewandowski: 2
}

SEMOGA BERHASIL 😀
*/

//* 1
for (const [goal, player] of Object.entries(game.scored)) {
  console.log(`GOAL ${parseInt(goal) + 1}: ${player}`);
}

//* 2
const odds = Object.values(game.odds);
let total = 0;
for (const odd of odds) {
  total += odd;
}

const average = total / odds.length;
console.log(average);

//* 3
// console.log(`Odds win of ${game.team1}: ${game.odds.team1}`);
// console.log(`Odds draw of ${game.odds.x}`);
// console.log(`Odds win of ${game.team2}: ${game.odds.team2}`);

for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === "x" ? "draw" : `Victory ${game[team]}`;
  console.log(`Odd of ${teamStr} ${odd}`);
}

//* 4
