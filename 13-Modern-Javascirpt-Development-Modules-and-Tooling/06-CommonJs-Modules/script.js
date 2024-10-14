/*
! commonJS Modules
? commonJS modules hampir dipakai disemua keberadaannya, jadi beru2 ini module ES benar2 diimplemementasikan di Node.js
? Jadi semua module yang dapat kita gunakan dalam kode kita sendiri, masih menggunakan sistem commonJS module
? Alesannya karna "npm" menajadi standar respository hampir disemua dunia javascript 
*/

// // IFFE function
// const ShoppingCart2 = (function () {
//   const cart = [];
//   const shoppingCost = 10;
//   const totalPrice = 237;
//   const totalQuantity = 23;

//   const addToCart = function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(
//       `${quantity} ${product} added to cart (shipping cost is ${shoppingCost})`
//     );
//   };

//   const orderStock = function (product, quantity) {
//     console.log(`${quantity} ${product} order from supplier`);
//   };

//   return {
//     addToCart,
//     cart,
//     totalPrice,
//     totalQuantity,
//   };
// })();

// // Test data
// // apapun yang tidak di return tidak bisa di akses
// ShoppingCart2.addToCart("Apples", 10); // 10 Apples added to cart (shipping cost is 10)
// ShoppingCart2.addToCart("Yogurt", 12); // 12 Yogurt added to cart (shipping cost is 10)
// console.log(ShoppingCart2.cart); // (2) [{…}, {…}]
// console.log(ShoppingCart2.shoppingCost); // undefined

/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

// ini tidak akan berkerja dibrowser tetapi bekerja di node.js
// //@ EXPORT
// export.addToCart =function (product, quantity) {
// cart.push({ product, quantity });
// console.log(
//     `${quantity} ${product} added to cart (shipping cost is ${shoppingCost})`
//   );
// };

// //@ IMPORT
// const { addToCart } = require('./shoppingCart.js')
