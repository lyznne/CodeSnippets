import Language from "../models/LangModel.js"

const createLanguage = async (languageName) => {
    return await Language.create(languageName);
}

const getAllLanguages = async () => {
    return await Language.find();
}

const getLanguageById = async (id) => {
    return await Language.findById(id);
}

const updateLanguage = async (id, languageName) => {
    return await Language.findByIdAndUpdate(id, languageName);
}

const deleteLanguage = async (id) => {
    return await Language.findByIdAndDelete(id);
}


const LanguageService = {
    getAllLanguages,
    getLanguageById,
    updateLanguage, deleteLanguage, createLanguage
}


export default LanguageService;
