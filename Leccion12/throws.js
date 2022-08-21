// let result = 5;
'use strict';
let result = 'hola';


try{
    // x= 10;
    if(isNaN (result)) throw `don't is a number `
    else if (result === '') throw 'is a empty string'
    else if (result >=0) throw 'Value is positive'
    else if (result <0) throw 'Value is negative'

}catch(e){
    console.log(e);
    // console.log(e.name)
    // console.log(e.message);
}
finally{
    console.log('ended revision of errors');
}