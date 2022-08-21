//Overwrite - SOBRESCRITURA 
//inheritance 
class Employee{
    constructor(name,salary){
        this._name = name;
        this._salary = salary;
    }
    get name(){
        return this._name;
    }
    get salary(){
        return this._salary;
    }
    set salary(salary){
        this._salary = salary;
    }
    set name(name){
        this._name = name;
    }
    //method
    getDetails(){
        return `Employee: name: ${this._name}, salary: $${this._salary}`
    }
}
class Manager extends Employee{
    constructor(name,salary,department){
        super(name,salary)
        this._department = department;

    }
    get department(){
        return this._department;
    }
    set department(department){
        this._department = department;
    }
    //parent class override method
    getDetails(){
        //new behavior
        return `Manager : ${super.getDetails()} depto: ${this._department}`
    }
}
let employee1 = new Employee('Jose',400);
// console.log(employee1.getDetails())
let manager1 = new Manager('Alfonso', 1200,'Sistemas');


// console.log(manager1.getDetails());

//POLIMORFISM 

function print(type){
  console.log(type.getDetails());   //one code line can ejecuted from method of father class
                //NEW TEME : intanceof//

  //ask if she is employed
    //NOTE : FIRST IS THE CLASS OF MENOR JERARQUIA 
    //EXAMPLE:
  if(type instanceof Manager){
    console.log('object of type Manager ');
    console.log(type.department);
    }
    else if(type instanceof Employee){
        console.log('object of type employee ');
        //this atrubute don't  exist 
        console.log(type.department);
    }
    else if( type instanceof Object){
        console.log("is type object")
    }
}

print(employee1)
print(manager1)