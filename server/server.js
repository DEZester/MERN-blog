import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'

import authRoute from './routes/auth.js'

const app = express()
dotenv.config()

app.use(cors())
app.use(express.json())

app.use('/api/auth', authRoute)

const PORT = process.env.PORT || 3001

mongoose.connect(process.env.MONGO_URL)
  .then(() => app.listen(PORT, () => console.log(`Server is started with port:${process.env.PORT}`)))
  .catch((err) => console.log(`${err} did not connect`))

