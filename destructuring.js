// Array Destructure
let numbers = [34, 23, 12, 43, 54];
// console.log(numbers[0]);
// console.log(numbers[1]);
// console.log(numbers[2]);
// console.log(numbers[3]);
// console.log(numbers[4]);
// console.log(numbers[5]);
// console.log(numbers);

let [num1, num2, ...z] = numbers;
console.log(z);
// console.log(num2);
// console.log(num3);
// console.log(num4);
// console.log(num5);


// swapping destructuring 

let a = 10, b = 20; 
[a, b] = [b,a];
console.log(a, b);

// object Destructuring 

const studentInfo = {
    id: 101,
    fullName : 'MD Nur Hasan',
    gap: 4.42
}; 
// console.log(studentInfo.fullName);
// console.log(studentInfo.gap);
// console.log(studentInfo.id);

const {id, fullName} = studentInfo
console.log(id);
console.log(fullName);

//Nested Object Destruct

const teacherinfo = {
    subject: 'Bangla',
    period: 4,
    quali: 'BA',
    skills :{
        singing: 'superv'
    }
};

const {subject, skills} = teacherinfo;
console.log(skills.singing);


const students = (id, name) =>{
    console.log(id, name);
}

const student = {
    id: 101, 
    name : "MD Nur Hasan",
    gap: 3.43
};
students(student);




