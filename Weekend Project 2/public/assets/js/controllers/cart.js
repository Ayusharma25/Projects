const cartItemsContainer = document.querySelector('.cart-items');
const orderButton = document.getElementById('order-button');

const getCart = () => JSON.parse(localStorage.getItem('cart')) || [];

const saveCart = (cart) => {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartSize();
    renderCart();
};

const formatPrice = (price) => `Rs. ${Number(price).toFixed(2)}`;

const getCartTotal = (cart) => {
    return cart.reduce((total, item) => total + Number(item.price) * item.quantity, 0);
};

const updateOrderButton = (cart) => {
    orderButton.disabled = cart.length === 0;
    orderButton.classList.toggle('disabled', cart.length === 0);
};

const updateQuantity = (productId, change) => {
    const updatedCart = getCart()
        .map(item => {
            if (item.id === productId) {
                return { ...item, quantity: item.quantity + change };
            }

            return item;
        })
        .filter(item => item.quantity > 0);

    saveCart(updatedCart);
};

const renderCart = () => {
    const cartItems = getCart();
    updateOrderButton(cartItems);

    if (cartItems.length === 0) {
        cartItemsContainer.innerHTML = '<p class="empty-cart">Your cart is empty. Add something tasty from the menu.</p>';
        return;
    }

    cartItemsContainer.innerHTML = '';
    const fragment = document.createDocumentFragment();

    cartItems.forEach(item => {
        const card = document.createElement('div');
        card.id = `product-${item.id}`;
        card.className = 'menu-item cart-item';
        card.innerHTML = `
            <img src="${item.image}" alt="${item.title}" class="menu-item-image">
            <div class="menu-item-details">
                <h1 class="menu-item-name">${item.title}</h1>
                <span class="menu-item-description">${item.description}</span>
                <span class="menu-item-price">Item total: ${formatPrice(item.price * item.quantity)}</span>
                <span class="menu-item-quantity">Quantity: ${item.quantity}</span>
                <div class="cart-actions">
                    <button type="button" data-action="decrease" data-id="${item.id}">-</button>
                    <button type="button" data-action="increase" data-id="${item.id}">+</button>
                    <button type="button" data-action="remove" data-id="${item.id}">Remove</button>
                </div>
            </div>`;
        fragment.appendChild(card);
    });

    const summary = document.createElement('div');
    summary.className = 'cart-summary';
    summary.innerHTML = `<strong>Cart total:</strong> ${formatPrice(getCartTotal(cartItems))}`;
    fragment.appendChild(summary);

    cartItemsContainer.appendChild(fragment);
};

cartItemsContainer.addEventListener('click', (event) => {
    const button = event.target.closest('button[data-action]');

    if (!button) {
        return;
    }

    const productId = Number(button.dataset.id);
    const action = button.dataset.action;

    if (action === 'increase') {
        updateQuantity(productId, 1);
    }

    if (action === 'decrease') {
        updateQuantity(productId, -1);
    }

    if (action === 'remove') {
        const updatedCart = getCart().filter(item => item.id !== productId);
        saveCart(updatedCart);
    }
});

orderButton.addEventListener('click', function() {
    const cart = getCart();

    if (cart.length === 0) {
        alert('Your cart is empty. Please add items to your cart before placing an order.');
        return;
    }

    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    orders.push({
        createdAt: new Date().toISOString(),
        items: cart
    });
    localStorage.setItem('orders', JSON.stringify(orders));
    localStorage.removeItem('cart');
    window.location.href = '/orders';
});

renderCart();
