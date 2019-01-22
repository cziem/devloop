const Blog = require('../model/schema')

module.exports = {
  // Home page
  redirect: (req, res) => {
    // For now we will redirect to the blog page
    res.redirect('/blogs')
  },

  // INDEX ROUTE
  getBlogs: (req, res) => {
    res.render('index')
  },

  // NEW POST FORM
  newBlog: (req, res) => {
    // Render a form for new Blog post creation
    res.render('new')
  },

  // CREATE BLOG
  createBlog: (req, res) => {
    // Handle form data coming from new blog post page
    res.send('creating new blog post')
  },

  // SHOW BLOG
  showBlog: (req, res) => {
    // Show details about a blog using it's id
    res.send('showing a blog post')
  },

  // EDIT BLOG
  editBlog: (req, res) => {
    // Render form for editing a Blog post
    res.render('edit')
  },

  // UPDATE BLOG
  updateBlog: (req, res) => {
    // update blog details by blog's id
    res.send('updating a blog post')
  },

  // DELETE BLOG
  deleteBlog: (req, res) => {
    // delete a blog post by it's id
    res.send('deleting a blog post')

    // redirect to /blogs
  }
}