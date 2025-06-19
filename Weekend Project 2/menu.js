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
        const correspondingButton = menuButtons[i];
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
console.log(localStorage.getItem('cart'));

const addToCartButtons = document.querySelectorAll('.add-to-cart');
for (let i = 0; i < addToCartButtons.length; i++) {
    addToCartButtons[i].addEventListener('click', function() {
        console.log(addToCartButtons[i].id);
        menuItemsData.forEach(menuItem => {
            if (menuItem.id == addToCartButtons[i].id) {
                console.log(menuItem);
                let cart = JSON.parse(localStorage.getItem('cart')) || [];
                cart.push(menuItem);
                localStorage.setItem('cart', JSON.stringify(cart));
                console.log(localStorage.getItem('cart'));
            }
        });
    });
}

const searchInput = document.querySelector('.menu-search input');
searchInput.addEventListener('input', function(e) {
    console.log(e.target.value);
});

console.log(productTokens);

const searchFood = (searcuhQuery) => {

}