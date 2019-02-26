const Blog = require("../model/schema");

module.exports = {
  // Home page
  redirect: (req, res) => {
    // For now we will redirect to the blog page
    res.redirect("/blogs");
  },

  // INDEX ROUTE
  getBlogs: (req, res) => {
    Blog.find()
      .sort({ createdAt: -1 })
      .then(blogs => {
        res.render("index", { blogs });
      });
  },

  // NEW POST FORM
  newBlog: (req, res) => {
    // Render a form for new Blog post creation
    res.render("new");
  },

  // CREATE BLOG
  createBlog: (req, res) => {
    // Handle form data coming from new blog post page
    // sanitize
    req.body.blog.body = req.sanitize(req.body.blog.body);

    const author = {
      id: req.user._id,
      username: req.user.username
    };

    const post = req.body.blog;
    post.author = author;

    Blog.create(post)
      .then(blog => {
        res.redirect("/blogs");
      })
      .catch(err => {
        req.flash("error", "Could not create your post!");
        res.render("new");
      });
  },

  // SHOW BLOG
  showBlog: (req, res) => {
    // Show details about a blog using it's id
    const blogId = req.params.id;
    Blog.findById(blogId)
      .then(blog => {
        res.render("show", { blog });
      })
      .catch(() => {
        // render Error page later
        res.redirect("/blogs");
      });
  },

  // EDIT BLOG
  editBlog: (req, res) => {
    // Render form for editing a Blog post
    const blogId = req.params.id;
    Blog.findById(blogId)
      .then(blog => {
        res.render("edit", { blog });
      })
      .catch(() => {
        res.redirect("/blogs");
      });
  },

  // UPDATE BLOG
  updateBlog: (req, res) => {
    // update blog details by blog's id
    // sanitize
    req.body.blog.body = req.sanitize(req.body.blog.body);

    const blogId = req.params.id;
    const updatedBlog = req.body.blog;
    Blog.findByIdAndUpdate(blogId, updatedBlog)
      .then(blog => {
        res.redirect(`/blogs/${blogId}`);
      })
      .catch(() => {
        res.redirect("/blogs");
      });
  },

  // DELETE BLOG
  deleteBlog: (req, res) => {
    // delete a blog post by it's id
    const blogId = req.params.id;
    Blog.findByIdAndDelete(blogId)
      .then(data => {
        res.json(data);
      })
      .catch(err => {
        res.redirect("/blogs");
      });
  },

  // LIKE A POST
  likePost: (req, res) => {
    Blog.findById(req.params.id)
      .then(async blog => {
        blog.likes++;
        let likedBlog = await blog.save();
        res.json(likedBlog);
      })
      .catch(err => console.log(err));
  }
};
