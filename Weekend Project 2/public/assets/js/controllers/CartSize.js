function updateCartSize() {
    const cartSizeSpan = document.getElementById('cartSize');

    if (!cartSizeSpan) {
        return;
    }

    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const totalQuantity = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
    cartSizeSpan.textContent = totalQuantity;
}

updateCartSize();
