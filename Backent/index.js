import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import multer from "multer"
import { PdfSchema } from "./models/pdf.js"


// middleware ----------------------------------------------------------------------------------

const app = express()
app.use(express.json())
app.use(cors())


// multer ----------------------------

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './files')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() 
      cb(null, uniqueSuffix + file.originalname)
    }
  })
  
  const upload = multer({ storage: storage })

app.post("/upload-file", upload.single('file'), async(req, res) => {

    // console.log("pdf-file",req.file)
    const title = req.body.title
    const file = req.file.filename

    try{
        await PdfSchema.create({title, pdf:file})
        res.send({status:"Ok"})
    }catch(err){
        res.json({status:err})
    }

})






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
