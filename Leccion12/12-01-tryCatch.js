//error handling 
//strict mode 
"use strict";
try{
    let x = 10;
    // miFunction();
    //
    throw 'Mi error'; // this is my message and if executed
}catch(error){
    console.log(error);
}
// this code always runs
//this is opcional 
finally{
    console.log('ends the revision of errors');
}