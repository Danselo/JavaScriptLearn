class Egreso extends Dato{
    static contadorEgreso = 0;
    constructor(description,value) {
        super(description,value);
        this._id = ++Egreso.contadorEgreso;
    }
    get id() {
         return this._id;
     }
}