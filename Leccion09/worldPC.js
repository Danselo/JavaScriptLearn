class inputDevice{
    constructor(inputType,brand){
        this._inputType = inputType;
        this._brand = brand;

    }
    get inputType(){
        return this._inputType;
    }
    get brand(){
        return this._brand;
    }
    set inputType(inputType){
        this._inputType = inputType;
    }
    set brand(brand){
        this._brand = brand;
    }
}

class Mouse extends inputDevice{
    static mousecount = 0;
    constructor(inputType, brand) {
        super(inputType, brand);
        this._idMouse = ++Mouse.mousecount;
    }
    get idMouse(){
        return this._idMouse;
    }
    get inputType(){
        return this._inputType;
    }
    get  brand(){
        return this._brand;
    }
    set inputType(inputType){
        this._inputType = inputType;
    }
    set brand(brand) {
        this._brand = brand;
    }
    toString(){
        return `Mouse : [IdMouse: ${this._idMouse} input type: ${this._inputType} brand: ${this._brand}]`;
    }
    
}
class Keyboard extends inputDevice{
    static countKeyboard = 0;
    constructor(inputType, brand) {
        super(inputType, brand);
        this._idKeyboard = ++Keyboard.countKeyboard;

    }
    get idKeyboard(){
        return this._idKeyboard;
    }
    get brand(){
        return this._brand;
    }
    get inputTypes(){
        return this._inputType;
    }
    set inputTypes(inputTypes){
        this._inputType = inputTypes;
    }
    set brand(brand){
        this._brand = brand;
    }
    toString() {
        return `Keyboard [IdKeyboard: ${this._idKeyboard} input type: ${this._inputType}, brand: ${this._brand}]`;
    }
}

class Display{
    static countDisplay = 0;
    constructor(brand,size){
        this._brand = brand;
        this._size = size;
        this._idDisplay = ++Display.countDisplay;

    }
    get idDisplay(){
        return this._idDisplay;
    }
    get brand(){
        return this._brand;
    }
    get size(){
        return this._size;
    }
    set brand(brand){
        this._brand =brand;
    }
    set size(size){
        this._size = size;
    }
    toString(){
        return `Display: [IdDisplay: ${this._idDisplay}, Brand: ${this._brand}, Size: ${this._size}]`;
    }
}

class Computer {
    static counterComputer = 0;
    constructor(name,display,keyboard,mouse){
        this._idComputer = ++Computer.counterComputer;
        this._name = name;
        this._mouse = mouse;
        this._display = display;
        this._keyboard = keyboard;

    }
    toString(){
        return `Computer  ${this._idComputer}:  ${this._name} \n  ${this._display}, \n ${this._keyboard},\n ${this._mouse}`;
    }
}
let mouse1 = new Mouse('Bluetooth','HP');
let keyboard1 = new Keyboard('Bluetooth','Lenovo');
let display1 = new Display('Samsung',25);


let computer1 = new Computer('Asus',display1,keyboard1,mouse1 );
console.log(computer1.toString());
//omit toString and use template string
console.log(`${computer1}`)

let computer2 = new Computer('Armada',display1,keyboard1,mouse1)
console.log(`${computer2}`);

class Order{
    static countOrder = 0;
    constructor(){
        this._idOrder = ++Order.countOrder;
        this._computers = [];
    }
    get idOrder(){
        return this._idOrder;
    }
    //methods
    addComputer(computer){
        //add element to array
        this._computers.push(computer);
    }
    showOrder(){
        let computerOrder = '';
        for (let computer of this._computers){
            computerOrder += `\n ${computer}`;
        }
        console.log(`Order: ${this._idOrder}, Computers: ${computerOrder} `);
    }
}

let order1 = new Order();
order1.addComputer(computer1);
order1.addComputer(computer2);
order1.addComputer(computer1);
order1.showOrder();

let order2 = new Order();
order2.addComputer(computer2);
order2.addComputer(computer1);
order2.showOrder();