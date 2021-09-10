class Cart {
  private readonly _items: Item[];

  constructor() {
    this._items = [];
  }
  public get items(): ReadonlyArray<Item> {
    return this._items;
  }

  private existingItemIndex(item: Item): number {
    return this._items.indexOf(item);
  }

  add(item: Item){
    const existingItem = this.existingItemIndex(item);
    
    if(existingItem !== -1) {
      this._items[existingItem].addQuantity(item.quantity);
      return;
    }

    this._items.push(item);
  }

  remove(item: Item) {
    const indexToBeRemoved = this.existingItemIndex(item);
    if(indexToBeRemoved !== -1) {
      this._items.splice(indexToBeRemoved,1);
    }
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

class Item {
  private readonly _product: Product;
  private _quantity: number;

  constructor(product: Product, quantity: number) {
    this._product = product;
    this._quantity = quantity;
  }

  public get product(): Product {
    return this._product;
  }

  public get quantity(): number {
    return this._quantity;
  }

  public addQuantity(quantity: number) {
   this._quantity += quantity; 
  }
}


const ipadPro = new Item(new Product("iPad Pro"), 1);
const inkPen = new Item(new Product("Hero ink Pen"), 1);
const gmCricketBat = new Item(new Product("GM Cricket Bat"), 2);
const cart = new Cart();

cart.add(ipadPro);
cart.add(inkPen);
cart.add(gmCricketBat);

// console.log(cart.products);