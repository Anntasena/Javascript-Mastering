/*
! COMMNAD LINE
? Sebagai developer sangat penting untuk mempelajari dan mengetahui command line atau command prompt
? Hal pertama yang perlu kita ketahui tentang command line adalah kita selalu berada dalam folder

$ PERINTAH COMNAND LINE
windows
*-> dir => "directory"
*-> cd => "change directory"
*-> .. => "up directory tree" [gunakan 'tab' untuk menyelesaikan semua karakter folder / auto complete]
*-> ../.. => "up 2 level directory tree"
*-> mkdir => "make directori" [membuat folder]
*-> code "nama file dan extensionnya" => membuat file
*-> live-server.cmd => membuka folder / file menggunakan live-server
*-> ctrl + C => memberhintikan prosses
*-> del => delete
*-> mv [nama file] => move
*-> rmdir => remove directory [hanya berlaku untuk directory kosong]


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
