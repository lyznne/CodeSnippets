import express from "express";
import cors from 'cors';
import mongoose from "mongoose";
import LanguageRouter from "./routes/LangRoutes.js";
import SnippetRouter from "./routes/CodeSnippetsRoutes.js";


const app = express();
const dbUrl = 'mongodb://127.0.0.1:27017/codeSnippets';

// Use cors middleware with default options
app.use(cors());
// Parse JSON requests
app.use(express.json());



// connect to the database
mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log("[+] Database connection successful ✨✨");
})
.catch((error) => {
    console.log(`[-] Error connecting to DB ${error} 🐛`);
});

// Routes
app.use('/langs', LanguageRouter);
app.use('/snippets', SnippetRouter);


export default app;
