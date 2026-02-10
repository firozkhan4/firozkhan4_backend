import mongoose from "mongoose";
import config from "./config.js";



const connectDB = async () => {
  try {
    const conn = await mongoose.connect(config.MONGO_URI, {
      dbName: "firozkhan4"
    })
    console.log("DB connected")
    return conn
  } catch (error) {
    console.error({ error })
  }
}

export default connectDB
