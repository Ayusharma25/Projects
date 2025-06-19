const menuItemsData = [{
    "id": 1,
    "image": "https://t3.ftcdn.net/jpg/00/27/57/96/360_F_27579652_tM7V4fZBBw8RLmZo0Bi8WhtO2EosTRFD.jpg",
    "title": "Pizza",
    "description": "Delicious cheese pizza with fresh toppings.",
    "price": 12.99
},
{
    "id": 2,
    "image": "https://t3.ftcdn.net/jpg/00/27/57/96/360_F_27579652_tM7V4fZBBw8RLmZo0Bi8WhtO2EosTRFD.jpg",
    "title": "Burger",
    "description": "Juicy beef burger with lettuce and tomato.",
    "price": 10.99
},
{
    "id": 3,
    "image": "https://t3.ftcdn.net/jpg/00/27/57/96/360_F_27579652_tM7V4fZBBw8RLmZo0Bi8WhtO2EosTRFD.jpg",
    "title": "Pasta",
    "description": "Creamy Alfredo pasta with grilled chicken.",
    "price": 11.99
}, 
{
    "id": 4,
    "image": "https://t3.ftcdn.net/jpg/00/27/57/96/360_F_27579652_tM7V4fZBBw8RLmZo0Bi8WhtO2EosTRFD.jpg",
    "title": "Salad",
    "description": "Fresh garden salad with a variety of vegetables.",
    "price": 8.99
},
{
    "id": 5,
    "image": "https://t3.ftcdn.net/jpg/00/27/57/96/360_F_27579652_tM7V4fZBBw8RLmZo0Bi8WhtO2EosTRFD.jpg",
    "title": "Sushi",
    "description": "Assorted sushi rolls with fresh fish.",
    "price": 15.99
},
{
    "id": 6,
    "image": "https://t3.ftcdn.net/jpg/00/27/57/96/360_F_27579652_tM7V4fZBBw8RLmZo0Bi8WhtO2EosTRFD.jpg",
    "title": "Tacos",
    "description": "Spicy chicken tacos with salsa and guacamole.",
    "price": 9.99
},
{
    "id": 7,
    "image": "https://t3.ftcdn.net/jpg/00/27/57/96/360_F_27579652_tM7V4fZBBw8RLmZo0Bi8WhtO2EosTRFD.jpg",
    "title": "Steak",
    "description": "Grilled steak with mashed potatoes and vegetables.",
    "price": 19.99
}
]

const productTokens = [];

const tokenizeProducts = () => {
    for (let i = 0; i < menuItemsData.length; i++) {
        const title = menuItemsData[i].title.replace(/[^a-zA-Z0-9 ]/g, '');
        const description = menuItemsData[i].description.replace(/[^a-zA-Z0-9 ]/g, '');
        const tokens = title.split(' ').concat(description.split(' '));
        productTokens.push({
            id: menuItemsData[i].id,
            tokens: tokens
        });
    }
}

tokenizeProducts();