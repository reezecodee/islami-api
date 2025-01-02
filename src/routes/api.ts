import { Router } from "express";

import AuthorController from "../controllers/author-controller";
import AsmaulHusnaController from "../controllers/asmaul-husna-controller";
import DoaHarianController from "../controllers/doa-harian-controller";

let router = Router();

router.get('/author', AuthorController);
router.get('/asmaul-husna/all', AsmaulHusnaController.all)
router.get('/asmaul-husna/:urutan', AsmaulHusnaController.urutan)
router.get('/doa-harian', DoaHarianController)

export default router;
