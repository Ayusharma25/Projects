export default class ProductModel {
  constructor(id, name, desc, imageUrl, category, price, sizes) {
    this.id = id;
    this.name = name;
    this.desc = desc;
    this.imageUrl = imageUrl;
    this.category = category;
    this.price = price;
    this.sizes = sizes;
  }

  static add(product) {
      product.id = products.length + 1;
      products.push(product);
      return product;
  }

  static GetAll(){
    return products;
  }
}

var products = [
    new ProductModel(
        1,
        "Hoodie",
        "A comfortable hoodie",
        "https://images.bewakoof.com/original/men-s-gardenia-cyber-samurai-graphic-printed-oversized-hoodies-625389-1753422226-1.jpg",
        "Apparel",
        49.99,
        ["S", "M", "L", "XL"]
    ),
    new ProductModel(
        2,
        "Sneakers",
        "Stylish running sneakers",
        "https://images.bewakoof.com/original/men-s-white-nylon-fabric-sneakers-500101-1648736061-1.jpg",
        "Footwear",
        79.99,
        [7, 8, 9, 10, 11]
    ),
    new ProductModel(
        3,
        "Backpack",
        "A durable backpack",
        "https://images.bewakoof.com/original/men-s-black-durability-backpack-500101-1648736061-1.jpg",
        "Accessories",
        29.99,
        ["One Size"]
    ),
];
