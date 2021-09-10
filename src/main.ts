import { Cart } from "./cart";
import { Item } from "./item";
import { Product } from "./product"

const ipadPro = new Item(new Product("iPad Pro"), 1);
const inkPen = new Item(new Product("Hero ink Pen"), 1);
const gmCricketBat = new Item(new Product("GM Cricket Bat"), 2);
const cart = new Cart();

cart.add(ipadPro);
cart.add(inkPen);
cart.add(gmCricketBat);
console.log(cart.items);

cart.remove(ipadPro);
cart.remove(gmCricketBat)
console.log(cart.items);

console.log(cart.removedItems);
