import ProductModel from '../models/product.model.js'; // Import the ProductModel

export default class ProductController {
  constructor() {
    // Initialize the ProductModel
    this.productModel = new ProductModel();
  }

  getProducts = (req, res) => {
    // Fetch products from the model
    const products = this.productModel.fetchProducts();

    // Render the product.ejs template with the product data
    res.render('product', { products });
  };
}