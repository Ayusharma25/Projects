const searchSection = document.querySelector('.search-sections');
const menuButtons = document.querySelectorAll('.menu-search-categories button');
const menuItemsContainer = document.querySelector('.menu-items');
const searchInput = document.querySelector('#search-input');

let activeCategory = 'All';

const getCart = () => JSON.parse(localStorage.getItem('cart')) || [];

const saveCart = (cart) => {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartSize();
};

const formatPrice = (price) => `Rs. ${Number(price).toFixed(2)}`;

const getCategory = (item) => {
    const text = `${item.title} ${item.description}`.toLowerCase();
    if (text.includes('shake') || text.includes('juice') || text.includes('tea') || text.includes('coffee')) {
        return 'Beverages';
    }
    if (text.includes('combo')) {
        return 'Combos';
    }
    return 'Main Course';
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

const renderItems = (items, container, className) => {
    container.innerHTML = '';

    if (items.length === 0) {
        container.innerHTML = '<p class="empty-state">No menu items found.</p>';
        return;
    }

    const fragment = document.createDocumentFragment();

    items.forEach(item => {
        const card = document.createElement('div');
        card.id = `${className}-${item.id}`;
        card.className = className;
        card.tabIndex = 0;
        card.innerHTML = `
            <img src="${item.image}" alt="${item.title}" class="${className}-image">
            <div class="${className}-details">
                <h1 class="${className}-name">${item.title}</h1>
                <span class="${className}-description">${item.description}</span>
                <span class="${className}-price">Price: ${formatPrice(item.price)}</span>
                <button type="button" class="add-to-cart hidden">Add To Cart</button>
            </div>`;

        card.addEventListener('click', () => {
            window.location.href = `/product?id=${item.id}`;
        });

        card.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                window.location.href = `/product?id=${item.id}`;
            }
        });

        card.querySelector('.add-to-cart').addEventListener('click', (event) => {
            event.stopPropagation();
            addToCart(item);
            event.currentTarget.textContent = 'Added';
            setTimeout(() => {
                event.currentTarget.textContent = 'Add To Cart';
            }, 900);
        });

        fragment.appendChild(card);
    });

    container.appendChild(fragment);
};

const getFilteredMenuItems = () => {
    if (activeCategory === 'All') {
        return menuItemsData;
    }

    return menuItemsData.filter(item => getCategory(item) === activeCategory);
};

const renderMenu = () => {
    renderItems(getFilteredMenuItems(), menuItemsContainer, 'menu-item');
};

const renderSearchResults = (products) => {
    searchSection.innerHTML = `
        <h1>Search Results</h1>
        <div class="search-section-items">
            <div class="search-items"></div>
        </div>`;

    renderItems(products, document.querySelector('.search-items'), 'search-item');
};

menuButtons.forEach((button) => {
    button.addEventListener('click', () => {
        menuButtons.forEach(categoryButton => categoryButton.classList.remove('active'));
        button.classList.add('active');
        activeCategory = button.textContent.trim();
        searchInput.value = '';
        searchSection.innerHTML = '';
        renderMenu();
    });
});

searchInput.addEventListener('input', (event) => {
    const query = event.target.value.trim();

    if (!query) {
        searchSection.innerHTML = '';
        renderMenu();
        return;
    }

    renderSearchResults(searchFood(query));
});

const searchFood = (searchQuery) => {
    const searchTokens = searchQuery.replace(/[^a-zA-Z0-9 ]/g, '').toLowerCase().split(' ').filter(Boolean);

    const productMatchingScores = productTokens
        .map(product => {
            const score = product.tokens.reduce((count, token) => {
                return count + searchTokens.filter(searchToken => token.startsWith(searchToken)).length;
            }, 0);

            return {
                id: product.id,
                score
            };
        })
        .filter(product => product.score > 0)
        .sort((a, b) => b.score - a.score)
        .slice(0, 8);

    return productMatchingScores
        .map(product => menuItemsData.find(item => item.id === product.id))
        .filter(Boolean);
};

renderMenu();
