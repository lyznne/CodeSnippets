import express  from "express";
import cors from 'cors'
import mongoose from "mongoose";
import router from "./routes/LangRoutes.js"

const app = express()
const dbUrl = 'mongodb://127.0.0.1:27017/codeSnippets'

//app use 
app.use(cors);
app.use(express.json());


app.get('/msg', (req, res) => {
    console.log("hi")
    res.send({ 'message' : 'successs'})
})

// connect to the database 
mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

.then(() => {
    console.log("[+] Database connection successful ✨✨ ");
})
.catch((error) => {
    console.log(`[-] Error connecting to DB ${error} 🐛`);

})


// Routes 
app.use("/langs", router)



export default app




