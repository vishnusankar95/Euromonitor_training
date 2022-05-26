interface person{
firstName : string,
lastName? : string
}

function fullname (person : person){
    console.log(`${person.firstName} ${person.lastName}`)
}

let p ={
    firstName : 'Bruse',
    lastName : 'Wayne'
}

fullname(p);


class Employee {
   protected employeeName : string

    constructor(name:string){
        this.employeeName = name;
    }

    greet(){
        console.log(`Welcome ${this.employeeName}`)
    }
}

let emp1 = new Employee('Batman')
emp1.greet();

class Manger extends Employee{
    constructor (managerName : string){
        super(managerName)
    }
    greetmanager(){
        console.log(`Manager at Batman Service`)
    }
}

let m1 = new Manger('Alfred')
m1.greet();
m1.greetmanager()