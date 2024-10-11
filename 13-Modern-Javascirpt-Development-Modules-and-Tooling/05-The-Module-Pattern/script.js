/*
! MODULE PATTERN
? Tujuan Module pattern adalah untuk mengekapsulasi fungsionalitas, mempunyai private data, dan mengekspos public API 
? Cara terbaik untuk mencapai tujuan tersebut, hanya dengan menggunakan function (IFFE)
*/

// IFFE function
const ShoppingCart2 = (function () {
  const cart = [];
  const shoppingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(
      `${quantity} ${product} added to cart (shipping cost is ${shoppingCost})`
    );
  };

  const orderStock = function (product, quantity) {
    console.log(`${quantity} ${product} order from supplier`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

// Test data
// apapun yang tidak di return tidak bisa di akses
ShoppingCart2.addToCart("Apples", 10); // 10 Apples added to cart (shipping cost is 10)
ShoppingCart2.addToCart("Yogurt", 12); // 12 Yogurt added to cart (shipping cost is 10)
console.log(ShoppingCart2.cart); // (2) [{…}, {…}]
console.log(ShoppingCart2.shoppingCost); // undefined
