const myObject = {
    x:3, 
    y: 50,
    z: 600,
    a: 25,
    b: 68
};

const {x, y, z, a, b} = myObject;
console.log(x, y, z, a, b);


const [p, q] = [45, 37, 91, 56, 23];
console.log(p, q);

const [best, falto] = ['Porshi', 'Mousi'];
console.log(best, falto);

const {sky, color, money} = {sky: 'blue', soil: 'matti', color: 'red', money: 500};

console.log(sky);
console.log(color);
console.log(money);



const myCompany = {
    companyName: 'NH Softwares',
    ceo: {
        name: 'MD Nur Hasan',
        designation: "Ceo",
        salary: 334343,
    },
    teamMember: {
        name: 'Member1'
    },
    workType: {
        software: {
            items: {
                item1: 'html',
                item2: 'css',
                item3: 'js'
            }
        }
    }
}
console.log(myCompany.workType.software?.items?.afdk?.item1);