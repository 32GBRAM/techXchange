const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    trim: true,
    type: String,
    required: true,
  },
  fullname: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    require: true,
    trim: true,
  },
  password: {
    type: String,
    require: true,
  },
  role: {
    type: String,
    enum: ["User", "Seller", "Admin"],
  },
});

module.exports = mongoose.model("User", userSchema);
