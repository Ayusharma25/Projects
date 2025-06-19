// console.log(window.location.href);
// console.log(window.location.search);

const urlParams = new URLSearchParams(window.location.search);
// console.log(urlParams);

const productId = urlParams.get('id');

const product = menuItemsData.find(product => product.id == productId);
const productName = document.getElementById('product-name');
productName.innerHTML = product.title;
const productDescription = document.getElementById('product-description');
productDescription.innerHTML = product.description;
const productImage = document.getElementById('product-image');
productImage.style.backgroundImage = `url(${product.image})`;
const productPrice = document.getElementById('product-price');
productPrice.innerHTML = `Price: ₹${product.price}`;
