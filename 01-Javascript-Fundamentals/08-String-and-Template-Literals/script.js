const firstName = "Syahrin";
const job = "cashier"
const birthYear = 1998
const year = 2024 

const syahrin = "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!"
console.log(syahrin);

const syahrinNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!!!`
console.log(syahrinNew);
console.log(`Just a regular string....`);
// Banyak developer yang mulai menggunakan backtics untuk semua string

// multiple line string

// menggunakan petik 2 ""
console.log("String with \n\
  multiple \n\
  line");

// menggunakan backtick
console.log(`String with
  multiple
  line backtick`);