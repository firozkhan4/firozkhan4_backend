import express from "express"
import config from "./config.js"
import connectDB from "./db.js"
import cors from "cors"


import certificateRoutes from "./modules/certificates/route/certificateRoute.js"
import blogRoutes from "./modules/blogs/route/blogRoute.js"

const PORT = config.PORT
const app = express()


app.use(cors({
  origin: config.ALLOW_URL.split(",")
}))
app.use(express.json())


app.get("/", (req, res) => { res.json({ up: process.uptime() }) })

app.use("/api/certificates", certificateRoutes)
app.use("/api/blogs", blogRoutes)


connectDB()
  .then(() => {
    app.listen(PORT, () => { console.log(`server listing on http://localhost:${PORT}`) })
  })
  .catch((error) => { console.error({ error }) })

