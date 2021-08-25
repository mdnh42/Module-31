const numbers = [ 4, 6, 8, 10];
const output = [];

const doubleIt = number => number * 2;
for(const number of numbers){
    const reslut = doubleIt(number);
    output.push(reslut);
}
/* function doubleIt(number){
    return number * 2;
} */
console.log(output);


const digits = [5, 10, 15, 20];
const squers = [];
function sqr (digit){
    return digit * 2;
}

for(const digit of digits){
    const squersValue = sqr(digit);
    squers.push(squersValue);
}

console.log(squers);


const print = digits.map(doubleIt);

console.log(print);

