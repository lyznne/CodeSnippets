import mongoose, { Schema } from "mongoose"; 

const LangSchema = new Schema({
    languageName: String,
    createAt: {
        type: Date, 
        default: Date.now,
    }

})

const  Language  = mongoose.model('Language', LangSchema)
export default Language;
