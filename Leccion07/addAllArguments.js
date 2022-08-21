let result = addAll(5, 4, 13, 10, 9);

function addAll(){
    let suma = 0;
    for (let i = 0; i < arguments.length; i++) {
        suma+= arguments[i]; //add + add = arguments[i]


    }
    return suma;
}
console.log(result);