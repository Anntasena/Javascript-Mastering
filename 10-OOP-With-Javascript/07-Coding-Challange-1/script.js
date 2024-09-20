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

// console.log(car1);
// console.log(car2);

// car1.accelerate();

// carInfo(car1);

// console.log(`${car1.brand}: accelerate -> ${car1.accelerate()}`);
// console.log(`${car1.brand}: brake -> ${car1.brake()}`);

car1.accelerate();
car1.accelerate();
car1.accelerate();
car1.brake();
car1.accelerate();
