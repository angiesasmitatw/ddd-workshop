import { Cart } from "./cart";
import { Item } from "./item";
import { Price } from "./price";
import { Product } from "./product"

const ipadPro = new Item(new Product("iPad Pro", new Price(30000, "THB")), 1);
const inkPen = new Item(new Product("Hero ink Pen", new Price(20, "THB")), 1);
const gmCricketBat = new Item(new Product("GM Cricket Bat", new Price(1000, "THB")), 2);
const cart = new Cart();

cart.add(ipadPro);
cart.add(inkPen);
cart.add(gmCricketBat);
console.log(cart.items);

cart.remove(ipadPro);
cart.remove(gmCricketBat)
console.log(cart.items);

