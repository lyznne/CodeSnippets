import mongoose, { Schema } from "mongoose";

const blogSchema = new Schema({
    title: String,
    body: String, 
    image: String,
    createdAt: {
        type: Date,
        default: Date.now ,
    }
});


const Blog  =  mongoose.model('Blog', blogSchema);

export default Blog