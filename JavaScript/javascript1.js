
let arr=[1,2,3,4,5];
arr.push(6);
arr.sort().reverse().forEach(element => {console.log(element);});

let person={
    name:"Avishek",
    age:26
}
console.log(person);

function Student(name,age,address){
    this.name=name;
    this.age=age;
    this.address=address;
}

const student=new Student("Avishek",26,"Barasat");
console.log(student);

class Employee{
    constructor(name,age,address){
        this.name=name;

    }
}
class Salary extends Employee{
    
}