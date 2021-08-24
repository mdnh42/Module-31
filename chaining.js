//Declare variable based on the name of an object property; 

const myObject ={
    x:2, 
    y: 50,
    z: 600,
    a: 25,
    b:68
};

const {x, y, z, a, b} = myObject;
console.log(x, y, z, a, b);

// Destructuring 

const [p, q] = [45, 23, 34,34,43,34]; 
console.log(p, q);


const [best, falto] = ['momotaj', 'poroshi'];
console.log(best, falto);

const {sky, color, soil, money} = { sky: 'blue', soil: 'mitti', color: 'red', money: 50};





const company = {
    name: 'GP', 
    ceo: {
        id: 1, 
        name: 'ajmol', 
        food: 'Fuchka',
    },
    web: {work: 'website development', 
        employee: 22, 
        framework: 'react',
        pro: {
            first: 'html',
            second: 'js'
        }
    }
};
console.log(company.web?.pro?.third?.a);
