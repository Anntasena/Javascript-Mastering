const me = [
    `Syahrin`,
    `Matlail`,
    2024 - 1998,
    `Student`,
    [`Michael`, `Peter`, `Steven`],
];

// looping backwards / pengulangan terbalik

for (let i = me.length - 1; i >= 0; i--) {
    console.log(me[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`--------Starting exercise ${exercise}`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(
            `Exercise ${exercise}: lifting weight repetition ${rep} 🏋️‍♀️🏋️‍♂️`
        );
    }
}
