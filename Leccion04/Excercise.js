/* 
6am-11am - Buenos dias
12pm-18pm - Buenas tardes
19pm-24pm - Buenas  noches
0am - 6am - Sleeping 


*/
hora = 12;
if (hora  >= 6 && hora <= 11) {
    console.log("Good morning");
}
else if (hora>=12 && hora <= 18){
    console.log("Good afternoon");

}
else if (hora>=19 && hora <=24){
    console.log("Good night");

}else if (hora>=0 && hora <6){
    console.log("Sleeping");
}else{
    console.log("Incorrect valor");
}