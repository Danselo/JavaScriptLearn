//Child class (Dato)
class Ingreso extends Dato{
    static contadorIngreso = 0;
    constructor(description,value){
        super(description,value);
        this._id = ++Ingreso.contadorIngreso;
    }
    get id(){
        return this._id;
    }
}