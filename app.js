require('./config/config')
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const methodOverride = require('method-override')
const expressSanitizer = require('express-sanitizer')
const passport = require('passport')
const flash = require('connect-flash')

const blogRouter = require('./routes/route')
const adminRouter = require('./routes/adminRoute')

const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(expressSanitizer())
app.use(methodOverride('_method'))
app.use(flash())
app.locals.moment = require('moment')

// Configure Passport
app.use(require('express-session')({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())

// Set view engine
app.set('view engine', 'ejs')
app.use(express.static('public'))

// pass current user to every page and route
app.use((req, res, next) => {
  res.locals.currentUser = req.user
  res.locals.error = req.flash("error")
  res.locals.warn = req.flash("warn")
  res.locals.success = req.flash("success")
  next()
})



const port = process.env.PORT
const uri = process.env.MONGODB_URI

// connect to DB
mongoose.connect(uri, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useFindAndModify: false
})
  .then(() => console.log(`successful connection to DB ${uri}`))
  .catch(err => console.log(`failed attempts to connect to DB! Error: ${err}`))

app.use('/', blogRouter)
app.use('/admin', adminRouter)

app.listen(port, () => console.log(`application running at http://localhost:${port}`))