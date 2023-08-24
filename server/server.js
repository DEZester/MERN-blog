import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
const app = express()
dotenv.config()

const PORT = process.env.PORT || 3001

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => { app.listen(PORT, () => console.log(`Server is started with port:${process.env.PORT}`))})
  .catch((err) => console.log(`${err} did not connect`))

