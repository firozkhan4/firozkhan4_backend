import Blog from "../domain/Blog.js"

async function getAllBlogs() {
  const blogs = await Blog.find({ date: -1 });
  return blogs
}

async function createBlog(b) { }


export default { getAllBlogs, createBlog }
