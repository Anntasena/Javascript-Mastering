const day = `friday`;

// Swith bisa bekerja tanpa logika
switch (day) {
    case `monday`: // day === `monday`
        console.log(`plan to study javascript`);
        break;
    case `tuesday`:
        console.log(`workout`);
        break;
    case `wednesday`:
    case `thursday`:
        console.log(`study from coffe shop`);
        break;
    case `friday`:
        console.log(`playing mobile legend`);
        break;
    case `saturday`:
    case `sunday`:
        console.log(`playing with friends`);
        break;
    default:
        console.log(`not a valid day!`);
}

if (day === `monday`) {
    console.log(`plan to study javascript`);
} else if (day === `tuesday`) {
    console.log(`workout`);
} else if (day === `wednesday` || day === `thursday`) {
    console.log(`study from coffe shop`);
} else if (day === `friday`) {
    console.log(`playing mobile legend`);
} else if (day === `saturday` || day === `sunday`) {
    console.log(`playing with friends`);
} else {
    console.log(`not a valid day!`);
}
