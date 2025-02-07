const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['admin', 'trader', 'viewer'], default: 'viewer' }
});

module.exports = mongoose.model('User', userSchema);