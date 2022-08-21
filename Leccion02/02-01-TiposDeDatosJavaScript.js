//types of the data
/*Examples of type the date in javascript */
// type string 
var nombre = "Danilo";

console.log(nombre);

//type NUMERIC
var numero = 1000;
console.log(numero);

//TYPE OBJECT

var object = {
    name : "Pedro",
    lastname: "Lora",
    age: 20
}
console.log(object);

//Dynamic variables (the variables they can update  )
// EXAMPLE
nombre = 10;
console.log(nombre);

//for know the type the data, use (TYPEOF) example:
console.log(typeof nombre);

//TYPE BOOLEAN (TRUE OR FALSE)
var flag = true;
console.log(typeof flag);

//TYPE FUNCTION
// ALLOW US RE-use  code
function myFunction(){
}
console.log(myFunction);


//TYPE SYMBOL
var simbol = Symbol("mi simbolo");
console.log(typeof simbol);

//TYPE CLASS IS A FUNCTION
class Person{
    //Define cosntructor since it defines us to create object the this class
    constructor(name,lastname){
        this.name = name;
        this.lastname = lastname;

    }
}

console.log(typeof Person);

//TYPE undefined 
var x; // is automatic 
console.log(typeof x);

// NULL = ausency of valor (IS A OBJECT)
var y = null;
console.log(y);


//ARRAYS (IS A OBJECT)
var autos = ['BMW', 'AUDI', 'VOLVO'];
console.log(autos);

// Empty string 
var z = '';
console.log(z);

