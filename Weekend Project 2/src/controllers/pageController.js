const menuModel = require('../models/menuModel');

const renderHome = (req, res) => {
    res.render('index', {
        title: 'Restaurant Menu',
        featuredItems: menuModel.getFeaturedItems(3)
    });
};

const renderMenu = (req, res) => {
    res.render('menu', {
        title: 'Our Menu',
        menuItems: menuModel.getAllMenuItems()
    });
};

const renderCart = (req, res) => {
    res.render('cart', {
        title: 'Your Cart'
    });
};

const renderProduct = (req, res) => {
    const product = menuModel.getMenuItemById(req.query.id);

    res.render('product', {
        title: product ? product.title : 'Item Not Found',
        product
    });
};

const renderOrders = (req, res) => {
    res.render('order', {
        title: 'Your Orders'
    });
};

const renderSignin = (req, res) => {
    res.render('signin', {
        title: 'Sign In'
    });
};

const renderSignup = (req, res) => {
    res.render('signup', {
        title: 'Sign Up'
    });
};

module.exports = {
    renderHome,
    renderMenu,
    renderCart,
    renderProduct,
    renderOrders,
    renderSignin,
    renderSignup
};
