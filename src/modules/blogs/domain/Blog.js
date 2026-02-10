import { model, Schema } from "mongoose";

const blogSchema = Schema({
  title: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  readingTime: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  }
})
const Blog = model("Blog", blogSchema)

export default Blog;
