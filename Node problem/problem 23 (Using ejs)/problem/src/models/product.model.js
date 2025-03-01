import { products } from '../assets/products.js'; // Import the products array

export default class ProductModel {
  fetchProducts = () => {
    // Return the products array
    return products;
  };
}