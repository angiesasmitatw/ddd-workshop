import { Item } from "./item";

export class Cart {
  private readonly _items: Item[];
  private readonly _recentlyRemoveItems: Item[];
  private readonly _id: number;

  constructor() {
    this._items = [];
    this._recentlyRemoveItems = [];
    this._id = Math.floor(Math.random() * Math.floor(Math.random() * Date.now()));
  }
  public get items(): ReadonlyArray<Item> {
    return this._items;
  }

  public get removedItems(): ReadonlyArray<string> {
    return this._recentlyRemoveItems.map(item => item.product.name);
  }

  public add(item: Item){
    const existingItem = this.existingItemIndex(item);

    if(existingItem !== -1) {
      this._items[existingItem].addQuantity(item.quantity);
      return;
    }

    this._items.push(item);
  }

  public remove(item: Item) {
    const indexToBeRemoved = this.existingItemIndex(item);
    if(indexToBeRemoved !== -1) {
      this._items.splice(indexToBeRemoved,1);
      this._recentlyRemoveItems.push(item);
    }
  }

  private existingItemIndex(item: Item): number {
    return this._items.indexOf(item);
  }


}
