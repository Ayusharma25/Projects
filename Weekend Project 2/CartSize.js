const cartSizeSpan = document.getElementById('cartSize');
const cart = JSON.parse(localStorage.getItem('cart')) || [];
let totalQuantity = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
cartSizeSpan.textContent = totalQuantity;