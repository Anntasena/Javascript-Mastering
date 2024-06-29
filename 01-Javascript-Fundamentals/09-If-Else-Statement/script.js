// const age = 19
// const isOldEnough = age >= 18
// if(isOldEnough) {
  //   console.log(`Sarah can start driving lisence 🚗`);
  // }
  
const age = 15
if(age >= 18) {
  console.log(`Sarah can start driving lisence 🚗`);
} else {
  const yearsLeft = 18 - age
  console.log(`Sarah will drive ${yearsLeft} years again`);
}

// if else disebut control structure 

const birthYear = 1994

let century
if (birthYear <= 2000) {
  century = 20 // redefine 
} else {
  century = 21 // redefine
}

console.log(typeof century);