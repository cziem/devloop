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
          res.json({
            admin,
            status: 200
          })
          res.render('user/dashboard', admin)
        })
      } catch (error) {
        res.send(`Sorry new Admin ${req.body.username}, could not be registered...`)
        console.log(error)
      }
    } else {
      const err = {
        status: 401,
        message: `You have no authorized passcode for this operation. Contact devloops admin <a href="mailto:help@devloops.com">here</a>`
      }
      req.flash('error', err.message)
      res.render('users/admin')
    }

  }
}