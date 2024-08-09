import express from "express";
import dotenv from "dotenv";
import cors from "cors"

import shortUrl from "./routes/shortUrl.js";
import connectDb from "./config/dbConfig.js";
dotenv.config()
connectDb()
const port = process.env.PORT || 8080
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//connecting frontend aur frontend wale code m backend ka url dnge 
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
}))
app.use('/api/', shortUrl)

app.listen(port, () => {
    console.log(`server is running on port : ${port}`)

})

