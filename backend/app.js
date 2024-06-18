import dotenv from "dotenv"
import express from "express"
import cors from "cors"

import dbConnect from "./db/db.js"

dotenv.config({
    path : "./.env"
});

const PORT = process.env.PORT || 5000

const app=express()

//middlewares
app.use(express.json())
app.use(cors())

import transactionRouter from './routes/transactions.route.js'

//routes declaration
app.use("/api/v1", transactionRouter)

dbConnect()
app.listen(PORT, ()=>{
    console.log("listening on PORT: ",PORT)
})


