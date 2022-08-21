//Call use
let person1 = {
    name: "John",
    lastname: "Smith",
    //step for the arguments in call method

    completeName: function(titulo,tel) {
        return titulo+ ': '+this.name + ' '  + this.lastname + ', '+tel;
        // return this.name + ' ' + this.lastname;
    }
}

let person2={
    name: "Jane",
    lastname: "Doe",
}
    // use method completeName method belonging this person1
    //console.log(person1.completeName('Licenciado', '4556661'));
    //CALL in other person ( the method the other person)
   // console.log(person1.completeName.call(person2,'Ingeniero', '5466521'));

    //APPLY (call the method in the object ,no defined method   )
    console.log(person1.completeName('Licenciado', '5466521'));
    let array = ['Ingeniero', '5466521'];
   console.log(person1.completeName.apply(person2, array ));

