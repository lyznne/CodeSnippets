import express from "express";
import { getAllLanguages, createLanguage, getLanguageById, updateLanguage, deleteLanguage } from "../controllers/LangController.js";

const LanguageRouter = express.Router();

LanguageRouter.route('/').get(getAllLanguages).post(createLanguage);
LanguageRouter.route('/:id').get(getLanguageById).put(updateLanguage).delete(deleteLanguage);

export default LanguageRouter;  
