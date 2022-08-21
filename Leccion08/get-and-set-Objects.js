
//----------------------------------------------------------------
let persona = {
    name: "John",
    surname: "Doe",
    age: 30,
    lenguaje : 'es',
    get lang(){
        return this.lenguaje.toUpperCase();
    },
    
    set lang(lang){
        this.lenguaje = lang.toUpperCase(); 
    },
    //add method to the object
   get completeName (){
        return this.name + " " + this.surname
    }
}


//METHOD GET
console.log(persona.completeName);
console.log(persona.lang);
//SET 
persona.lang = 'en';
console.log(persona.lang);
console.log(persona.lenguaje);

