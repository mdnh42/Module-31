// let & const variable not changing value;

const hubby = "omar sani";
console.log(hubby);
let phone = 'HTC';
console.log(phone);

phone = 'Samsng Galaxy S17';

console.log(phone);

//template string 

const myNotes = ` ${hubby}. text 1 text 1 text 1text 1text 1text 1text 1text 1text 1text 1 text 1 text 1text 1text 1text 1text 1text 1text 1text 1 text 1 text 1text 1text 1text 1text 1text 1text 1text 1 text 1 text 1text 1text 1text 1text 1text 1text 1text 1 text 1 text 1text 1text 1text 1text 1text 1text 1text 1 text 1 text 1text 1text 1text 1text 1text 1text 1text 1 text 1 text 1text 1text 1text 1text 1text 1text 1text 1 text 1 text 1text 1text 1text 1text 1text 1text 1text 1 text 1 text 1text 1text 1text 1text 1text 1text 1text 1 text 1 text 1text 1text 1text 1text 1text 1text 1text 1 text 1 text 1text 1text 1text 1text 1text 1text 1text 1 text 1 text 1text 1text 1text 1text 1text 1text 1`;

// console.log(myNotes);

//defult parameter 

function maxNumebr (array = []){
    const max = Math.max(...array);
    return max;

}

console.log(maxNumebr());

function text (str = ' '){
    const string = str;
    return str;

}

console.log(text());

// spreadOperator or three dots (...)


const myArray = [34, 23, 3, 42, 23];
console.log(...myArray);


// arrow function 

const squere = x => x *x;
console.log(squere(3));

const mul = (x, y) => {
    return    x * y;
};
console.log(mul(2,2));