const cartItemsContainer = document.querySelector('.cart-items');
const orderButton = document.getElementById('order-button');
const promoInput = document.getElementById('promo-code');
const promoButton = document.getElementById('apply-promo');
const promoMessage = document.getElementById('promo-message');
const subtotalText = document.getElementById('summary-subtotal');
const deliveryText = document.getElementById('summary-delivery');
const taxText = document.getElementById('summary-tax');
const discountText = document.getElementById('summary-discount');
const totalText = document.getElementById('summary-total');

let activePromo = localStorage.getItem('promoCode') || '';

const normalizeCartItem = (item) => {
    const currentMenuItem = menuItemsData.find(menuItem => menuItem.id === item.id);

    if (!currentMenuItem) {
        return item;
    }

    return {
        ...currentMenuItem,
        quantity: item.quantity || 1
    };
};

const getCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    return cart.map(normalizeCartItem);
};

const saveCart = (cart) => {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartSize();
    renderCart();
};

const formatPrice = (price) => `Rs. ${Number(price).toFixed(2)}`;

const getCartSubtotal = (cart) => {
    return cart.reduce((total, item) => total + Number(item.price) * item.quantity, 0);
};

const getOrderSummary = (cart) => {
    const subtotal = getCartSubtotal(cart);
    const delivery = subtotal > 0 && subtotal < 50 ? 4.99 : 0;
    const tax = subtotal * 0.05;
    const discount = activePromo === 'SAVE10' ? subtotal * 0.1 : 0;
    const total = Math.max(subtotal + delivery + tax - discount, 0);

    return {
        subtotal,
        delivery,
        tax,
        discount,
        total
    };
};

const updateOrderButton = (cart) => {
    orderButton.disabled = cart.length === 0;
    orderButton.classList.toggle('disabled', cart.length === 0);
};

const updateSummary = (cart) => {
    const summary = getOrderSummary(cart);
    subtotalText.textContent = formatPrice(summary.subtotal);
    deliveryText.textContent = summary.delivery === 0 ? 'Free' : formatPrice(summary.delivery);
    taxText.textContent = formatPrice(summary.tax);
    discountText.textContent = `-${formatPrice(summary.discount)}`;
    totalText.textContent = formatPrice(summary.total);
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
    updateSummary(cartItems);

    if (promoInput && activePromo) {
        promoInput.value = activePromo;
    }

    if (cartItems.length === 0) {
        cartItemsContainer.innerHTML = '<p class="empty-cart">Your cart is empty. Add something tasty from the menu.</p>';
        return;
    }

    cartItemsContainer.innerHTML = '';
    const fragment = document.createDocumentFragment();

    cartItems.forEach(item => {
        const card = document.createElement('article');
        card.id = `product-${item.id}`;
        card.className = 'menu-item cart-item';
        card.innerHTML = `
            <img src="${item.image}" alt="${item.title}" class="menu-item-image">
            <div class="menu-item-details">
                <div class="menu-item-topline">
                    <span class="item-badge">In cart</span>
                    <span class="item-rating">Qty ${item.quantity}</span>
                </div>
                <h1 class="menu-item-name">${item.title}</h1>
                <span class="menu-item-description">${item.description}</span>
                <div class="menu-item-meta">
                    <span class="menu-item-price">${formatPrice(item.price * item.quantity)}</span>
                    <span>${formatPrice(item.price)} each</span>
                </div>
                <div class="cart-actions">
                    <button type="button" data-action="decrease" data-id="${item.id}">-</button>
                    <button type="button" data-action="increase" data-id="${item.id}">+</button>
                    <button type="button" data-action="remove" data-id="${item.id}">Remove</button>
                </div>
            </div>`;
        fragment.appendChild(card);
    });

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

promoButton.addEventListener('click', () => {
    const code = promoInput.value.trim().toUpperCase();

    promoMessage.className = 'promo-message';

    if (!code) {
        activePromo = '';
        localStorage.removeItem('promoCode');
        promoMessage.textContent = 'Promo code removed.';
        renderCart();
        return;
    }

    if (code !== 'SAVE10') {
        promoMessage.classList.add('error');
        promoMessage.textContent = 'That promo code is not valid.';
        return;
    }

    activePromo = code;
    localStorage.setItem('promoCode', code);
    promoMessage.classList.add('success');
    promoMessage.textContent = 'SAVE10 applied. You got 10% off.';
    renderCart();
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
        items: cart,
        summary: getOrderSummary(cart),
        promoCode: activePromo
    });
    localStorage.setItem('orders', JSON.stringify(orders));
    localStorage.removeItem('cart');
    localStorage.removeItem('promoCode');
    window.location.href = '/orders';
});

renderCart();
