//class.object
//create class 
class Person{

    //defined static atributes
       static personCounter= 0; //atributes of the class

        // static variable constant
        static get MAX_OBJE(){
            return 5; //this is the maximum number of objects

        }
     
    //create constructor 
    constructor(name, surname){
        this._name = name;
        this._surName = surname;
        if(Person.personCounter < Person.MAX_OBJE){
            this.idPerson = ++Person.personCounter; //preincrement

        }else{
            console.log('Maximun person permited');
        }
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
        return this.idPerson+ ' '+ this._name + ' ' + this._surName;
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
let employee1 = new Employee('Sandra', 'Zapata', 'Sistems');
console.log(person1.toString());
console.log(employee1.toString() );
console.log(Person.personCounter);

let person2 = new Person('Sebastian', 'Lora');
console.log(person2.toString());
console.log(Person.personCounter);

console.log(Person.MAX_OBJE);
Person.MAX_OBJE = 10;
console.log(Person.MAX_OBJE);

let person3 = new Person('Jesus','Lara');
let person4 = new Person('Armando', 'Toledo');
let person5 = new Person('Laura', 'Quintero');
console.log(person4.toString());

