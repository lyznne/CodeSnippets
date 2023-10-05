import express from "express";
import {
  getAllCodeSnippets,
  createCodeSnippet,
  getCodeSnippetById,
  updateCodeSnippet,
  deleteCodeSnippet
} from "../controllers/CodeSnippetController.js";

const SnippetRouter = express.Router();

// Routes for code snippets
SnippetRouter.route('/').get(getAllCodeSnippets).post(createCodeSnippet);

SnippetRouter.route('/:id').get(getCodeSnippetById).put(updateCodeSnippet).delete(deleteCodeSnippet);



export default SnippetRouter;
