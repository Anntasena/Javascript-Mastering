const meObject = {
    firstName: `Syahrin`,
    lastName: `Matlail`,
    birthYear: 1998,
    job: `student`,
    friends: [`Michael`, `Peter`, `Steven`],
    hasDriversLicense: false,

    // calcAge: function (birthYear) {
    //     return 2024 - birthYear;
    // },

    // this => adalah nama pengganti objek jika, properti di olah di body objek
    // calcAge: function () {
    //     console.log(this); // berisi semua properti objek
    //     return 2024 - this.birthYear;
    // },

    calcAge: function () {
        this.age = 2024 - this.birthYear;
        return this.age;
    },

    // getSummary: function () {
    //     if (this.hasDriversLicense) {
    //         return `${this.firstName} is a ${this.calcAge()}-years old ${this.job}, and he has a driver's license`;
    //     } else {
    //         return `${this.firstName} is a ${this.calcAge()}-years old ${this.job}, and he does not have a driver's license`;
    //     }
    // },

    // Best practice
    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-years old ${this.job}, and he has ${this.hasDriversLicense ? `a` : `no`} driver's license`;
    },
};
// function yang dilampirkan ke suatu objek disebut method

// console.log(meObject.calcAge());
// console.log(meObject[`calcAge`]());
// console.log(meObject.age);

console.log(meObject.getSummary());
