class Product{
    static counterProducts = 0;
    constructor(name,price){
        this._idProduct = ++Product.counterProducts;
        this._name = name;
        this._price = price;
    }
    get idProduct(){
        return this._idProduct;

    }
    get price(){
        return this._price;

    }
    set price(price){
        this.price = price;
    }
    get name(){
        return this._name;

    }
    set name(name){
        this._name = name;

    }
    toString(){
        return `idProduct: ${this._idProduct}, name: ${this._name}, price: $${this._price}`;
    }
}
//no herencia
class Order{
    static counterOrder = 0;
    static get MAX_PRODUCTS(){
        return 5;
    }
    constructor(){
        this._idOrder = ++Order.counterOrder;
        this._products = [];
        // this._counterProductsAdd = 0;
    }
    get idOrder(){
        return this._idOrder;

    }
    //method add product 
    addProduct(product){
        if(this._products.length < Order.MAX_PRODUCTS){
            //add New product
            this._products.push(product);

            //other method 
            // this._products[this._counterProductsAdd++] = product;

        }else{
            console.log("Can't add more products");
        }
    }
    //method calculate total
    calculateTotal(){
        let totalVenta= 0;
        //suma todos los precios de los productos 
        for(let product of this._products){
            totalVenta += product.price; //totalventa = totalventa + product.price
        }
        return totalVenta;
    }
    //method show the order
    showOrder(){
        let productsOrder = '';
        for(let product of this._products){
            productsOrder += '\n{' + product.toString() + '}';
        }
        console.log(`Order: ${this.idOrder} Total: $${this.calculateTotal()} Products: ${productsOrder}`);
    }

}
let product1 = new Product('Pantalon',2000);
let product2= new Product('Camisa',1000);

let order1 = new Order();
//add Product
order1.addProduct(product1);
order1.addProduct(product2);

order1.showOrder();
//second object of type Order
let order2 = new Order();
let product3 = new Product('Cinturon',50);
order2.addProduct(product3);
order2.addProduct(product2);
order2.addProduct(product1);
order2.addProduct(product3);
order2.addProduct(product2);


order2.showOrder();
