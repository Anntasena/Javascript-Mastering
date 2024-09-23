"use strict";

// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/

// Object
const Car = function (brand, speed) {
  this.brand = brand;
  this.speed = speed;
};

// Prototype
Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.brand} moving at ${this.speed} km/h`);
};

Car.prototype.brake = function (speed) {
  this.speed -= 5;
  console.log(`${this.brand} moving at ${this.speed} km/h`);
};

// Function
const carInfo = function (car) {
  const curSpeed = car.accelerate() - car.brake();
  console.log(`${car.brand} going at ${curSpeed} km/h`);
};

const car1 = new Car("BMW", 120);
const car2 = new Car("Mercedes", 95);

// car1.accelerate();
// car1.accelerate();
// car1.accelerate();
// car1.brake();
// car1.accelerate();

// Coding Challenge #2

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀
*/

class CarClass {
  constructor(brand, speed) {
    this.brand = brand;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.brand} moving at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.brand} moving at ${this.speed} km/h`);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  // saya menagamali kesulitan disini
  set speedUS(spd) {
    console.log(spd);
    this.speed = spd * 1.6;
  }
}

const ford = new CarClass("Ford", 120);

console.log(ford.speedUS); //

ford.speedUS = 100;
console.log(ford.speed);

//# Task 4
const bmw = new CarClass("BMW", 150);

// Eksperimen dengan accelerate dan brake
bmw.accelerate(); // Kecepatan menjadi 160 km/h
bmw.brake(); // Kecepatan menjadi 155 km/h
bmw.accelerate(); // Kecepatan menjadi 165 km/h

// Menggunakan getter untuk mendapatkan kecepatan dalam mph
console.log(`BMW is moving at ${bmw.speedUS} mi/h`);

// Menggunakan setter untuk mengatur kecepatan dalam mph
bmw.speedUS = 100; // Mengatur kecepatan menjadi 100 mi/h, konversi ke km/h
console.log(`BMW is now moving at ${bmw.speed} km/h`);

// Lanjutkan eksperimen dengan accelerate dan brake
bmw.accelerate(); // Kecepatan bertambah lagi
bmw.brake(); // Kecepatan berkurang
