const fish = {
    name: 'King Hilsha', 
    id: 234, 
    weight: '3kg',
    price: 90000,
    call: '012123123123',
    address: 'Chandpur',
    dress: 'silver'
};
/* price, call, address, dress};
console.log(fish.address);
console.log(fish.id);
console.log(fish.address);
console.log(fish.address);
console.log(fish.address);
console.log(fish.address); */
/* const{name, id, weight} = fish;
    console.log(name);
    console.log(id);
 */
    /* const person = {
        name: "MD Nur Hasa",
        father: "Late Mozaffar Ahmed",
        mother: "Nasima",
        phone: '19020934834',
        address: "Chakaria, COx's Bazar"

    };

    const {name, father, mother, phone, address} = person;

    console.log(`${name} ${father}`);

    console.log(person.address); */



    const company = {
        name: 'GP', 
        ceo: {
            id: 1, 
            name: 'ajmol', 
            food: 'Fuchka',
        },
        web: {work: 'website development', 
            employee: 22, 
            framework: 'react'
        }
    };

    const {name, ceo, web} = company;

    console.log(name);
    console.log(ceo);
    console.log(web);

    const {id, food}  = company.ceo;
    
    console.log(id);
    console.log(web);
    

