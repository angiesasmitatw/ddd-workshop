import { Price } from "./price"
export class Product {
  private readonly _name: string;
  private readonly _price: Price;

  constructor(name: string, price: Price) {
    this._name = name;
    this._price = price
  }

  public get name(): string {
    return this._name;
  }
}
