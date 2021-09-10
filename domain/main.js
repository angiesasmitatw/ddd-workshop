// ipad 
class Cart {
  products = [];

  addProduct(product){
    this.products.push(product);
  }

  displayProducts() {
    console.log(this.products);
  }
}

class Product {
  name;

  constructor(name) {
    this.name = name;
  }
}


const ipadPro = new Product(1, "iPad Pro");
const cart = new Cart();

cart.addProduct(ipadPro);
cart.displayProducts();