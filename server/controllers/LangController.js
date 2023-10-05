
import mongoose from "mongoose";
import LanguageService from "../services/LangServices.js";
import Language from "../models/LangModel.js";

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
        const languageId = req.params.id;
        console.log("language id:: ", languageId);

        // validate if the provided id is a valid object 
        if(!mongoose.Types.ObjectId.isValid(languageId)) {
            return res.status(400).json({ error: "Invalid language ID" });
        };

        const language = await Language.findById(languageId);

        if (!language) {
            return res.status(404).json({ error: "Language not found" });
        }

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