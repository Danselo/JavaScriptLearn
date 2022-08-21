function myFunction1(){
    console.log('my function 1');
}
function myFunction2(){
    console.log('my function 2');
}
myFunction1();
myFunction2();

//calll back function
function print (message){
    console.log(message);
}
function add(op1,op2, functionCallBack){
    let result= op1 + op2;
    functionCallBack(`Result: ${result}`);
}
add(5,3,print)

//call async with use setTimeout
function myCallBackFunction(){
    console.log('asynchronous greeting after for 3 seconds');
}
//receives function of type call back
setTimeout(myCallBackFunction,3000) //after for 3 seconds

//other form
setTimeout(function(){console.log('asynchronous greeting 2')},4000);
//with arrow function
setTimeout(()=> console.log('asynchronous greeting 3'),5000)