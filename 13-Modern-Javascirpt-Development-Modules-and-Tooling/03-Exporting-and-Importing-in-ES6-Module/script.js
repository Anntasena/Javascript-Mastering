//$ Importing Module
// import { addToCart, totalQuantity } from "./shoppingCart.js";
//@import "./shoppingCart"; = tanpa extension sebenarnya tetap berfungsi

// import { totalPrice as price } from "./shoppingCart.js";
//@ totalPrice as price = mengubah nama saat import

// import { tp } from "./shoppingCart.js";

// import * as ShoppingCart from "./shoppingCart.js";
//@ import * as = meninport semua dari file shoppingCart

console.log("Importing module");
// // addToCart("bread", 5);
// console.log(price, totalQuantity);
// console.log(tp);

// ShoppingCart.addToCart("bread", 5);
// console.log(ShoppingCart.totalPrice);
// console.log(ShoppingCart);

//# combination import
// import add, {
//   addToCart,
//   totalQuantity,
//   totalPrice as price,
//   tp,
// } from "./shoppingCart.js";

// add("pizza", 2);
// console.log(totalQuantity);
// console.log(price);
// console.log(tp);

import add from "./shoppingCart.js";
import { cart } from "./shoppingCart.js";

add("pizza", 2);
add("bread", 4);
add("apples", 5);

console.log(cart);

//$ [TIPS] -> JANGAN MENCAMPUR EXPORT & EXPORT DEFAULT KARNA AKAN MENAMBAH KERUMITAN
