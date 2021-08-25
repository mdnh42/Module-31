class Support {
    name; 
    designation = 'Support Web Dev';
    address = 'BD';
    constructor(name){
        this.name = name;
    }
    startSession(){
        console.log(aamir.this, 'start a support session')
    }
};

const aamir = new Support('Amir');
const salman = new Support('Salman');
console.log(salman);
console.log(aamir);
aamir.startSession();

class Teacher {
    name;
    subject;
    schoolName = "High School";
    constructor(name, subject){
        this.name = name;
        this.subject = subject;
    }
}

const profSoyeb = new Teacher('Prof. Soyeb Chy', 'Math');
// console.log(profSoyeb);
const proIstiak = new Teacher ('Prof. Istiak chy', 'Chemistry');
// console.log(proIstiak);