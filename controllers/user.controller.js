
const User = require('../models/User');
const Order = require('../models/Order');
const Booking = require('../models/Booking');

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select('-password');
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch users' });
  }
};

exports.updateUserRole = async (req, res) => {
  try {
    const { role } = req.body;
    const user = await User.findByIdAndUpdate(req.params.id, { role }, { new: true });
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json({ error: 'Failed to update user role' });
  }
};

exports.getAnalytics = async (req, res) => {
  try {
    const usersCount = await User.countDocuments();
    const ordersCount = await Order.countDocuments();
    const bookingsCount = await Booking.countDocuments();

    res.status(200).json({
      users: usersCount,
      orders: ordersCount,
      bookings: bookingsCount
    });
  } catch (err) {
    res.status(500).json({ error: 'Failed to get analytics' });
  }
};
