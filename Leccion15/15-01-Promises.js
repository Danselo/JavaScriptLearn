//basic syntax for create a new promises
let myPromise = new Promise((resolve,reject) => {
        let expression = true;  
        if(expression)
        resolve('Resolved is correct');
        else
        reject('Rejected is correct');
});//two promises of type callback function

// myPromise.then(value => console.log(value),error => console.log(error));
//second form promise
// myPromise.then(value => console.log(value)).catch(error => console.log(error));

//call set timeout using promises

let promise = new Promise ((resolve)=>{
    //console.log('start promise');
    setTimeout(()=> resolve('saludo con promesa y timeout'),3000);
  //  console.log('end promise');
});
//promise.then(value => console.log(value));

//ASYNC  (indicates that a functions return a promise)
async function myFunctionWithPromise(){
    return 'saludo con promesa y async'
}

// myFunctionWithPromise().then(value => console.log(value));

//async / await
async function functionWithPromiseAndAwait(){
    let myPromise= new Promise(resolve => {
        resolve('Promise with await')
    });
    console.log(await myPromise);
}
// functionWithPromiseAndAwait();

//promises, await, async and setTimeout
async function functionWithPromisesAwaitTimeout(){
    console.log('start function');
    let myPromise = new Promise (resolve =>{
        setTimeout(()=> resolve('Promise with await and timeout'),3000);
    });
    console.log(await myPromise);
    console.log('end function');
}
functionWithPromisesAwaitTimeout();
