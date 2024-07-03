///////////////////// Arrow function
const yearsUntilRetirementArrow = (birthYear, firstName) => {
    const age = 2024 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
};

console.log(`Arrow >> ${yearsUntilRetirementArrow(1998, "Syahrin")}`);

///////////////////// Regular Expression function
const yearsUntilRetirementRegularExpression = (birthYear, firstName) => {
    const age = 2024 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
};

console.log(`Regular Expression >> ${yearsUntilRetirementRegularExpression(1998, "Syahrin")}`);

//////////////////// Calling Function
const calcAge = function (birthYear) {
    return 2024 - birthYear
}

const yearsUntilRetirementCalling = (birthYear, firstName) => {
    const age = calcAge(birthYear)
    const retirement = 65 - age

    if (retirement >= 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement
    } else {
        console.log(`Hallo mr.${firstName}, you are ${age} years old you must have to retired`);
        return -1
    }
};

console.log(`Calling Function >> ${yearsUntilRetirementCalling(1980, "Syahrin")}`);
console.log(`Calling Function >> ${yearsUntilRetirementCalling(1920, "gibran")}`);
