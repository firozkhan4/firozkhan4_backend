import blogService from "../service/blogService.js"

async function getAllBlogs(req, res) {
  const blogs = await blogService.getAllBlogs()
  return res.json(blogs)
}
async function createBlog(req, res) {
  const blog = await blogService.createBlog(req.body)
  return res.json(blog)
}


export default { getAllBlogs, createBlog }
