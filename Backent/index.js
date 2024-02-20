import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import multer from "multer"


// middleware ----------------------------------------------------------------------------------

const app = express()
app.use(express.json())
app.use(cors())


// multer ----------------------------


// Api -------------------------------------------------------------------------------------
app.get('/', (req, res) => {
    res.send('hello world')
})







app.listen(5000, () => {
    console.log("server is running")
})


// database ------------------------------------------------------------------------
const db = () => {
    try{
        const db = mongoose.connect('mongodb+srv://udamy_user:vfVjiniUHSosqrV2@cluster0.8r3vhxn.mongodb.net/?retryWrites=true&w=majority', {
            dbName:"Multer-Pdf"
        }).then(() => console.log("database is connected............"))

    }catch(err){
        console.log(err)
    }
}

db()
