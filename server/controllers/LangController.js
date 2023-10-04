
import LanguageService from "../services/LangServices.js";

export const getAllLanguages = async (req, res) => {
    try {
        const languages = await LanguageService.getAllLanguages();
        res.json({ data: languages, status: "success ✨ " });

    } catch (err) {
        res.status(500).json({ error: err.message })
        console.log(`[-] Error in controller -: getall Languages ${err.message} 🐛`);

    }
}

export const createLanguage = async (req, res) => {
    try {
        const language = await LanguageService.createLanguage(req.body);
        res.json({ data: language, status: "success ✨ " });
    } catch (err) {
        res.status(500).json({ error: err.message })
        console.log(`[-] Error in controller -:create Languages ${err.message} 🐛`);

    }
}


export const getLanguageById = async (req, res) => {
    try {
        const language = await LanguageService.createLanguage(req.params.id);
        res.json({ data: language, status: "success ✨ " });
    } catch (err) {
        res.status(500).json({ error: err.message })
        console.log(`[-] Error in controller -: getbyid Language ${err.message} 🐛`);

    }
}


export const updateLanguage = async (req, res) => {
    try {
        const language = await LanguageService.updateLanguage(req.params.id, req.body);
        res.json({ data: language, status: "success ✨ " });
    } catch (err) {
        res.status(500).json({ error: err.message })
        console.log(`[-] Error in controller -: update Language ${err.message} 🐛`);

    }
}



export const deleteLanguage = async (req, res) => {
    try {
        const language = await LanguageService.deleteLanguage(req.params.id);
        res.json({ data: language, status: "success ✨ " });
    } catch (err) {
        res.status(500).json({ error: err.message })
        console.log(`[-] Error in controller -: delete Language ${err.message} 🐛`);

    }
}