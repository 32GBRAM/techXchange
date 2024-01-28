const { default: mongoose, model } = require("mongoose");
const product = require("../Models/product");
exports.addProduct = async (req, res) => {
  let {
    name,
    brand,
    price,
    condition,
    description,
    seller,
    email,
    datePosted,
    purchaseDate,
  } = req.body;
  if (
    !name ||
    !brand ||
    !price ||
    !condition ||
    !description ||
    !seller ||
    !email ||
    !datePosted ||
    !purchaseDate
  ) {
    res.status(400).json({ message: "Missing required fields" });
  }
};
