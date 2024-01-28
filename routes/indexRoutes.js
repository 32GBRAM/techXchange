const { login, signup } = require("../Controller/Auth");
const express = require("express");
const router = express.Router();
router.post("/signup", signup);
router.post("/login", login);
module.exports = { indexRoute: router };
