//CONSTRUCTOR object of type person 
function Person(name,surname,email){
    this.name= name;
    this.surname= surname;
    this.email= email;
//methods for constructor 
    this.completeName = function(){
        return this.name+ " "+this.surname
    }
}
//create a new Person object (with same characteristics )

let father = new Person('Jose','Perez','joseperez@gmail.com');
console.log(father);
//print method (completeName)
console.log(father.completeName());

let mother = new Person('Luz', 'Zapata', 'luz@gmail.com');
console.log(mother);
//print method (completeName)

console.log(mother.completeName());
// for (personDate in mother){
//     console.log(mother[personDate]);
// }

//change the object father

father.name = 'Daniel';
console.log(father);

//ways to create a new object 
var myObject = new Object();
//simplify
let myObject2 = {};

//string 
let myString1 = new String('Hello');
//simplify
let myString2= 'Hello';

let myNumber = new Number(1);
let myNumber2 = 1

//boolean

myBoolean = new Boolean(true);
myBoolean2 = true;
//array 
let myArray1 = new Array();
let myArray2 = [];

//function
let myFunction = new Function();
let myFunction2 = function (){};