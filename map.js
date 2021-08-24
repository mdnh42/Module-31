const numbers = [4, 3, 2, 4, 5, 6];

const doubleIt = number => number * 1;
const output = [];
for(const number of numbers){
    const result = number * 2;
    output.push(result);
    
}

// console.log(output);

/* function doubleOld(number){
    return number * 2;
}
 */
// console.log(function(23));

/* const doubleIt = number => number * 2;
console.log(doubleIt(2));

const func = num => num * 2;

console.log(func(3)); */

const myNums = [2, 3, 4, 5, 6, 7, 8];

const sumFunc = myNums => myNums * 2;
const output2 = [];
for(const myNum of myNums){
    const result = myNum * 2;
    output2.push(result);
    
}
// console.log(output2);


const output3 = myNums.map(myNums => myNums * 2);
console.log(output3);

const nums = [2, 3, 4, 5, 6];
const squers = nums.map(x => x *x );
console.log(squers);

