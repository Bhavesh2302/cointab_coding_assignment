
const express  = require("express")
const { connection } = require("./configs/db")
require("dotenv").config()
const cors = require("cors")
const app = express()

const PORT = process.env.PORT || 7500

app.use(cors())
app.use(express.json())

app.get("/",(req,res)=>{

    res.send("hello there")
})

app.listen(PORT, async()=>{
    try {
        await connection
        console.log("running on port: http://localhost:7500")
    } catch (error) {
        console.log(error)
    }
})