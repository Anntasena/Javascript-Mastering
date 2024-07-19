//! Perbedaan primitives vs objects
/*
! Review: Primitive, object  and the javascript engine

# PRIMITIVES (Primitive Types)
*-> Number
*-> String
*-> Boolean
*-> Undefined
*-> Null
*-> Symbol
*-> BigInt

# OBJECTS (Reference Types)
*-> Object literal
*-> Arrays
*-> Function
*-> Many more

# JS Engine
*-> Call Stack ===> tempat function dijalankan
*-> Heap ===> tempat menyimpan object di memori

? Cara kerja
@ -> Reference Types akan di simpan di "heap"
@ -> Primitive Types akan di simpan di "call stack"
*/


//! Examples: PRIMITIVE vs REFERENCE value
//# Scenarion 1 (PRIMITIVE)
let age = 25;
let oldAge = age;
age = 26;
console.log(age); // 26
console.log(oldAge); // 25

//# Scenarion 2 (REFERENCE)
const me = {
  name: `syahrin`,
  age: 26,
};
const friend = me
friend.age = 22
console.log(`Friends:`, friend); // Fiends: { name: 'syahrin', age: 22 }
console.log(`Me:`, me); // Me: { name: 'syahrin', age: 22 }

//? Explaination:
/*
# Scenarion 1 (PRIMITIVE)
@------------------------CALL STACK--------------------------------
*------------------------------------------------------------------
* Identifier      Address             value
*------------------------------------------------------------------
* age              ooo1                25
* old age        age(0001)           age(25)
* age              0002                26
* me               0003          D30F(Referance)
* friend         me(0003)           me(D30F)   
*------------------------------------------------------------------
$ Kesimpulan: PRIMITIVE hanya mengubah Address bukan value

# Scenarion 2 (REFERENCE)
@------------------------------HEAP--------------------------------
*------------------------------------------------------------------
* Adress               value
*------------------------------------------------------------------
* D30F      {name: `Syahrin`, Age: 25} // TIDAK LAGI DIPAKAI
* D30F      {name: `Syahrin`, Age: 22}
*------------------------------------------------------------------
$ Kesimpulan: setiap kali menyalin sebuah object, sebenarnya hanya membuat variabel baru yang menunjuk ke object yang sama persis
*/