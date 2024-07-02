// arrow function hanyalah bentuk khusus dari function expression yang lebih pendek dan karenanya lebih cepat untuk di tulis

//// expression
const calcAge1 = function (birthYear) {
    return 2034 - birthYear;
};

//// arrow
const calcAge2 = (birthYear) => 2024 - birthYear;
const age2 = calcAge2(1998);
console.log(age2);

const yearsUntilRequirement = (birthYear, firstName) => {
    const age = 2024 - birthYear;
    const retirement = 65 - age;
    // return retirement
    return `${firstName} is retaires in ${retirement} years`;
};

console.log(yearsUntilRequirement(1998, `Syahrin`));
console.log(yearsUntilRequirement(2001, `rin`));
