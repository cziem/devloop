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

Blog.create({
  title: 'Test Blog',
  imgUrl: 'https://photosforclass.com/download/flickr-1342367857',
  body: "this is our test blog"
})

module.exports = Blog