import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config()
const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
   return res.json({message: 'Hello world2'})
})

const PORT = process.env.PORT || 3001

mongoose.connect(process.env.MONGO_URL)
  .then(() => app.listen(PORT, () => console.log(`Server is started with port:${process.env.PORT}`)))
  .catch((err) => console.log(`${err} did not connect`))

