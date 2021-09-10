import { Cart } from "../src/cart"
import { Item } from "../src/item";
import { Product } from "../src/product";

describe("Cart", () => {
  it("should properly add item", () => {
    const cart = new Cart();
    cart.add(new Item(new Product("Ipad Pro"), 1))
    expect(cart.items.length).toEqual(1);
  });
});
