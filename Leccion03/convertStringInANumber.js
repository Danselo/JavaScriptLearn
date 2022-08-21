let myNumber = "10x";
// console.log(typeof myNumber);
let edad = Number(myNumber);
// verify that the number is string 
console.log(edad); //don't  a number

if ( isNaN(edad) ) {
    console.log("not is a number");
}else{
    // console.log(typeof edad);
    if (edad >= 18){
        console.log("You can vote ")
    }else{
        console.log("You can't vote ");

    }
}


if (isNaN(edad)){
    console.log("not is a number");

}else{
    let result =  ( edad >=18) ? "You can vote" : "you can't vote";
    console.log(result);
}


