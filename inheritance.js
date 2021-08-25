/* 
inheritance = উত্তরাধিকার;
*/
class TeamMemebr {
    name;
    designation = 'Student Care Web Dev';
    address = 'BD';
    constructor(name, address){
        this.name = name;
        this.address = address;
    }
}

class Support extends TeamMemebr{
   
    designation = 'Support Web Dev';
    address = 'BD';
    constructor(name){
        this.name = name;
    }
    startSession(){
        console.log(this.name, 'start a support session')
    }

};

const aamir = new Support('Amir');
const salman = new Support('Salman');
console.log(salman);
console.log(aamir);
aamir.startSession();


class StudentCare {
    name;
    designation = 'Student Care Web Dev';
    address = 'BD';
    constructor(name, address){
        this.name = name;
        this.address = address;
    }
    buildARoutine(student){
        console.log(this.name, 'Build a Routine for ', student)
    }
}

const alia = new StudentCare('Alia Bhatt', 'Mumbai');
console.log(alia);

class NepTuneDeve {
    name;
    designation = 'Student Care Web Dev';
    address = 'BD';
    constructor(name, address){
        this.name = name;
        this.address = address;
    }
    buildARoutine(version){
        console.log(this.name, 'release version ', student)
    }
}