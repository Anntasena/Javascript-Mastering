// falsy value adalah nilai yang tidak sepenuhnya false, tetapi akan menjadi false ketika kita mencoba mengubahnya menjadi boolean

// 5 falsy values
/* 
> 0  -zero
> "" -empty string
> undefined -undefined datatype
> null -null datatype
> NaN -NuN datatype
*/

console.log(Boolean(0)); // false
console.log(Boolean("")); // false
console.log(Boolean(NaN)); // false
console.log(Boolean(null)); // false

// dalam praktek nyata Boolean() ini hampir tidak pernah digunakan

const money = 0

if (money) {
    console.log(`Don't spend it all!`);
} else {
    console.log(`You should get a job!`);
}

let height
if (height) {
    console.log(`YEY! height is defined`);
} else {
    console.log(`height is UNDEFINED`);
}