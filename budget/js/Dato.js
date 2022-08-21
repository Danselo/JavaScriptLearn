//father class
class Dato{
    constructor(description,value){
        this._description = description;
        this._value = value;
    }
    get description(){
        return this._description;
    }
    get value(){
        return this._value;
    }
    set description(description){
        this._description = description;
    }
    set value(value){
        this._value = value;
    }
}