// require mongoose
const mongoose = require("mongoose");

// require schema
const {Schema, model} = mongoose;

// create schema
const ProductSchema = new Schema(
  {
    title: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: String, required: true},
  },
  {timestamps: true}
);

// exports
module.exports = Product = model("Product", ProductSchema);
