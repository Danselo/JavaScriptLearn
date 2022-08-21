// Allows you to store multiple values
//declare array
// let cars = new Array('BmW', 'Mercedes Benz', 'Volvo');
//recomendation
const cars = ['BMW', 'Mercedes','Volvo'];
console.log(cars);

console.log(cars[1]);

for(let counter = 0; counter< cars.length; counter++){
    console.log(counter + '  '+cars[counter]);

}

//Modify Arrays 
cars[1] = 'MercedesBenz';
console.log(cars);

//ADD values
cars.push('Ford');
console.log(cars);

//large of the array
console.log(cars.length);
//add values but not leaving empty indices
cars[cars.length]= 'Cadillac';
console.log(cars);
//warning
//add but watch out 
cars[6] = 'Porche';
console.log(cars);

//ask if there array
console.log(Array.isArray(cars));
console.log(cars instanceof Array);