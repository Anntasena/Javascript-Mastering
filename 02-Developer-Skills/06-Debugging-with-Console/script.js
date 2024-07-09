"use strict";

const measureKelvin = function () {
    const measurement = {
        type: `temperature`,
        unit: `celcius`,
        // value: prompt(`Degree celcius:`),
    };
    const values = Number(measurement.value);

    const kelvin = values + 273;
    return kelvin;
};

console.log(measureKelvin());

// TIPS:
// 1. Identify
//  kita juga bisa menggunakan devtools dengan nama tab "source"