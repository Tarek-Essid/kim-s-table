// require express
const express = require("express");
const Product = require("../models/Product");

const router = express.Router();

// Routes //
// TEST ROUTE
router.get("/test", (req, res) => {
  res.send("hello everyone");
});

// ADD PRODUCT
router.post("/add", async (req, res) => {
  try {
    const {title, description, price} = req.body;
    const newProduct = new Product({title, description, price});
    await newProduct.save();
    res.status(200).send({msg: "Product added successfully", newProduct});
  } catch (error) {
    res.status(400).send({msg: "The product cannot be added !", error});
  }
});

// GET ALL PRODUCT
router.get("/all", async (req, res) => {
  try {
    const listProducts = await Product.find();
    res.status(200).send({msg: "List Products", listProducts});
  } catch (error) {
    res.status(400).send({msg: "Can not get List Products !", error});
  }
});

// GET ONE PRODUCT
router.get("/:id", async (req, res) => {
  try {
    const productToGet = await Product.findOne({_id: req.params.id});
    res.status(200).send({msg: "This is your Product", productToGet});
  } catch (error) {
    res.status(400).send({msg: "Can not get your Product !", error});
  }
});

// DELETE PRODUCT
router.delete("/:_id", async (req, res) => {
  try {
    const {_id} = req.params;
    await Product.findOneAndDelete({_id});
    res.status(200).send({msg: "Product Deleted"});
  } catch (error) {
    res.status(400).send({msg: "Can not delete this Product !", error});
  }
});

// EDIT PRODUCT
router.put("/:_id", async (req, res) => {
  try {
    const {_id} = req.params;
    const result = await Product.updateOne({_id}, {$set: {...req.body}});
    res.status(200).send({msg: "Product edited Successfully"});
  } catch (error) {
    res.status(400).send({msg: "Can not update this product !"});
  }
});

// exports
module.exports = router;
