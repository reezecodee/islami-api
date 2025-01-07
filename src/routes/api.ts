import { Router } from "express";

import AuthorController from "../controllers/author-controller";
import AsmaulHusnaController from "../controllers/asmaul-husna-controller";
import DoaHarianController from "../controllers/doa-harian-controller";
import NiatSholatWajibController from "../controllers/niat-sholat-wajib-controller";

let router = Router();

router.get('/', AuthorController);
router.get('/api/asmaul-husna/all', AsmaulHusnaController.all)
router.get('/api/asmaul-husna/:urutan', AsmaulHusnaController.urutan)
router.get('/api/doa-harian', DoaHarianController)
router.get('/api/niat-sholat-wajib/all', NiatSholatWajibController.all)
router.get('/api/niat-sholat-wajib/:niat', NiatSholatWajibController.niat)
router

export default router;
