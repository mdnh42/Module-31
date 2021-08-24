/* const friends = ['MD Nur Hasan', 'Rasel', 'Arefin', 'Taslima'];
const fLength = friends.map(friend => friend.length);
console.log(fLength); */


const products = [
   {name: 'Water Bottle', price: 50, color: 'Yellow'},
   {name: 'Mobile Phone', price: 15000, color: 'black'},
   {name: 'Smart Watch', price: 3000, color: 'black'},
   {name: 'Sticky note', price: 30, color: 'pink'},
   {name: 'Water Glass', price: 15, color: 'pink'},
];

const productName = products.map(product => product.name);

console.log(productName);

const productPrice = products.map(price => price.price);
console.log(productPrice);

const color = products.map(color => color.color);
console.log(color);