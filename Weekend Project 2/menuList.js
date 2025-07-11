const menuItemsData = [
    // 24 Veg (80%)
    {
        "id": 1,
        "image": "https://t3.ftcdn.net/jpg/00/27/57/96/360_F_27579652_tM7V4fZBBw8RLmZo0Bi8WhtO2EosTRFD.jpg",
        "title": "Paneer Butter Masala",
        "description": "Cottage cheese cubes in creamy tomato gravy.",
        "price": 12.49
    },
    {
        "id": 2,
        "image": "https://t3.ftcdn.net/jpg/00/27/57/96/360_F_27579652_tM7V4fZBBw8RLmZo0Bi8WhtO2EosTRFD.jpg",
        "title": "Dal Makhani",
        "description": "Black lentils cooked in creamy tomato sauce.",
        "price": 9.99
    },
    {
        "id": 3,
        "image": "https://t3.ftcdn.net/jpg/00/27/57/96/360_F_27579652_tM7V4fZBBw8RLmZo0Bi8WhtO2EosTRFD.jpg",
        "title": "Veggie Burger",
        "description": "Grilled vegetable patty with lettuce and tomato.",
        "price": 9.99
    },
    {
        "id": 4,
        "image": "https://t3.ftcdn.net/jpg/00/27/57/96/360_F_27579652_tM7V4fZBBw8RLmZo0Bi8WhtO2EosTRFD.jpg",
        "title": "Vegetable Stir Fry",
        "description": "Mixed vegetables stir-fried in soy sauce.",
        "price": 10.49
    },
    {
        "id": 5,
        "image": "https://t3.ftcdn.net/jpg/00/27/57/96/360_F_27579652_tM7V4fZBBw8RLmZo0Bi8WhtO2EosTRFD.jpg",
        "title": "Salad",
        "description": "Fresh garden salad with a variety of vegetables.",
        "price": 8.99
    },
    {
        "id": 6,
        "image": "https://t3.ftcdn.net/jpg/00/27/57/96/360_F_27579652_tM7V4fZBBw8RLmZo0Bi8WhtO2EosTRFD.jpg",
        "title": "Eggplant Parmesan",
        "description": "Breaded eggplant baked with marinara and cheese.",
        "price": 11.99
    },
    {
        "id": 7,
        "image": "https://t3.ftcdn.net/jpg/00/27/57/96/360_F_27579652_tM7V4fZBBw8RLmZo0Bi8WhtO2EosTRFD.jpg",
        "title": "Vegetable Korma",
        "description": "Mixed vegetables cooked in mild creamy sauce.",
        "price": 11.49
    },
    {
        "id": 8,
        "image": "https://t3.ftcdn.net/jpg/00/27/57/96/360_F_27579652_tM7V4fZBBw8RLmZo0Bi8WhtO2EosTRFD.jpg",
        "title": "Stuffed Bell Peppers",
        "description": "Bell peppers stuffed with rice and vegetables.",
        "price": 10.99
    },
    {
        "id": 9,
        "image": "https://t3.ftcdn.net/jpg/00/27/57/96/360_F_27579652_tM7V4fZBBw8RLmZo0Bi8WhtO2EosTRFD.jpg",
        "title": "Lasagna (Veg)",
        "description": "Layered pasta with vegetables, sauce and cheese.",
        "price": 13.99
    },
    {
        "id": 10,
        "image": "https://t3.ftcdn.net/jpg/00/27/57/96/360_F_27579652_tM7V4fZBBw8RLmZo0Bi8WhtO2EosTRFD.jpg",
        "title": "Fried Rice",
        "description": "Vegetable fried rice with soy sauce.",
        "price": 9.49
    },
    {
        "id": 11,
        "image": "https://t3.ftcdn.net/jpg/00/27/57/96/360_F_27579652_tM7V4fZBBw8RLmZo0Bi8WhtO2EosTRFD.jpg",
        "title": "Pasta (Veg)",
        "description": "Creamy Alfredo pasta with grilled vegetables.",
        "price": 11.99
    },
    {
        "id": 12,
        "image": "https://t3.ftcdn.net/jpg/00/27/57/96/360_F_27579652_tM7V4fZBBw8RLmZo0Bi8WhtO2EosTRFD.jpg",
        "title": "Pizza (Veg)",
        "description": "Delicious cheese pizza with fresh veggie toppings.",
        "price": 12.99
    },
    {
        "id": 13,
        "image": "https://t3.ftcdn.net/jpg/00/27/57/96/360_F_27579652_tM7V4fZBBw8RLmZo0Bi8WhtO2EosTRFD.jpg",
        "title": "Sushi (Veg)",
        "description": "Assorted sushi rolls with cucumber and avocado.",
        "price": 13.99
    },
    {
        "id": 14,
        "image": "https://t3.ftcdn.net/jpg/00/27/57/96/360_F_27579652_tM7V4fZBBw8RLmZo0Bi8WhtO2EosTRFD.jpg",
        "title": "Paneer Tikka",
        "description": "Grilled paneer cubes marinated in spices.",
        "price": 12.99
    },
    {
        "id": 15,
        "image": "https://t3.ftcdn.net/jpg/00/27/57/96/360_F_27579652_tM7V4fZBBw8RLmZo0Bi8WhtO2EosTRFD.jpg",
        "title": "Chole Bhature",
        "description": "Spicy chickpeas with fried bread.",
        "price": 10.99
    },
    {
        "id": 16,
        "image": "https://t3.ftcdn.net/jpg/00/27/57/96/360_F_27579652_tM7V4fZBBw8RLmZo0Bi8WhtO2EosTRFD.jpg",
        "title": "Rajma Chawal",
        "description": "Red kidney beans curry with rice.",
        "price": 9.99
    },
    {
        "id": 17,
        "image": "https://t3.ftcdn.net/jpg/00/27/57/96/360_F_27579652_tM7V4fZBBw8RLmZo0Bi8WhtO2EosTRFD.jpg",
        "title": "Aloo Gobi",
        "description": "Potato and cauliflower cooked with spices.",
        "price": 8.99
    },
    {
        "id": 18,
        "image": "https://t3.ftcdn.net/jpg/00/27/57/96/360_F_27579652_tM7V4fZBBw8RLmZo0Bi8WhtO2EosTRFD.jpg",
        "title": "Veg Manchurian",
        "description": "Vegetable balls in spicy sauce.",
        "price": 10.49
    },
    {
        "id": 19,
        "image": "https://t3.ftcdn.net/jpg/00/27/57/96/360_F_27579652_tM7V4fZBBw8RLmZo0Bi8WhtO2EosTRFD.jpg",
        "title": "Dhokla",
        "description": "Steamed savory gram flour cake.",
        "price": 7.99
    },
    {
        "id": 20,
        "image": "https://t3.ftcdn.net/jpg/00/27/57/96/360_F_27579652_tM7V4fZBBw8RLmZo0Bi8WhtO2EosTRFD.jpg",
        "title": "Idli Sambar",
        "description": "Steamed rice cakes with lentil soup.",
        "price": 8.49
    },
    {
        "id": 21,
        "image": "https://t3.ftcdn.net/jpg/00/27/57/96/360_F_27579652_tM7V4fZBBw8RLmZo0Bi8WhtO2EosTRFD.jpg",
        "title": "Mutton Rogan Josh",
        "description": "Slow-cooked mutton in aromatic spices.",
        "price": 17.99
    },
    {
        "id": 22,
        "image": "https://t3.ftcdn.net/jpg/00/27/57/96/360_F_27579652_tM7V4fZBBw8RLmZo0Bi8WhtO2EosTRFD.jpg",
        "title": "Dal Makhani",
        "description": "Black lentils cooked in creamy tomato sauce.",
        "price": 9.99
    },
    {
        "id": 23,
        "image": "https://t3.ftcdn.net/jpg/00/27/57/96/360_F_27579652_tM7V4fZBBw8RLmZo0Bi8WhtO2EosTRFD.jpg",
        "title": "Butter Chicken",
        "description": "Chicken cooked in rich buttery tomato gravy.",
        "price": 13.99
    },
    {
        "id": 24,
        "image": "https://t3.ftcdn.net/jpg/00/27/57/96/360_F_27579652_tM7V4fZBBw8RLmZo0Bi8WhtO2EosTRFD.jpg",
        "title": "Veggie Burger",
        "description": "Grilled vegetable patty with lettuce and tomato.",
        "price": 9.99
    },
    {
        "id": 25,
        "image": "https://t3.ftcdn.net/jpg/00/27/57/96/360_F_27579652_tM7V4fZBBw8RLmZo0Bi8WhtO2EosTRFD.jpg",
        "title": "Chicken Shawarma",
        "description": "Spiced chicken wrapped in pita bread.",
        "price": 11.99
    },
    {
        "id": 26,
        "image": "https://t3.ftcdn.net/jpg/00/27/57/96/360_F_27579652_tM7V4fZBBw8RLmZo0Bi8WhtO2EosTRFD.jpg",
        "title": "Prawn Curry",
        "description": "Prawns cooked in coconut curry sauce.",
        "price": 16.99
    },
    {
        "id": 27,
        "image": "https://t3.ftcdn.net/jpg/00/27/57/96/360_F_27579652_tM7V4fZBBw8RLmZo0Bi8WhtO2EosTRFD.jpg",
        "title": "Stuffed Bell Peppers",
        "description": "Bell peppers stuffed with rice and vegetables.",
        "price": 10.99
    },
    {
        "id": 28,
        "image": "https://t3.ftcdn.net/jpg/00/27/57/96/360_F_27579652_tM7V4fZBBw8RLmZo0Bi8WhtO2EosTRFD.jpg",
        "title": "Chicken Tikka Masala",
        "description": "Grilled chicken in creamy tomato sauce.",
        "price": 14.49
    },
    {
        "id": 29,
        "image": "https://t3.ftcdn.net/jpg/00/27/57/96/360_F_27579652_tM7V4fZBBw8RLmZo0Bi8WhtO2EosTRFD.jpg",
        "title": "Palak Paneer",
        "description": "Cottage cheese cubes cooked in spinach gravy.",
        "price": 12.49
    },
    {
        "id": 30,
        "image": "https://t3.ftcdn.net/jpg/00/27/57/96/360_F_27579652_tM7V4fZBBw8RLmZo0Bi8WhtO2EosTRFD.jpg",
        "title": "BBQ Ribs",
        "description": "Slow-cooked pork ribs with barbecue sauce.",
        "price": 18.49
    }
];

const productTokens = [];

const tokenizeProducts = () => {
    for (let i = 0; i < menuItemsData.length; i++) {
        const title = menuItemsData[i].title.replace(/[^a-zA-Z0-9 ]/g, '').toLowerCase();
        const description = menuItemsData[i].description.replace(/[^a-zA-Z0-9 ]/g, '').toLowerCase();
        const tokens = title.split(' ').concat(description.split(' '));
        productTokens.push({
            id: menuItemsData[i].id,
            tokens: tokens
        });
    }
}

tokenizeProducts();