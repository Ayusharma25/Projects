const express = require('express');
const pageController = require('../controllers/pageController');

const router = express.Router();

router.get('/', pageController.renderHome);
router.get('/menu', pageController.renderMenu);
router.get('/cart', pageController.renderCart);
router.get('/product', pageController.renderProduct);
router.get('/orders', pageController.renderOrders);
router.get('/order', pageController.renderOrders);
router.get('/signin', pageController.renderSignin);
router.get('/signup', pageController.renderSignup);

module.exports = router;
