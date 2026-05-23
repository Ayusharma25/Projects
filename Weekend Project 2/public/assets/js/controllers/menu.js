const menuButtons = document.querySelectorAll('.menu-search-categories button');
const menuItemsContainer = document.querySelector('.menu-items');
const searchInput = document.querySelector('#search-input');
const dietFilter = document.querySelector('#diet-filter');
const sortFilter = document.querySelector('#sort-filter');
const resultTitle = document.querySelector('#menu-result-title');
const resultCount = document.querySelector('#menu-result-count');

let activeCategory = 'All';

const nonVegWords = ['chicken', 'mutton', 'prawn', 'ribs', 'pork', 'bbq'];

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

const getDiet = (item) => {
    const text = `${item.title} ${item.description}`.toLowerCase();
    return nonVegWords.some(word => text.includes(word)) ? 'Non-Veg' : 'Veg';
};

const getRating = (item) => (4.2 + (item.id % 7) / 10).toFixed(1);

const getPrepTime = (item) => `${18 + (item.id % 5) * 3}-${28 + (item.id % 5) * 3} min`;

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

const renderItems = (items, container) => {
    container.innerHTML = '';

    if (items.length === 0) {
        container.innerHTML = '<p class="empty-state">No dishes match the selected filters.</p>';
        return;
    }

    const fragment = document.createDocumentFragment();

    items.forEach(item => {
        const diet = getDiet(item);
        const card = document.createElement('article');
        card.id = `menu-item-${item.id}`;
        card.className = 'menu-item';
        card.tabIndex = 0;
        card.innerHTML = `
            <img src="${item.image}" alt="${item.title}" class="menu-item-image">
            <div class="menu-item-details">
                <div class="menu-item-topline">
                    <span class="item-badge ${diet === 'Non-Veg' ? 'non-veg' : ''}">${diet}</span>
                    <span class="item-rating">${getRating(item)} rating</span>
                </div>
                <h1 class="menu-item-name">${item.title}</h1>
                <span class="menu-item-description">${item.description}</span>
                <div class="menu-item-meta">
                    <span class="menu-item-price">${formatPrice(item.price)}</span>
                    <span>${getPrepTime(item)}</span>
                </div>
                <button type="button" class="add-to-cart">Add To Cart</button>
            </div>`;

        card.addEventListener('click', (event) => {
            if (event.target.closest('button')) {
                return;
            }
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
            event.currentTarget.classList.add('is-added');
            setTimeout(() => {
                event.currentTarget.textContent = 'Add To Cart';
                event.currentTarget.classList.remove('is-added');
            }, 900);
        });

        fragment.appendChild(card);
    });

    container.appendChild(fragment);
};

const getFilteredMenuItems = () => {
    const query = searchInput.value.trim().toLowerCase();
    const activeDiet = dietFilter.value;

    let items = menuItemsData.filter(item => {
        const matchesCategory = activeCategory === 'All' || getCategory(item) === activeCategory;
        const matchesDiet = activeDiet === 'All' || getDiet(item) === activeDiet;
        const searchableText = `${item.title} ${item.description}`.toLowerCase();
        const matchesSearch = !query || searchableText.includes(query);

        return matchesCategory && matchesDiet && matchesSearch;
    });

    if (sortFilter.value === 'price-low') {
        items = items.sort((a, b) => a.price - b.price);
    }

    if (sortFilter.value === 'price-high') {
        items = items.sort((a, b) => b.price - a.price);
    }

    if (sortFilter.value === 'name') {
        items = items.sort((a, b) => a.title.localeCompare(b.title));
    }

    return items;
};

const renderMenu = () => {
    const items = getFilteredMenuItems();
    renderItems(items, menuItemsContainer);
    resultTitle.textContent = activeCategory === 'All' ? 'All dishes' : activeCategory;
    resultCount.textContent = `${items.length} item${items.length === 1 ? '' : 's'}`;
};

menuButtons.forEach((button) => {
    button.addEventListener('click', () => {
        menuButtons.forEach(categoryButton => categoryButton.classList.remove('active'));
        button.classList.add('active');
        activeCategory = button.dataset.value;
        renderMenu();
    });
});

searchInput.addEventListener('input', renderMenu);
dietFilter.addEventListener('change', renderMenu);
sortFilter.addEventListener('change', renderMenu);

renderMenu();
