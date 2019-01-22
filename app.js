const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const methodOverride = require('method-override')
const expressSanitizer = require('express-sanitizer')

const blogRouter = require('./routes/route')

const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(expressSanitizer())
app.use(methodOverride('_method'))

// Set view engine
app.set('view engine', 'ejs')
app.use(express.static('public'))

const port = process.env.PORT || 4000
const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/devloop'

// connect to DB
mongoose.connect(uri, {
  useCreateIndex: true,
  useNewUrlParser: true
})
  .then(() => console.log('successful connection to DB'))
  .catch(err => console.log(`failed attempts to connect to DB! Error: ${err}`))

app.use('/', blogRouter)

app.listen(port, () => console.log(`application running at localhost://${port}`))