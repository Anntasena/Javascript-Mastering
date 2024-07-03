const friends = [`michael`, `steven`, `peter`];

// Method push => menambah elemen ke akhir array
const newLength = friends.push(`jay`);
console.log(friends); // [ 'michael', 'steven', 'peter', 'jay' ]
console.log(newLength); // 4

// Method unshift => menambah element di awal array
friends.unshift(`john`)
console.log(friends); // [ 'john', 'michael', 'steven', 'peter', 'jay' ]

// Method pop => menghapus elemen di akhir array
friends.pop() // kita tidak perlu memasukan arguman apapun, karna tidak perlu informasi yang diperlukan untuk menghapus elemen terakhir
const popped = friends.pop() // cara untuk tau elemet apa yang di hapus

console.log(popped); // peter
console.log(friends); // [ 'john', 'michael', 'steven' ]
console.log(friends.length); // 3

// Mehotd shift => menghapus elemen di awal array
friends.shift() // tidak perlu memasukan arguman apapun, karna menghapus tidak perlu informasi
console.log(friends); //[ 'michael', 'steven' ]

// Method indexOf => memberi tahu posisi elemen tertenu dalam array
console.log(friends.indexOf(`steven`)); // 1
console.log(friends.indexOf(`michael`)); // 0
console.log(friends.indexOf(`bob`)); // -1 => elemen yang tidak ada akan dihitung -1
console.log(friends.indexOf(`ardi`)); // -1 

// Method includes => memeberi tahu apa elemen ada atau tidak di dalam array
friends.push(10)
console.log(friends.includes(`steven`)); // true
console.log(friends.includes(`bob`)); // false
console.log(friends.includes(`10`)); // false => karna ini method ini menggunakan strict mode
console.log(friends.includes(10)); // true

// Method include dapat digunakan sebagai parameter conditional karna valuenya boolean
if (friends.includes(`peter`)) {
    console.log(`You have friend called peter`);
} else {
    console.log(`you dont have friend called peter`);
}


