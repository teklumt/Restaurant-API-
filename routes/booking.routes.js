// routes/booking.routes.js
const express = require('express');
const router = express.Router();
const BookingController = require('../controllers/booking.controller');
const { authenticate } = require('../middleware/auth.middleware');
const { authorizeRoles } = require('../middleware/role.middleware');

router.post('/', authenticate, authorizeRoles('customer'), BookingController.bookTable);
router.get('/me', authenticate, authorizeRoles('customer'), BookingController.getMyBookings);
router.get('/', authenticate, authorizeRoles('admin', 'manager'), BookingController.getAllBookings);

module.exports = router;
