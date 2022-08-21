class Person{
    constructor(name,lastname){
        this._name = name;
        this._lastname = lastname;
    }
    get name(){
        return this._name;
    }
    get lastname(){
        return this._lastname;
    }
    set name(name){
        this._name = name;
    }
    set lastname(lastname){
        this._lastname = lastname;
    }
}
const persons = [
    new Person('Juan','Perez'),
    new Person('Karla','Lara')
];

function showPerson(){
    console.log('Ejecuted method show Person');
    let text = '';
    for (let person of persons) {
        console.log(person);
        text += `<li>${person.name}  ${person.lastname}</li>`;
    }
    document.getElementById('person').innerHTML = text;
}
function addPerson(){
    const form = document.forms['form'];
    const name = form['name'];
    const lastname = form['lastname'];
    if(name.value != '' && lastname.value != ''){
        const person = new Person(name.value, lastname.value);
        console.log(person);
        persons.push(person)
        showPerson();
    }else{
        console.log("dont info");
        alert('please enter info');
    }
   

}