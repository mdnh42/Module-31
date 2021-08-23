const myArray = [34, 23, 23, 12, 43, 12, 43];
myArray.unshift(34);
console.log(myArray);

function getSum (a, b=9){
    return a+b;
}

console.log(getSum(2, 7));

const y = x => x * x;
const x = y(5);
console.log(x);

const name ='Hero';
const greetings = `Welcome Home !${name}`;
// 'Welcome Home!'+ '' + name;

console.log(greetings);

// const myFunc => console.log('Nayok!');

// const  division=  num1, num2 => console.log(num1 /num2)
// division(4,2);


const cars = ['toyato', 'honda', 'mercedes'];
const newCars = [...cars, 'Ferrari'];
console.log(newCars);