const passport = require('passport')
const LocalStrategy = require('passport-local')

const User = require('../model/user')

// Configure Passport
passport.use(new LocalStrategy(User.authenticate()))
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

module.exports = {
  // Get Admin Login Page
  AdminLogin: (req, res) => {
    res.render('users/adminLogin')
  },

  // Get Admin Registration Page
  AdminRegister: (req, res) => {
    res.render('users/admin')
  },

  // Handle Admin Registration
  adminReg: async (req, res) => {
    const newAdmin = new User({
      username: req.body.username,
      email: req.body.email
    })

    const { password } = req.body

    if (req.body.adminCode === process.env.ADMIN_CODE) {
      newAdmin.isAdmin = true

      try {
        let admin = await User.register(newAdmin, password)
        passport.authenticate('local')(req, res, () => {
          res.redirect('/admin/dashboard')
          res.render('users/dashboard', admin)
        })
      } catch (error) {
        // Render a modal here with the error message!!!
        res.send(`${req.body.username}, ${error.message}`)
        console.log(error)
      }
    } else {
      req.flash('error', `Wrong Admin Code. Contact devloops admin for help`)
      res.redirect('/admin/new')
    }
  },

  // Show dashboard
  dashboard: (req, res) => {
    res.render('users/dashboard')
  },

  // Handle Admin Login
  loginAdmin: passport.authenticate('local', {
    successRedirect: '/admin/dashboard',
    successFlash: 'Successfully logged into admin account',
    failureRedirect: '/admin',
    failureFlash: 'Invalid credentials! Contact admin'
  }),

  // logout Admin
  logout: (req, res) => {
    req.logout()
    req.flash('success', `See you soon...`)
    res.redirect('/blogs')
  },
}