const searchItemsContainer = document.querySelector('.search-sections');
searchItemsContainer.innerHTML = '';

const menuButtons = document.querySelectorAll('.menu-search-categories button');

for (let i = 0; i < menuButtons.length; i++) {
    menuButtons[i].addEventListener('click', function() {
        for (let j = 0; j < menuButtons.length; j++) {
            menuButtons[j].classList.remove('active');
        }
        menuButtons[i].classList.add('active');
    });
}


const menuItems = document.querySelectorAll('.menu-item');
for (let i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener('onmouseover', function() {
    });
}

const menuItemsContainer = document.querySelector('.menu-items');
for (let i = 0; i < menuItemsData.length; i++) {
    menuItemsContainer.innerHTML += `
        <div id="${'product-' + menuItemsData[i].id}" class="menu-item">
            <img src="${menuItemsData[i].image}" alt="Best Seller" class="menu-item-image">
            <div class="menu-item-details">
                <h1 class="menu-item-name">${menuItemsData[i].title}</h1>
                <span class="menu-item-description">${menuItemsData[i].description}</span>
                <span class="menu-item-price">Price: $${menuItemsData[i].price}</span>
                <button id="${'button-' + menuItemsData[i].id}" class="add-to-cart hidden">Add To Cart</button>
            </div>
        </div>`;
    // let menuItem = document.createElement('div');
    // menuItem.classList.add('menu-item');
    // menuItemsContainer.appendChild(menuItem);
    // let image = document.createElement('img');
    // image.src = menuItemsData[i].image;
    // image.alt = "Best Seller";
    // image.classList.add('menu-item-image');
    // menuItem.appendChild(image);
    // let details = document.createElement('div');
    // details.classList.add('menu-item-details');
    // menuItem.appendChild(details);
    // let title = document.createElement('h1');
    // title.innerText = menuItemsData[i].title;
    // details.appendChild(title);
    // let description = document.createElement('span');
    // description.innerText = menuItemsData[i].description;
    // details.appendChild(description);
    // let price = document.createElement('span');
    // price.innerText = `Price: $${menuItemsData[i].price}`;
    // price.classList.add('price');
    // details.appendChild(price);
    // let button = document.createElement('button');
    // button.id = menuItemsData[i].id;
    // button.classList.add('add-to-cart', 'hidden');
    // button.innerText = "Add To Cart";
    // button.classList.add('hidden');
    // details.appendChild(button);
}

for (let i = 0; i < menuItemsData.length; i++) {
    const menuItem = document.getElementById('product-' + menuItemsData[i].id);
    menuItem.addEventListener('click', function() {
        window.open(`product.html?id=${menuItemsData[i].id}`, '_blank');
    });
}

localStorage.setItem('cart', JSON.stringify([]));

const addToCartButtons = document.querySelectorAll('.add-to-cart');
for (let i = 0; i < addToCartButtons.length; i++) {
    addToCartButtons[i].addEventListener('click', function() {
        menuItemsData.forEach(menuItem => {
            if (menuItem.id == addToCartButtons[i].id) {
                let cart = JSON.parse(localStorage.getItem('cart'));
                cart.push(menuItem);
                localStorage.setItem('cart', JSON.stringify(cart));
            }
        });
    });
}

const searchInput = document.querySelector('.menu-search input');
searchInput.addEventListener('input', function(e) {
    if (e.target.value == '') {
        const searchItemsContainer = document.querySelector('.search-sections');
        searchItemsContainer.innerHTML = ''; // Clear previous search results
        return;
    } else {
        const searchItemsContainer = document.querySelector('.search-sections');
        searchItemsContainer.innerHTML = '';
        searchItemsContainer.innerHTML = `<h1>Search Results</h1>
            <div class="search-section-items">
                <div class="search-items">
                </div>
            </div>`;
    }
    const products = searchFood(e.target.value);
    const searchItemsContainer = document.querySelector('.search-items');
    searchItemsContainer.innerHTML = ''; // Clear previous search results
    if (products.length === 0) {
        searchItemsContainer.innerHTML = '<h1>No results found</h1>';
        return;
    }
    for (let i = 0; i < products.length; i++) {
        searchItemsContainer.innerHTML += `
            <div id="${'product-' + products[i].id}" class="search-item">
                <img src="${products[i].image}" alt="Best Seller" class="search-item-image">
                <div class="search-item-details">
                    <h1 class="search-item-name">${products[i].title}</h1>
                    <span class="search-item-description">${products[i].description}</span>
                    <span class="search-item-price">Price: $${products[i].price}</span>
                    <button id="${'button-' + products[i].id}" class="add-to-cart hidden">Add To Cart</button>
                </div>
            </div>`;
    }
});


// const searchFood = (searchQuery) => {
//     const searchTokens = searchQuery.toLowerCase().split(' ').filter(token => token);
//     let productMatchingScores = [];
//     for (let i = 0; i < productTokens.length; i++) {
//         let count = 0;
//         for (let j = 0; j < productTokens[i].tokens.length; j++) {
//             if (searchTokens.includes(productTokens[i].tokens[j])) {
//                 count++;
//             }
//         }
//         productMatchingScores.push({ 
//             id: productTokens[i].id, 
//             score: count 
//         });
//     }
//     productMatchingScores.sort((a, b) => {
//         return b.score - a.score;
//     });

//     productMatchingScores = productMatchingScores.splice(0, 5);
//     console.log(productMatchingScores);
//     const products = [];
//     for (let i = 0; i < productMatchingScores.length; i++) {
//         menuItemsData.forEach(menuItem => {
//             if (menuItem.id == productMatchingScores[i].id) {
//                 products.push(menuItem);
//             }
//         });
//     }
//     return products;
// }

const searchFood = (searchQuery) => {
    const searchTokens = searchQuery.replace(/[^a-zA-Z0-9 ]/g, '').toLowerCase().split(' ').filter(token => token);

    let productMatchingScores = [];

    for (let i = 0; i < productTokens.length; i++) {
        let count = 0;
        for (let j = 0; j < productTokens[i].tokens.length; j++) {
            for (let k = 0; k < searchTokens.length; k++) {
                if (
                    searchTokens[k] && productTokens[i].tokens[j].startsWith(searchTokens[k])
                ) {
                    count++;
                }
            }
        }
        productMatchingScores.push({
            id: productTokens[i].id,
            score: count
        });
    }

    productMatchingScores = productMatchingScores.filter(product => product.score > 0);
    productMatchingScores.sort((a, b) => b.score - a.score);
    productMatchingScores = productMatchingScores.splice(0, 5);

    const products = [];
    for (let i = 0; i < productMatchingScores.length; i++) {
        const item = menuItemsData.find(m => m.id == productMatchingScores[i].id);
        if (item) products.push(item);
    }
    
    return products;
}
