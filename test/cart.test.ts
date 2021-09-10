import { Cart } from "../src/cart"
import { Item } from "../src/item";
import { Product } from "../src/product";

describe("Cart", () => {
  it("should properly add item", () => {
    const cart = new Cart();
    cart.add(new Item(new Product("Ipad Pro"), 1))

    expect(cart.items.length).toEqual(1);
  });

  it("should not treat different instance of cart the same way", () => {
    const cart1 = new Cart();
    cart1.add(new Item(new Product("Ipad Pro"), 1))

    const cart2 = new Cart();
    cart2.add(new Item(new Product("Ipad Pro"), 1))

    expect(cart1).not.toEqual(cart2);
  });
});
