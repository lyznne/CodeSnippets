import express from  "express";
import cors from 'cors'
import mongoose from "mongoose";
import router from "./routes/BlogRoutes.js";


const app = express();
const PORT = process.env.PORT || 3000 


const dbUrl = 'mongodb://127.0.0.1:27017/codeSnippets'

mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,

})

.then(() => {
    console.log('Connected to mongodb');
})
.catch((error) => {
    console.error('Error connecting to mongodb:', error);
});

app.use("/api/blogs", router)
app.use(express.json());

app.use(cors()) 

app.listen(PORT, () => {
    console.log(`[+] CodeSnippets server running on ${PORT}`); 
})

