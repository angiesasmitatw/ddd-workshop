class Cart {
    constructor() {
        this._products = [];
    }
    get products() {
        return this._products;
    }
    add(product) {
        this._products.push(product);
    }
}
class Product {
    constructor(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
}
const ipadPro = new Product("iPad Pro");
const inkPen = new Product("Hero ink Pen");
const cart = new Cart();
cart.add(ipadPro);
cart.add(inkPen);
console.log(cart.products);
//# sourceMappingURL=main.js.map