// routes/order.routes.js
const express = require('express');
const router = express.Router();
const OrderController = require('../controllers/order.controller');
const { authenticate } = require('../middleware/auth.middleware');
const { authorizeRoles } = require('../middleware/role.middleware');

router.post('/', authenticate, authorizeRoles('customer'), OrderController.placeOrder);
router.get('/me', authenticate, authorizeRoles('customer'), OrderController.getMyOrders);
router.get('/', authenticate, authorizeRoles('admin', 'manager'), OrderController.getAllOrders);

module.exports = router;
