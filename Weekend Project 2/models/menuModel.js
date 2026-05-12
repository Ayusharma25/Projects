const { menuItemsData, productTokens } = require('../public/assets/js/models/menuList');

const getAllMenuItems = () => menuItemsData;

const getFeaturedItems = (limit = 3) => menuItemsData.slice(0, limit);

const getMenuItemById = (id) => {
    const productId = Number(id);
    return menuItemsData.find(item => item.id === productId) || null;
};

module.exports = {
    getAllMenuItems,
    getFeaturedItems,
    getMenuItemById,
    productTokens
};
