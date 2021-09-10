declare class Cart {
    private readonly _products;
    constructor();
    get products(): ReadonlyArray<Product>;
    add(product: any): void;
}
declare class Product {
    private readonly _name;
    constructor(name: string);
    get name(): string;
}
declare const ipadPro: Product;
declare const inkPen: Product;
declare const cart: Cart;
