/* Write your code below. Good luck! 🙂 */

const bill = 275;
const tip = bill < 300 && bill > 50 ? (15 / 100) * bill : (20 / 100) * bill;

console.log(bill < 300 && bill > 50);
console.log(`The bill was ${bill}, the tip was ${tip} and the total value ${bill + tip}`);
