//class.object
//create class 
class Person{

    //defined static atributes
       static personObjectsCounter= 0; //atributes of the class

        //dont static atributes
        email = 'default value'; // the atributes of the object

    //create constructor 
    constructor(name, surname){
        this._name = name;
        this._surName = surname;
        //acces the static variables
        Person.personObjectsCounter++;
        console.log("the counter is incremented: "+Person.personObjectsCounter);
    }
    //method get
    get surName(){
        return this._name;
    }
    get name(){
        return this._surName;
    }

    //method set
    set name(name){
        //modify name atribute 
        this._name = name;
    }
    set surName(surName){
        this._surName = surName;
    }
     //methods
     completeName(){
        return this._name + ' ' + this._surName;
    }
    //object class
    //overwritting the method of the father class (object)
    toString(){
        //apply polimorphism (multiples forms in time of execution)
        //the method that is executed depends if is the reference of father type or child type
        return this.completeName();
    }
    //STATIC WORD
        static sayHi(){
            console.log('Hello since method static');
        }
        static sayHi2(person){
            console.log(person.name + ' '+ person.surName);
        }

    }

//child class
//INHERITANCE CLASS
class Employee extends Person {
    constructor(name,surname,department){
        super(name,surname); //call the father constructor 
        this._department = department;
    }
    get department(){
        return  this._department;
    }
    set department(department){
        this._department = department;

    }
    //SOBRESCRITURA 
    //overwrite( modify behaviour the some methods  defined in the father class)
   completeName (){
    //use the same parameters and names the method 
    return super.completeName() + ', ' + this._department
   }
}

let person1 = new Person('Jose','Ramirez');
console.log(person1.name);
console.log(person1.toString());

//create employee with inheritance
let employee1 = new Employee('Jose','Ramirez','Systems');
console.log(employee1);
console.log(employee1.name);


console.log(employee1.completeName());

//object class (depends on object )
console.log(employee1.toString());

//call static method
// person1.sayHi(); //no is possible call this method since object 

Person.sayHi() // in console show the message
Person.sayHi2(person1); //in console show the message

//----------THE STATIC ONLY DONE WITH CLASSES don't with Object---------

//call the method since class employee
Employee.sayHi();
Employee.sayHi2(employee1);

//use the static atributes
console.log(person1.personObjectsCounter);//dont access with the object
 
console.log(Person.personObjectsCounter);
//the child class inherit atributes static
console.log(Employee.personObjectsCounter);
//dont static
console.log(person1.email);
console.log(employee1.email);
console.log( Person.email);
console.log(Employee.email);