//set interval 
//call the function of typeCallback every few seconds
//(call the function several times)

let clock = () => {
    let date = new Date();
    console.log(`${date.getHours()} ${date.getMinutes()} ${date.getSeconds()}`);
}
setInterval(clock,1000) // 1 sec 
