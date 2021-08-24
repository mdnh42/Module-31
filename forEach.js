/* var numbers = [3, 3, 23, 2,1 , 43];
for(let x = 0; x<numbers.length; x++){
    console.log(numbers[x]);
} */
/* 
var numbers = [10, 12, 12, 34];
numbers.forEach(myFunction);

function myFunction(x) {
    console.log(x);
} */

/* let myText = ['MD', 'Nur', "Hasan"];
myText.forEach(function(string){
    console.log(string);
}); */

let numbers = [2, 3, 4, 5, 6];
let squersNumebr = [];
numbers.forEach(function(num){
    squersNumebr.push(num*num);
    
})
console.log(squersNumebr);

let digit = [2.00, 4, 6, 8, 10];
let float = [];
digit.forEach(function(num){
    float.push(parseFloat(num));
})

console.log(float);

let sumNumber = [3, 3, 4, 5, 5, 6, 8];
let sum = [];
sumNumber.forEach(function(x, index, arr){
    arr[index] = x + 5; 
    
})
console.log(sumNumber);