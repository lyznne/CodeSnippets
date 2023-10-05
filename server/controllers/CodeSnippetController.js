import Language from "../models/LangModel.js";
import SnippetService from "../services/CodeSnippetServices.js";

export const getAllCodeSnippets = async (req, res) => {
    try {
        const codeSnippets = await SnippetService.getAllCodeSnippets();
        res.json({ data: codeSnippets, status: "success ✨ " });

    } catch (err) {
        res.status(500).json({ error: err.message })
        console.log(`[-] Error in controller -: getall  codeSnippets ${err.message} 🐛`);

    }
}


export const createCodeSnippet = async (req, res) => {
    try {
        //   extract relevant properties from body 
        const { title, description, code, languageName } = req.body;
        // find the language 
        const language = await Language.findOne({ languageName });

        if (!language) {
            console.log(`[-] Language not found ${language}`)
            return res.status(404).json({ error: "Language not found " });

        }
        const codeSnippet = await SnippetService.createCodeSnippet({
            title, description, code, language: language._id
        });
        res.json({ data: codeSnippet, status: "success ✨ " });

    } catch (err) {
        res.status(500).json({ error: err.message })
        console.log(`[-] Error in controller -: create code snippet:: ${err.message} 🐛`);
    }
}

export const getCodeSnippetById  = async (req, res) => {
    try {
        const codeSnippet = await SnippetService.getCodeSnippetById(req.params.id);
        res.json({ data: codeSnippet, status: "success ✨ " });

    } catch (err) {
        res.status(500).json({ error: err.message })
        console.log(`[-] Error in controller -: get codeSnippet by id ${err.message} 🐛`);

    }
}

export const updateCodeSnippet = async (req, res) => {
    try {
        const codeSnippet = await SnippetService.updateCodeSnippet(req.params.id, req.body);
        res.json({ data: codeSnippet, status: "success ✨ " });

    } catch (err) {
        res.status(500).json({ error: err.message })
        console.log(`[-] Error in controller -:  updateSnippets ${err.message} 🐛`);

    }
}

export const deleteCodeSnippet = async (req, res) => {
    try {
        const codeSnippet = await SnippetService.deleteCodeSnippet(req.params.id);
        res.json({ data: codeSnippet, status: "success ✨ " });

    } catch (err) {
        res.status(500).json({ error: err.message })
        console.log(`[-] Error in controller -: delete codeSnippets  ${err.message} 🐛`);

    }
}
