// import { model } from "mongoose";
const User = require('../model/user')

module.exports = {
  // Get Admin Login Page
  AdminLogin: (req, res) => {
    res.render('admin')
  }
}