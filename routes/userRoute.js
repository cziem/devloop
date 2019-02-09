const express = require("express");
const router = express.Router();

const controller = require("../controllers/users");

// Get the Admin Login Form
router.get('/admin', controller.AdminLogin)

module.exports = router