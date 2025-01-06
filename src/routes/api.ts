import { Router } from "express";

import AuthorController from "../controllers/author-controller";
import AsmaulHusnaController from "../controllers/asmaul-husna-controller";
import DoaHarianController from "../controllers/doa-harian-controller";
import NiatSholatWajibController from "../controllers/niat-sholat-wajib-controller";

let router = Router();

router.get('/', AuthorController);
router.get('/asmaul-husna/all', AsmaulHusnaController.all)
router.get('/asmaul-husna/:urutan', AsmaulHusnaController.urutan)
router.get('/doa-harian', DoaHarianController)
router.get('/niat-sholat-wajib/all', NiatSholatWajibController)

export default router;
