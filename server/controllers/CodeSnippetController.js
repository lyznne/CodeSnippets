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
        const codeSnippet = await SnippetService.createCodeSnippet(req.body);
        res.json({ data: codeSnippet, status: "success ✨ " });

    } catch (err) {
        res.status(500).json({ error: err.message })
        console.log(`[-] Error in controller -: create codeSnippets ${err.message} 🐛`);

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
