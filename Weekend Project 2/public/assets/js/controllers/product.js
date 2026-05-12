const urlParams = new URLSearchParams(window.location.search);
const productId = Number(urlParams.get('id'));
const product = menuItemsData.find(item => item.id === productId);

const addToCartButton = document.querySelector('.add-to-cart-button');
const buyNowButton = document.querySelector('.buy-now');

const getCart = () => JSON.parse(localStorage.getItem('cart')) || [];

const saveCart = (cart) => {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartSize();
};

const addToCart = (item) => {
    const cart = getCart();
    const existingItem = cart.find(cartItem => cartItem.id === item.id);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...item, quantity: 1 });
    }

    saveCart(cart);
};

if (product && addToCartButton && buyNowButton) {
    addToCartButton.addEventListener('click', () => {
        addToCart(product);
        addToCartButton.textContent = 'Added to Cart';
        setTimeout(() => {
            addToCartButton.textContent = 'Add to Cart';
        }, 1000);
    });

    buyNowButton.addEventListener('click', () => {
        addToCart(product);
        window.location.href = '/cart';
    });
}
