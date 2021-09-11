import { Item } from "./item";
import { DomainEvent } from './domainEvent';

export class Cart {
  private readonly _items: Item[];
  private readonly _id: number;

  constructor() {
    this._items = [];
    this._id = Math.floor(Math.random() * Math.floor(Math.random() * Date.now()));
  }
  public get items(): ReadonlyArray<Item> {
    return this._items;
  }

  public add(item: Item) {
    const existingItem = this._existingItemIndex(item);
    DomainEvent.apply("add", item);

    if (existingItem !== -1) {
      this._items[existingItem].addQuantity(item.quantity);
      return;
    }

    this._items.push(item);
  }

  public remove(item: Item) {
    const indexToBeRemoved = this._existingItemIndex(item);
    if (indexToBeRemoved !== -1) {
      this._items.splice(indexToBeRemoved, 1);

      DomainEvent.apply("remove", item);
    }
  }

  private _existingItemIndex(item: Item): number {
    return this._items.indexOf(item);
  }


}
