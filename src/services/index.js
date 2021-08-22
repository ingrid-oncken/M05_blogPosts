import express from "express"

const blogPostsRouter = express.Router()

blogPostsRouter.get("/", async (req, res, next) => {
  try {
    const blogPosts = await getBlogPosts()

    if (req.query && req.query.title) {
      const filteredBlogPosts = blogPosts.filter(
        (bp) => bp.title === req.query.title
      )
      res.send(filteredBlogPosts)
    } else {
      res.send(blogPosts)
    }
  } catch (error) {
    next(error)
  }
})

export default blogPostsRouter
