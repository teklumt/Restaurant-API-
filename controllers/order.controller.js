const Order = require('../models/Order');

exports.placeOrder = async (req, res) => {
  try {
    const { items } = req.body;
    const order = new Order({
      customer: req.user.id,
      items
    });
    await order.save();
    res.status(201).json(order);
  } catch (err) {
    res.status(400).json({ error: 'Failed to place order' });
  }
};

exports.getMyOrders = async (req, res) => {
  try {
    const orders = await Order.find({ customer: req.user.id }).populate('items.menuItem');
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch orders' });
  }
};

exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate('customer', 'username').populate('items.menuItem');
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch all orders' });
  }
};
