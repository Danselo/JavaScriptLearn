//in class don't apply the hoisting (NOOO is POSIBLE!)

// let person2 = new('Karla', 'Juarez');
//create class 
class Persona{
    //create constructor 
    constructor(firstName, lastName){
        this._firstName = firstName;
        this._lastName = lastName;
    }
    //method get
    get name(){
        return this._firstName;
    }

    //method set
    set name(name){
        //modify name atribute 
        this._firstName = name;
    }

}

//create new object (Persona ) 

let person1 = new Persona('Juan','Peréz');

//GET AND SET (CLASS PROPERTY)
console.log(person1.name);

//SET
person1.name = 'Juan Carlos'; //call method set name 
console.log(person1.name); // call method get name

//create second person
let person2 = new Persona('Carla','Juarez');
console.log(person2.name);
