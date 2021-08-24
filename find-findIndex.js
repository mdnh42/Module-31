// Find () & findIndex()

// find method, first element dibe array teke with condition ;
/* let numbers = [14, 2, 3, 23, 54, 64, 65, 76, 86, 31, ]; 
let firstElement = numbers.find(x => x%2 === 0);
console.log(firstElement); */


let nums = [34, 23, 1, 43, 53, 53];
const evenNumber = (value, index, array) =>{
    if(value%2 === 0){
        return value; 
    }

}

let firstEventnumeber = nums.find(evenNumber);
console.log(firstEventnumeber);
// findIndex, index return korbe with condition 



