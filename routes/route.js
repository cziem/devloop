const express = require('express')
const router = express.Router()

const controller = require('../controllers/app')

// Get all blogs
router.get('/', controller.redirect)
router.get('/blogs', controller.getBlogs)

// Create new blog post
router.get('/blogs/new', controller.newBlog)
router.post('/blogs', controller.createBlog)

// Display a single blog post
router.get('/blogs/:id', controller.showBlog)

// Edit and update a blog post
router.get('/blogs/:id/edit', controller.editBlog)
router.put('/blogs/:id', controller.updateBlog)

// Delete a blog post
router.delete('/blogs/:id', controller.deleteBlog)

module.exports = router