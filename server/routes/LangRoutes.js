import express from "express";
import { getAllLanguages,  createLanguage , getLanguageById, updateLanguage,  deleteLanguage  } from "../controllers/LangController.js";

const router = express.Router(); 

router.route('/').get(getAllLanguages).post(createLanguage);
router.route('/:id').get(getLanguageById).put(updateLanguage).delete(deleteLanguage );

export default router;  
