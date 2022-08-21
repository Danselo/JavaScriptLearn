//CONSTRUCTOR object of type person 
function Person(name,surname,email){
    this.name= name;
    this.surname= surname;
    this.email= email;
//methods for constructor 
    this.completeName = function(){
        return this.name+ " "+this.surname
    }
}
//create a new Person object (with same characteristics )

let father = new Person('Jose','Perez','joseperez@gmail.com');
//add properties (PROPERTYE )
Person.prototype.tel = '44332211'
//modify properties a person object
father.tel = '11223344';
console.log(father);
let mother = new Person('Luz', 'Zapata', 'luz@gmail.com');
console.log(mother.tel);
mother.tel= '6688900';
console.log(mother.tel);
//--------------------------------------------------------

