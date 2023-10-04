import Snippet from "../models/CodeSnippetModel.js"

const createCodeSnippet = async (title) => {
    return await Snippet.create(title);
}

const getAllCodeSnippets = async () => {
    return await Snippet.find();
}

const getCodeSnippetById = async (id) => {
    return await Snippet.findById(id);
}

const updateCodeSnippet = async (id, title) => {
    return await Snippet.findByIdAndUpdate(id, title);
}

const deleteCodeSnippet = async (id) => {
    return await Snippet.findByIdDelete(id);
}


const SnippetService = {
    getAllCodeSnippets,
    getCodeSnippetById,
    createCodeSnippet,
    updateCodeSnippet,
    deleteCodeSnippet,
}

export default SnippetService;