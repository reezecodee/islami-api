import { Router } from "express";

import AuthorController from "../controllers/author-controller";
import AsmaulHusnaController from "../controllers/asmaul-husna-controller";

let router = Router();

router.get('/author', AuthorController);
router.get('/asmaul-husna/all', AsmaulHusnaController.all)
router.get('/asmaul-husna/:urutan', AsmaulHusnaController.urutan)

export default router;
