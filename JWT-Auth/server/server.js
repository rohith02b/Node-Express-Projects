import express from "express"
import authroutes from "./routes/auth.js"
import cors from 'cors'



const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/auth", authroutes)

app.listen(4000, () => {
 console.log("Working")
})