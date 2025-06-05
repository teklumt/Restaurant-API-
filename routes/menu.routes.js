// routes/menu.routes.js
const express = require('express');
const router = express.Router();
const MenuController = require('../controllers/menu.controller');
const { authenticate } = require('../middleware/auth.middleware');
const { authorizeRoles } = require('../middleware/role.middleware');

router.get('/', MenuController.getMenu);

router.post('/', authenticate, authorizeRoles('manager'), MenuController.createMenuItem);
router.put('/:id', authenticate, authorizeRoles('manager'), MenuController.updateMenuItem);
router.delete('/:id', authenticate, authorizeRoles('manager'), MenuController.deleteMenuItem);

module.exports = router;
