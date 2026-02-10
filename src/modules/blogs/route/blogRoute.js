import express from "express"
import blogController from "../controller/blogController.js"


const route = express.Router()

route.get("/", blogController.getAllBlogs)
route.post("/", blogController.createBlog)


export default route
