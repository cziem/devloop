const express = require('express')
const router = express.Router()

const { isLoggedIn } = require('../middlewares/auth')

const controller = require('../controllers/app')

// Get all blogs
router.get('/', controller.redirect)
router.get('/blogs', controller.getBlogs)

// Create new blog post
router.get('/blogs/new', isLoggedIn, controller.newBlog)
router.post('/blogs', isLoggedIn, controller.createBlog)

// Display a single blog post
router.get('/blogs/:id', controller.showBlog)

// Edit and update a blog post
router.get('/blogs/:id/edit', isLoggedIn, controller.editBlog)
router.put('/blogs/:id', isLoggedIn, controller.updateBlog)

// Delete a blog post
router.delete('/blogs/:id', isLoggedIn, controller.deleteBlog)

module.exports = router