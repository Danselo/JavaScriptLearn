// let numero = 10;
// let numeroTexto = "valor desconocido"  ;

// switch (numero) {
//     case 1: 
//         numeroTexto ="Numero uno";
//         break;
//     case 2:
//         numeroTexto ="Numero dos";
//         break;
//     case 3:
//         numeroTexto= "Numero Three";
//         break;
//     case 4: 
//         numeroTexto= "Numero four";
//         break;

//     default: 
//         numeroTexto= "Caso no encontrado"
    
// }
// console.log(numeroTexto);

//EXAMPLE STATION OF THE YEAR
let month= 11;
let station= "unknown station";

switch(month){
    case 1: case 2: case 12:
        station = "Winter";
        break;
    case 3: case 4: case 5:
        station=    "Spring";
        break
    case 6: case 7: case 8: 
        station=    "Summer"; 
        break;
    case 9: case 10: case 11:
        station= "Fall";
        break;
    default:
        station= "Incorrect valor";
}
console.log(station);
    