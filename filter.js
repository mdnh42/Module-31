const numebrs = [3, 3, 5, 5, 6, 3, 6, 7, 9, 54];
const bigNumbers = numebrs.filter(number => number > 20);
console.log(bigNumbers);
const smallNumber = numebrs.filter(number => number < 10);
console.log(smallNumber);


const products = [
    {name: 'Water Bottle', price: 50, color: 'Yellow'},
    {name: 'Mobile Phone', price: 15000, color: 'black'},
    {name: 'Smart Watch', price: 3000, color: 'black'},
    {name: 'Sticky note', price: 30, color: 'pink'},
    {name: 'Water Glass', price: 15, color: 'pink'},
 ];

 const expensive = products.filter(product => product.price > 100);
//  console.log(expensive);

 const blackItem = products.filter(product => product.color == "pink");
//  console.log(blackItem);

 const whiteItem = products.find(product => product.color = 'pink');
 console.log(whiteItem);