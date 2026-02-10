import "dotenv/config"

export default {
  PORT: process.env.PORT || 3000,
  MONGO_URI: process.env.MONGODB_URI,
  ALLOW_URL: process.env.ALLOW_URL
}
