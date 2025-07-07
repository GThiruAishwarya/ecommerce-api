const express = require('express');
const router = express.Router();
const {
  createOrder,
  getUserOrders,
  getOrder,
  updateOrderStatus,
  getAllOrders
} = require('../controllers/orderController');
const { authenticateToken, requireCustomer, requireAdmin } = require('../middleware/authMiddleware');

// Customer routes
router.use(authenticateToken);

router.post('/', requireCustomer, createOrder);
router.get('/my-orders', requireCustomer, getUserOrders);
router.get('/my-orders/:id', requireCustomer, getOrder);

// Admin routes
router.get('/', requireAdmin, getAllOrders);
router.get('/:id', getOrder); // Admin can view any order
router.put('/:id/status', requireAdmin, updateOrderStatus);

module.exports = router; 