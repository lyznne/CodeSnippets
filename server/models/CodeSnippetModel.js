import mongoose  from "mongoose"; 

const SnippetSchema = new Schema({
    title: String, 
    description: String,
    code: String,
    createAt: {
        type: Date, 
        default: Date.now,
    },
    language: {
        type: Schema.Types.ObjectId,
        ref: 'Language'
    }
})

const Snippet = mongoose.model('Snippet' , SnippetSchema);

export default Snippet;
