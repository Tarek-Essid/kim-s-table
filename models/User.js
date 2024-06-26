// require mongoose
const mongoose = require('mongoose');

// require schema
const { Schema, model } = mongoose;

// create schema
const UserSchema = new Schema(
  {
    name: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    phone: Number,
    isAdmin: Boolean,
  },
  { timestamps: true }
);

// exports
module.exports = User = model('User', UserSchema);
