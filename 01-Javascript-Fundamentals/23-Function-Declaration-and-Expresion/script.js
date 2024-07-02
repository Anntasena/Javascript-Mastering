//////////// function declaration

function calcAge1(birthYear) {
    return 2024 - birthYear;
}
// variant 1
const age1 = calcAge1(1991);
// variant 2
console.log(calcAge1(1998));

//////////// function expression

const calcAge2 = function (birthYear) {
    return 2024 - birthYear;
};
// variant 1
const age2 = calcAge2(1999)

console.log(calcAge2(1994));

console.log(age1, age2);

// perbedaan declaration dan expression adalah saat memanggil
// declaration bisa di panggil sebelum function 
// expression baru bisa di panggil setelah function 
