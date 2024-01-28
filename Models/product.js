const { mongoose } = require("mongoose");

const productDetails = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    enum: [
      "Samsung",
      "Xiaomi",
      "Apple",
      "OPPO",
      "Vivo",
      "realme",
      "Huawei",
      "Honor",
      "Motorola",
      "Nokia",
      "OnePlus",
      "Amazon",
      "Microsoft",
    ],
  },
  price: {
    required: true,
    type: Number,
  },
  condition: {
    type: String,
    enum: ["New", "Used", "Like New"],
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  seller: {
    type: String,
    refpath: "User",
    required: true,
  },
  datePosted: {
    type: Date,
    default: Date.now,
  },
  purchaseDate: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model("Product", productDetails);
