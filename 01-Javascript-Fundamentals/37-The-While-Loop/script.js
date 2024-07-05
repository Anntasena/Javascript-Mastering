// // for loop
// for (let rep = 1; rep <= 5; rep++) {
//     console.log(`Lifting weights repetititon ${rep} 🏋️‍♀️🏋️‍♀️`);
// }
// // while loop
// let rep = 1;
// while (rep <= 5) {
//     console.log(`Lifting weights repetititon ${rep} 🏋️‍♂️🏋️‍♂️🏋️‍♂️`);
//     rep++;
// }

// while loop lebih fleksibel daripada for loop
// while loop bisa berjalan tanpa harus berhubungan dengan counter apapun sama sekali

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
    console.log(`You Roll: ${dice} 🎲`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) {
        console.log(`You Roll: 6 🎲`);
    }
}
