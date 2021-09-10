// ipad 
class Cart {
  private readonly _products: Product[];

  constructor() {
    this._products = [];
  }
  public get products(): ReadonlyArray<Product> {
    return this._products;
  }

  addProduct(product){
    this._products.push(product);
  }
}

class Product {
  private readonly _name: string;
  constructor(name: string) {
    this._name = name;
  }

  public get name(): string {
    return this._name;
  }
}


const ipadPro = new Product("iPad Pro");
const inkPen = new Product("Hero ink Pen");
const cart = new Cart();

cart.addProduct(ipadPro);
cart.addProduct(inkPen)
console.log(cart.products);