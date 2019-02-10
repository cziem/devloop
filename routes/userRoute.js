const express = require("express");
const router = express.Router();

const controller = require("../controllers/users");

// Get the Admin Login Form
router.get('/admin', controller.AdminLogin)

// Get the Admin Register Form
router.get('/admin/new', controller.AdminRegister)

// Handle Admin Registration
router.post('/admin/new', controller.adminReg)

// Handle Admin Login
router.post('/admin', controller.loginAdmin)

module.exports = router