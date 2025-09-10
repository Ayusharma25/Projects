const cartItemsContainer = document.querySelector('.cart-items');
const cartItems = localStorage.getItem('cart') ? 
                JSON.parse(localStorage.getItem('cart')) : [];

const orderButton = document.getElementById('order-button');
if (cartItems.length === 0) {
    orderButton.classList.add('disabled');
}else {
    orderButton.classList.remove('disabled');
}    

for (let i = 0; i < cartItems.length; i++) {
    cartItemsContainer.innerHTML += `
        <div id="${'product-' + cartItems[i].id}" class="menu-item">
            <img src="${cartItems[i].image}" alt="Best Seller" class="menu-item-image">
            <div class="menu-item-details">
                <h1 class="menu-item-name">${cartItems[i].title}</h1>
                <span class="menu-item-description">${cartItems[i].description}</span>
                <span class="menu-item-price">Total Price: $${cartItems[i].price * cartItems[i].quantity}</span>
                <span class="menu-item-quantity">Quantity: ${cartItems[i].quantity}</span>
                <button id="${'button-' + cartItems[i].id}" class="remove-from-cart hidden">Remove from Cart</button>
            </div>
        </div>`;
}

if (cartItems.length === 0) {
    cartItemsContainer.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
}

const removeFromCartButtons = document.querySelectorAll('.remove-from-cart');
for (let i = 0; i < removeFromCartButtons.length; i++) {
    removeFromCartButtons[i].addEventListener('click', function() {
        const productId = parseInt(removeFromCartButtons[i].id.split('-')[1]);
        const updatedCart = cartItems.map(item => {
            if (item.id === productId) {
                if (item.quantity > 1) {
                    item.quantity -= 1; // Decrease quantity
                }else {
                    item.quantity = 0
                }
            }
            return item;
        }).filter(item => item.quantity > 0); // Remove items with zero quantity
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        location.reload(); // Reload to update the cart display
    });
}

orderButton.addEventListener('click', function() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart.length === 0) {
        alert('Your cart is empty. Please add items to your cart before placing an order.');
        return;
    }
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    orders.push(cart);
    localStorage.setItem('orders', JSON.stringify(orders));
    alert('Order placed successfully!');
    localStorage.removeItem('cart');
    // location.reload();
    location.assign('order.html');
});