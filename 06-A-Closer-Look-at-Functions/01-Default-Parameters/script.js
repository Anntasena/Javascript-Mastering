"use strict";

const bookings = [];

const createBooking = function (
  flightsNum,
  numPassengers = 1,
  price = 1000 * numPassengers
) {
  // Modern way setting default parameter
  // Old ways setting parameter : before ES6
  // numPassengers = numPassengers || 1;
  // price = price || 199;

  const booking = {
    flightsNum,
    numPassengers,
    price,
  };

  console.log(booking);
  bookings.push(booking);
};

createBooking("LA123"); // {flightsNum: 'LA123', numPassengers: 1, price: 1000}
createBooking("Boeing11", 15, 14000); // {flightsNum: 'Boeing11', numPassengers: 15, price: 14000}
createBooking("AirBus", 30); // {flightsNum: 'AirBus', numPassengers: 30, price: 30000}

// skip numPassengers : using undefined
createBooking("LH123", undefined, 2300); // {flightsNum: 'LH123', numPassengers: 1, price: 2300}
