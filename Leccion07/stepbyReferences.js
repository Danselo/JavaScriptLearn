const persona = {
    name: 'John',
    lastName: 'Smith',
    email: 'john.smith@example.com',
    phone: '(555) 555-5555',
}
function changeValueObject(p1){
    p1.name = 'Danilo'; 
    p1.lastName = 'Lora';
    p1.email = 'danilo.smith@example.com';
    p1.phone = '(57) 3005422697';
}
//step by reference
changeValueObject(persona);
console.log(persona);