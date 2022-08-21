function myFunction(a,b){
    console.log(arguments.length);
    return a + b;

}
console.log(typeof myFunction);

var myFunctionTexto = myFunction.toString();
console.log(myFunctionTexto);

