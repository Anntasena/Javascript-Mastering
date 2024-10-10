//$ Exporting Module
console.log("Exporting Module");

const shippingCost = 10;

export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};
export const cart = [];

const totalPrice = 237;
const totalQuantity = 23;
const totalProduct = 10;

export { totalPrice, totalQuantity };

// menbubah nama saat di export
export { totalProduct as tp };

//# EXPORT DEFAULT -> tanpa variable
export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
}
