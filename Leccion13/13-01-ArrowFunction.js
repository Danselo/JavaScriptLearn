let myFunction = function (){
    console.log('Hello ');
}
//arrow function

// let myArrowFunction = () =>{
//     console.log('Arrow function');   
// }
// myFunction();
// const myArrowFunction = () => console.log('Arrow function'); 
// myArrowFunction(); //no apply hosting  if is defined with let 

// const sayHello = () => {
//     return 'Hello there!';
// }
const sayHello = () => 'Hello there!';
console.log(sayHello());

const returnObject = () => ({name : 'Pedro' , lastname: 'Federick'});
console.log(returnObject());
const functionWithParametersClassic = function (message){
    console.log(message);
}
const functionWithOneParameter = message => console.log(message);

functionWithOneParameter('saludo con parametros');
functionWithParametersClassic('saludo con funcion normal y parametros')

// functionWithParameters = (n1, n2) => n1 + n2;

functionWithParameters = (n1, n2) => {
    let result = n1 + n2;
    return result;
};

console.log(functionWithParameters(3,3));