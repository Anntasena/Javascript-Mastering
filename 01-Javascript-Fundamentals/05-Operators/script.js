// Operatorm aritmatika

const yearNow = 2024
const ageSyahrin = yearNow - 1998;
const ageMamat = yearNow - 1994;
console.log(ageSyahrin, ageMamat);
console.log(ageSyahrin + ageMamat);
console.log(ageSyahrin * 2, ageSyahrin / 10, 2 ** 3);

const firstName = "Syahrin"
const lastName = "Matlail"
console.log(firstName + lastName);
console.log(firstName + " " + lastName);

// assigment operator
let x = 10 + 5 // 15
x += 10 // x = [x + 10 = 25]
x *= 4 // x = [x + 4 = 100]
x++ // x = [x + 1 = 101]
console.log(x); 

// comparison operator
console.log(ageSyahrin > ageMamat); // >, <, >=, <= 
console.log(ageSyahrin >= 26);

const isFullAge = ageSyahrin >= 26 // isFullAge menjadi boolean

console.log(yearNow - 1998 < yearNow -1994);

// kita bisa mendeklarasikan 2 variable sekaligus

// Operator presedance = adalah tingkat operator yang akan di hitung dulan

let a, b
a = b = 25 - 10 - 5 // a = b = 10
console.log(a, b);


const averageAge = (ageSyahrin + ageMamat) / 2
console.log(ageSyahrin, ageMamat, averageAge);