//$ Importing Module
//# [TIPS] -> JANGAN MENCAMPUR EXPORT & EXPORT DEFAULT KARNA AKAN MENAMBAH KERUMITAN
console.log("Importing module");

import add from "./shoppingCart.js";
import { cart } from "./shoppingCart.js";

// add("pizza", 2);
// add("bread", 4);
// add("apples", 5);

// console.log(cart);

//# TOP LEVEL AWAIT, TIDAK MEMERLUKAN ASYNC FUNCTION
//const res = await fetch("https://jsonplaceholder.typicode.com/posts");
// const data = await res.json();
// console.log(data);
// console.log("Something");

const getLastPost = async function () {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return { title: data.at(-1).title, text: data.at(-1).body };
};

//* cara ke-1
// Not very clean
const lastPost = getLastPost();
// console.log(lastPost); // hasilnya promise perlu diolah
lastPost.then((last) => console.log(last));

//* cara ke-2
// Best practice
const lastPost2 = await getLastPost();
console.log(lastPost2);
