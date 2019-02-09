// import { model } from "mongoose";
const User = require('../model/user')

module.exports = {
  // Get Admin Login Page
  AdminLogin: (req, res) => {
    res.render('users/admin')
  },

  // Handle Admin Registration
  adminReg: (req, res) => {
    res.send('Hanling request...')
    console.log(req.body)
  }
}