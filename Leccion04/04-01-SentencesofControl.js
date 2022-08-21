// let condition = true;

// if (condition){
//     console.log("Condition is true");
// }else{
//     console.log("Condition is false");

// }

// let numero = 3;

// if (numero == 1){
//     console.log("Number one");
// }else if (numero == 2){
//     console.log("Number two");

// }else if (numero == 3){
//     console.log("Number three");


// }else{
//     console.log("number is uknown");
// }

//EXAMPLE

let mes = 4;
let estacion;

if (mes ==1 || mes ==2 ||mes == 12) {
    estacion = "Winter";
}
else if(mes == 3 || mes == 4 || mes ==5){
    estacion = "Spring";
}
else if (mes == 6 || mes == 7 || mes == 8){
    estacion = "Summer";
}
else if (mes == 9 || mes == 10 || mes == 11){
    estacion= "Fall";
}
else{
    estacion = "Incorrect Valor";
}


console.log(estacion);