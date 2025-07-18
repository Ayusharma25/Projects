const cartItemsContainer = document.querySelector('.cart-items');
const cartItems = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
for (let i = 0; i < cartItems.length; i++) {
    cartItemsContainer.innerHTML += `
        <div id="${'product-' + cartItems[i].id}" class="menu-item">
            <img src="${cartItems[i].image}" alt="Best Seller" class="menu-item-image">
            <div class="menu-item-details">
                <h1 class="menu-item-name">${cartItems[i].title}</h1>
                <span class="menu-item-description">${cartItems[i].description}</span>
                <span class="menu-item-price">Price: $${cartItems[i].price}</span>
                <button id="${'button-' + cartItems[i].id}" class="add-to-cart hidden">Add To Cart</button>
            </div>
        </div>`;
}

if (cartItems.length === 0) {
    cartItemsContainer.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
}