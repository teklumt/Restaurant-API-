const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  customer: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true },
  people: { type: Number, required: true },
  specialRequests: String
}, { timestamps: true });

module.exports = mongoose.model('Booking', bookingSchema);
