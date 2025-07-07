const express = require('express');
const router = express.Router();
const {
  getCart,
  addToCart,
  updateCartItem,
  removeFromCart,
  clearCart
} = require('../controllers/cartController');
const { authenticateToken, requireCustomer } = require('../middleware/authMiddleware');

// All cart routes require authentication and customer role
router.use(authenticateToken);
router.use(requireCustomer);

router.get('/', getCart);
router.post('/add', addToCart);
router.put('/items/:productId', updateCartItem);
router.delete('/items/:productId', removeFromCart);
router.delete('/clear', clearCart);

module.exports = router; 