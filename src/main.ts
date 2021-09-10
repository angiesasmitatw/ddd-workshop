class Cart {
  private readonly _products: Product[];

  constructor() {
    this._products = [];
  }
  public get products(): ReadonlyArray<Product> {
    return this._products;
  }

  add(product){
    const existingProduct = this._products.find(currentProduct => currentProduct.name === product.name);
    
    if(existingProduct !== undefined) {
      existingProduct.addQuantity(product.quantity);
      return;
    }

    this._products.push(product);
  }
}


class Product {
  private readonly _name: string;
  private _quantity: number;

  constructor(name: string, quantity: number) {
    this._name = name;
    this._quantity = quantity
  }

  public get name(): string {
    return this._name;
  }

  public get quantity(): number {
    return this._quantity;
  }

  public addQuantity(quantity: number) {
    this._quantity += quantity;
  }
}


const ipadPro = new Product("iPad Pro", 1);
const inkPen = new Product("Hero ink Pen", 1);
const gmCricketBat = new Product("GM Cricket Bat", 2);
const cart = new Cart();

cart.add(ipadPro);
cart.add(inkPen);
cart.add(gmCricketBat);
console.log(cart.products);