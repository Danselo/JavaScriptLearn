//
class Person{
    static counterPerson =0;
    constructor (name,surname,age){
        this.name = name;
        this.surname = surname;
        this.age = age;
         this._idPerson = ++Person.counterPerson;
     
        console.log('The counter Person is: '+ Person.counterPerson);
    }
    //THIS IS THE IDENTIFIER 
    get idPerson(){
        return this._idPerson;

    }
    get name(){
        return this._name;

    }
    get surname(){
        return this._surname;
   }
   get age(){
    return this._age;

   }
   set name(name){
    this._name = name;

   }
   set surname(surname){
    this._surname = surname;

   }
   set age(age){
    this._age = age;

   }
   
   toString(){
    return `${this._idPerson}  ${this._name}  ${this._surname}  ${this._age}`;
   }
}

//employe class
class Employee extends Person {
    static employeeCount = 0;
    constructor(name,surname,age,salary){
        super(name,surname,age)
        this._salary = salary;
        this._idEmployee = ++Employee.employeeCount;
    }
    get idEmployee(){
        return this._idEmployee;

    }
    get salary(){
        return this._salary;

    }
    set salary(salary){
        this._salary = salary;

    }
    toString(){
        return `${super.toString()} ${this._idEmployee} ${this._salary}`;
    }
};

class Client extends Person{
    static counterClients = 0;
    constructor(name,surname,age,regiterdate){
        super(name,surname,age);
        this._regiterDate = regiterdate;
        this._idClient = ++Client.counterClients;
    }
    get idClient(){
        return this._idClient;
u
    }
    get regiterdate(){
        return this._regiterdate;

    }
    set regiterdate(regiterdate){
        this._regiterdate = regiterdate;


    }
   toString(){
    return `${super.toString()}  ${this._idClient}
     ${this._regiterDate}`;
    }
    

   }
   //  Person TEST CLASS9
   let person1 = new Person('Jose','Arturo',18)
    console.log(person1);

   console.log(person1.toString())
   let person2  = new Person('Mariano','Ramirez',35)
   console.log(person2.toString());
   //Employee test class
   let employee1 = new Employee('Camilo','Restrepo',25, 5000)
   console.log(employee1.toString());
   let employee2 = new Employee('Camila','Ospina',7000)
   console.log(employee2.toString());

   let client1 = new Client('Pedro','Cervantes',30, new Date());
   console.log(client1.toString());
   let client2 = new Client('Josefin','Estrella',45,new Date());
   console.log(client2.toString()); 
