const moment = require('moment')
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const blogSchema = new Schema({
  title: { type: String, required: true },
  imgUrl: { type: String, required: true },
  body: { type: String, trim: true },
  createdAt: { type: Date, default: moment() }
})

const Blog = mongoose.model('Blog', blogSchema)

module.exports = Blog