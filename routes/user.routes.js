// routes/user.routes.js
const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user.controller');
const { authenticate } = require('../middleware/auth.middleware');
const { authorizeRoles } = require('../middleware/role.middleware');

router.get('/', authenticate, authorizeRoles('admin'), UserController.getAllUsers);
router.put('/:id/role', authenticate, authorizeRoles('admin'), UserController.updateUserRole);
router.get('/analytics', authenticate, authorizeRoles('admin'), UserController.getAnalytics);

module.exports = router;
