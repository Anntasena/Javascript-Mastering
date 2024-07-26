//! Coding Challenge #1

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
? Kami sedang membuat aplikasi taruhan sepak bola (soccer untuk teman-teman Amerika saya 😅)!

Misalkan kita mendapatkan data dari layanan web tentang permainan tertentu (di bawah). Dalam tantangan ini kita akan bekerja dengan data tersebut. Berikut tugas Anda:

*-> 1. Buat satu array pemain untuk setiap tim (variabel 'players1' dan 'players2')
*-> 2. Pemain pertama dalam array pemain mana pun adalah penjaga gawang dan yang lainnya adalah pemain lapangan. Untuk Bayern Munich (tim 1) buat satu variabel ('gk') dengan nama penjaga gawang, dan satu array ('fieldPlayers') dengan semua 10 pemain lapangan yang tersisa
*-> 3. Buat array 'allPlayers' yang berisi semua pemain dari kedua tim (22 pemain)
*-> 4. Selama pertandingan, Bayern Munich (tim 1) menggunakan 3 pemain pengganti. Jadi buatlah array baru ('players1Final') yang berisi semua pemain team1 asli plus 'Thiago', 'Coutinho' dan 'Perisic'
*-> 5. Berdasarkan objek game.odds, buat satu variabel untuk setiap odds (disebut 'team1', 'draw' dan 'team2')
*-> 6. Tulis sebuah fungsi ('printGoals') yang menerima sejumlah nama pemain (BUKAN array) dan mencetak masing-masing ke konsol, beserta jumlah gol yang dicetak secara total (jumlah nama pemain yang dimasukkan)
*-> 7. Tim dengan odds yang lebih rendah lebih mungkin menang. Cetak ke konsol tim mana yang lebih mungkin menang, TANPA menggunakan pernyataan if/else atau operator ternary.

@ DATA UJI UNTUK 6: Gunakan pemain 'Davies', 'Muller', 'Lewandowski' dan 'Kimmich'. Kemudian, panggil fungsi tersebut lagi dengan pemain dari game.scored

SEMOGA BERHASIL 😀
*/

//* 1
// const players1 = game.players[0];
// const players2 = game.players[1];
const [players1, players2] = game.players;
console.log(players1);
console.log(players2);

//* 2
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

//* 3
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

//* 4
const players1Final = [...players1, "Thiago", "Continho", "Perisic"];
console.log(players1Final);

//* 5
// const team1 = game.odds.team1;
// const draw = game.odds.x;
// const team2 = game.odds.team2;
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

//* 6
const printGoals = function (...players) {
  // console.log(`player: ${scored}, score: ${game.score}`);
  console.log(`${players.length} goals were scored`);
};
printGoals(...game.scored);
printGoals( 'Davies', ' Muller', ' Lewandowski')

//* 7
team1 < team2 && console.log(`Team ${game.team1} is more likely to win`);
team1 > team2 && console.log(`Team ${game.team2} is more likely to win`);
