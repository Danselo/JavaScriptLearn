let add = function (a=5,b=4){
    console.log(arguments[0]);
    console.log(arguments[1]);
    

    return a + b+arguments[2];

};
result= add(3,6,7);
// result= add();
console.log(result);