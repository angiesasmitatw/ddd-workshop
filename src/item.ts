import { Product } from "./product";

export class Item {
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

