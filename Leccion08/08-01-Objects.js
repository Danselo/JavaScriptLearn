//the diferences between  primitive types and objects is that it has no properties

// let x = 10;
// console.log(x.length);

//NOTE : CAN'T Reuse CODE (only with constructor)

//object in memory 
//reference in memory, this reference is assigned to variable "persona"
let persona = {
    name: "John",
    surname: "Doe",
    age: 30,
    gender: "male",
    email : "john@doe.com",
    //add method to the object
    completeName : function (){
        return this.name + " " + this.surname
    }
}
console.log(persona.name)
console.log(persona.surname)
console.log(persona.age);
//print everything
console.log(persona.completeName());
console.log(persona);

//other forms for define object

let persona2 = new Object();
persona2.name= "Joseph";
persona2.surname= "Smith";
persona2.email= "smith@example.com";
persona2.phone="30005422265"
console.log(persona2.name);

//access to properties of object

// console.log(persona.name);
// console.log(persona['surname'])

//loop through all object properties with a cicle for
//FOR IN 

// for(propertyName in persona) {
//     console.log(propertyName);
//     console.log(persona[propertyName]);
// }

// for(propertyName2 in persona2){
//     console.log(propertyName2);
//     console.log(persona2[propertyName2]);
// }

//ADD NEW PROPERTY
persona.phone = '3004265218'
//WARNING: Be careful with creating a new property when do you want to update
persona.ph0ne = '123456'
persona.phone="123456"

console.log(persona);

//DELETE PROPERTY
delete persona.ph0ne;
console.log(persona);

//PRINT THE OBJECT
console.log(persona);

//1-CONCATENATE ALL VALUES the each property
console.log(persona.name + ', ' + persona.surname + ', ' + persona.email);

// 2- USING FOR IN
 for(nameProperty in persona){
    console.log(persona[nameProperty]);

 }

// 3-Using object values
 let personArray = Object.values(persona);
 console.log(personArray);

// 4- using String (METHOD JSON.stringify)
  let personString = JSON.stringify(persona);
  console.log(personString);